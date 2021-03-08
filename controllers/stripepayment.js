const stripe = require("stripe")("sk_test_51HafilJGGPlWmPc17S66sa9HAIQORXuRhv9trZYwodHQL96l4dRsTlWUijSWq4mngtx63RuIeECSQBQqxADLRE2k00q6GvO2zN");
const uuid = require("uuid/v4");

exports.makepayment = (req, res) => {
    const {products, token} = req.body;
    console.log("PRODUCTS ", products);

    let amount = 0;
    products.map(p => {
        amount= amount + p.price;
    });

    const idempotencykey = uuid();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: amount * 100,
            currency: "usd",
            receipt_email: token.email,
            shipping: {
                name: token.card.name
            }
        }, {idempotencykey})
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
    })

}