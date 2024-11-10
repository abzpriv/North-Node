// app/api/payment/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20', 
});

export async function POST(req: Request) {
  const { paymentMethodId } = await req.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethodId,
      amount: 2000,
      currency: 'usd', 
      confirm: true,
      return_url: 'https://north-node.vercel.app/',
    });

    // Option 2: Disable redirect-based payment methods
    // const paymentIntent = await stripe.paymentIntents.create({
    //   payment_method: paymentMethodId,
    //   amount: 1000, // Replace with your desired amount in cents
    //   currency: 'usd', // Use your desired currency
    //   confirm: true,
    //   automatic_payment_methods: {
    //     enabled: true,
    //     allow_redirects: 'never', // Prevent redirects
    //   },
    // });

    return NextResponse.json({ success: true, paymentIntent });
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'An unknown error occurred.' }, { status: 500 });
  }
}
