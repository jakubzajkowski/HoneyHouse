import express from "express"
import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string,{apiVersion: '2023-08-16'})

const CheckoutController=async (req:express.Request,res:express.Response)=>{
    const {data} = req.body
    if (data.length!=0){
        try{
            const params: Stripe.Checkout.SessionCreateParams = {
                payment_method_types: ['card','p24','paypal',"blik"],
                mode: 'payment',
                line_items: data.map((item :any)=>{
                    return {
                        price_data: {
                            currency: 'pln',
                            product_data: {
                                images: [item.img],
                                name: item.name,
                            },
                            unit_amount: Math.round((item.price*100*4)*100) / 100,
                        },
                        quantity: 1
                    }
                }),
                success_url: `${req.headers.origin}?status=success&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}?status=cancelled`,
            }
            const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)
    
                res.status(200).json(checkoutSession)
        }
        catch (err: any){
            console.log(err)
            res.status(500).json({error: err.message})
        }
    }
    else{
        res.status(500).json({error: 'no items'})
    }
}

export default CheckoutController
