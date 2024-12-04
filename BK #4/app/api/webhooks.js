import Stripe from 'stripe';
import { buffer } from 'micro';
import Cors from 'micro-cors';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET; // It's best to use env variables for sensitive data

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle raw requests
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

const webhookHandler = async (req, res) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as necessary for your use case
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const buf = await buffer(req); // Retrieve raw body
    const signature = req.headers['stripe-signature']; // Retrieve Stripe signature

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf.toString(), signature, webhookSecret);
    } catch (err) {
      console.error(`Webhook Error: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log('Success:', event.id); // Log the successful event

    // Handle the event type
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent status: ${paymentIntent.status}`);
        break;
      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object;
        console.log(`Payment failed: ${failedPaymentIntent.last_payment_error?.message}`);
        break;
      case 'charge.succeeded':
        const charge = event.data.object;
        console.log(`Charge id: ${charge.id}`);
        break;
      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }

    // Acknowledge receipt of the event
    return res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
};

export default cors(webhookHandler); // Export the CORS-enabled webhook handler
