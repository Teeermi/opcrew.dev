// app/api/checkout_sessions/webhooks.js
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const { origin } = new URL(req.headers.get('referer'));

       const {searchParams} = new URL(req.url);

        console.log(searchParams.get('id'));

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: 'price_1QGOLmL4KB0CtOf4dXOLkQvt',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/?success=true`,
            cancel_url: `${origin}/?canceled=true`,
            automatic_tax: { enabled: true },
        });

        // Return a redirect response
        return NextResponse.redirect(session.url, 303);
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
    }
}
