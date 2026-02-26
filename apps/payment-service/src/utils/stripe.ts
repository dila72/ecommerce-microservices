import Stripe from "stripe";

const stripe = new Stripe(process.env.Stripe_SECRET_KEY as string, {
    apiVersion: "2025-08-27.basil" as any,
});

export default stripe;