import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { origin } = new URL(req.headers.get("referer"));

    const { searchParams } = new URL(req.url);

    const searchedId = searchParams.get("id");

    const testObject = [
      {
        name: "battlepass",
        price: "price_1QGOLmL4KB0CtOf4dXOLkQvt",
      },
      {
        name: "asdasd",
        price: "price_1QGOLmL4KB0CtOf4dXOLkQvt",
      },
    ];

    const data = testObject.find((item) => item.name === searchedId);

    console.log(data.price);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${data.price}`,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
      automatic_tax: { enabled: true },
    });

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { message: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
