/*jshint esnext: true */

const app = ß.app;

app.get('/payment-simplepay.html', function(req, res, next) {

    if (!req.session) return res.redirect('/');
    if (!req.session.passport) return res.redirect('/login');
    if (!req.session.passport.user) return res.redirect('/login');

    ß.lib.payment.initialize_payment(req.session, function(err) {
        if (err) {
            res.send("ERROR. Mission failed. Could not initialize payment.");
            console.log(err);
            return;
        }

        if (ß.USE_PAYMENT_SIMPLEPAY) {
            console.log("ß.USE_PAYMENT_SIMPLEPAY");
            ß.lib.payment_simplepay.render_page(req, res, next);
            return;
        }

        res.send("ERROR. Mission failed. Could not find a method for payment.");
        console.log("ERROR in payment. No payment could be used.");

    });
});