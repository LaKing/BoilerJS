/*ßoilerplate */

const app = ß.app;

app.get('/payment-braintree.html', function(req, res, next) {

    if (!req.session) return res.redirect('/');
    if (!req.user) return res.redirect('/login');

    const id = req.user._id; //req.session.passport.user

    ß.lib.payment.initialize_payment(req.session, function(err) {
        if (err) {
            res.send("ERROR. Mission failed. Could not initialize payment.");
            console.log(err);
            return;
        }

        if (ß.USE_PAYMENT_BRAINTREE) {
            console.log("ß.USE_PAYMENT_BRAINTREE");
            ß.lib.payment_braintree.render_page(req, res, next);
            return;
        }

        res.send("ERROR. Mission failed. Could not find a method for payment.");
        console.log("ERROR in payment. No payment could be used.");

    });
});