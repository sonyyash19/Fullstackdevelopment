const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "3938yg7jr7hjgp3z",
  publicKey: "mvs5crpsy5jw2pjn",
  privateKey: "343e704a779e83c9fda8720d5a8b6b3e"
});

exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, (err, response) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.send(response);
        }
      });
}

exports.processPayment = () => {
    let nonceFromTheClient = req.body.paymentMethodNonce;
    let amountFromTheClient = req.body.amount;
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
       
        options: {
          submitForSettlement: true
        }
      },  (err, result) => {
          if(err){
              res.status(500).json(err);

          }else {
              res.json(result);
          }
      });
}