const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  //@route GET api/users/test
  //@desc Get the test users route
  //@access Public
  async testRouter(req, res) {
    await res.json({ msg: 'Сообщение от тестового роута' });
  },

  //@route POST api/payment
  //@desc Payment for purchase
  //@access Public
  async payment(req, res) {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd',
    };
    try {
      const stripeResponse = await stripe.charges.create(body);
      res.status(200).send({ success: stripeResponse });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
