# ßoilerplate

ßoiler is a modular framework for Javascript based projects, mainly web applications

## What is it good for? Why should I need this? Why am I reading this?

Think of this as two things: ß and a boilerplate.

### ß - I usually say "the boiler-variable", or it can be called Eszett (IPA: [ɛsˈtsɛt]) or "sharp S" - is a global variable and a directory structure.

Yes, yes, I know, global variables are bad, and pollute the scope. Yes, so we pollute the scope with this singe special character.
We attach functions and some objects to that variable, and this will run a modular structure to build up our project(s).

### The boilerplate itself is a modular structure to start a project with. 

Take a look at the modules to get the idea. So once the whole thing is started you actually have something you can extend, override, and build further.

## Getting Started

Clone the repo into folder where you want to start your project. I usually use /srv/codepad-project.
You can make the boilerplate folder readonly, and create a modules folder to put your own modules and to override existing modules or parts of existing modules.
Please do not modify the boilerplate content in your project!
Take a look at the project_scripts, you may want to move it to the project, edit it eventually and run a few of them.

## Running the installer

Well, I use red Hat based systems so if you know what DNF is, you can run the installer.

You will need NodeJS and npm of course. There are some npm.sh files in th emodules, these will install the node_modules of the modules.

### Other files to consider

You can start your project with server.js that you copy from the project_scripts folder. There is not much in there:

```
require("./boilerplate");

```

## My code style

Sorry, I dont like camel case so much. My variables contain some underscores and are longer. My bad.

## Others

if you see this:
```
ł(this);
Ł(some_variable, or_two_variables);
```
Don't panik. These two are just logging functions.

## Documentation

Well, sorry, there is no documentation yet.

Just rush through the files of the global folder and bug me to write some. Sorry, I'm in a rush.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
____________________ Automatically generated DOC _________________
# The global ßoiler mechanism

## THE ß-variable
This is the primary global variable, visible in the global scope. 

# The global ßoilerplate modules

## boilerplate module admin
  boiler-lib-functions: ```javascript
    ß.lib.admin.check_if_admin(id);
    ß.lib.admin.is_master_password(password);
```
  hook.functions: ```javascript
    adminsocket.delete-user(socket);
    adminsocket.get-users(socket);
    adminsocket.save-user(socket);
    adminsocket.save-user-profile(socket);
```

## boilerplate module angularjs

## boilerplate module animate

## boilerplate module bootstrap3

## boilerplate module debug
  hook.functions: ```javascript
    socket.test(socket);
```

## boilerplate module favicon

## boilerplate module fontawesome4

## boilerplate module frontend

## boilerplate module googleapis
  boiler-lib-functions: ```javascript
    ß.lib.googleapis.calendar_list_events(calendarId, callback);
    ß.lib.googleapis.calendar_update_event(calendarId, eventId, resource, callback);
    ß.lib.googleapis.spreadsheets_list(spreadsheetId, range, callback);
```

## boilerplate module google_calendar
  boiler-lib-functions: ```javascript
    ß.lib.google_calendar.list_events(calendarId, callback);
    ß.lib.google_calendar.update_event(calendarId, eventId, resource, callback);
```

## boilerplate module google_spreadsheets
  boiler-lib-functions: ```javascript
```

## boilerplate module jquery

## boilerplate module language
  boiler-lib-functions: ```javascript
    ß.lib.language.change_handler();
    ß.lib.language.development();
    ß.lib.language.get_by_req(req);
    ß.lib.language.render_file(lang, file);
    ß.lib.language.request_handler();
    ß.lib.language.transpile(folder);
```

## boilerplate module logging

## boilerplate module moment

## boilerplate module mongoose
  boiler-lib-functions: ```javascript
    ß.lib.mongoose.config_mongodb();
    ß.lib.mongoose.define(name);
```
  hook.functions: ```javascript
```

## boilerplate module nodemailer

## boilerplate module offline

## boilerplate module passport
  boiler-lib-functions: ```javascript
    ß.lib.passport.isLoggedIn(req, res, next);
```

## boilerplate module passport_facebook
  boiler-lib-functions: ```javascript
    ß.lib.passport_facebook.config_auth();
```

## boilerplate module passport_google
  boiler-lib-functions: ```javascript
    ß.lib.passport_google.config_auth();
```

## boilerplate module passport_hash
  boiler-lib-functions: ```javascript
    ß.lib.passport_hash.hash(str);
    ß.lib.passport_hash.send(id);
    ß.lib.passport_hash.verify(req, res, callback);
```

## boilerplate module payment
  boiler-lib-functions: ```javascript
    ß.lib.payment.calculate_parameters(session, q);
    ß.lib.payment.initialize_payment(session, callback);
    ß.lib.payment.paymentlibmodule.exports = that;;
    ß.lib.payment.payment_success(ref);
    ß.lib.payment.purge(user);
    ß.lib.payment.render_page(req, res, next);
```
  calling hooks: ```javascript
    ß.run_hooks('payment_success',ref);
```

## boilerplate module payment_barion
  boiler-lib-functions: ```javascript
    ß.lib.payment_barion.get_payment_items(p);
    ß.lib.payment_barion.process_callback(ref, paymentId, callback);
    ß.lib.payment_barion.render_page(req, res, next);
```

## boilerplate module payment_braintree
  boiler-lib-functions: ```javascript
    ß.lib.payment_braintree.prepare_token(req, res, next, callback);
    ß.lib.payment_braintree.render_page(req, res, next);
```

## boilerplate module payment_simplepay
  boiler-lib-functions: ```javascript
    ß.lib.payment_simplepay.check_ipn_validation(data);
    ß.lib.payment_simplepay.generate_formdata(p);
    ß.lib.payment_simplepay.make_ipn_response(data);
    ß.lib.payment_simplepay.render_page(req, res, next);
```

## boilerplate module profile
  hook.functions: ```javascript
    socket.save-profile(socket);
```

## boilerplate module promo
  hook.functions: ```javascript
    adminsocket.add_handler(socket);
```

## boilerplate module server
  boiler-lib-functions: ```javascript
    ß.lib.server.config_mongodb();
    ß.lib.server.serve_static(folder);
```
  hook.functions: ```javascript
```
  calling hooks: ```javascript
    ß.run_hooks('socket',socket);
ß.run_hooks('adminsocket',socket);
```

## boilerplate module session
  boiler-lib-functions: ```javascript
    ß.lib.session.update_user(session, user);
```
  hook.functions: ```javascript
    socket.session-data(socket);
```
  calling hooks: ```javascript
    ß.run_hooks("session_update_user",session,user);
```

## boilerplate module settings
  boiler-lib-functions: ```javascript
    ß.lib.settings.readSync();
```
  hook.functions: ```javascript
    adminsocket.get-settings(socket);
    adminsocket.save-settings(socket);
```

## boilerplate module smartforms
  boiler-lib-functions: ```javascript
    ß.lib.smartforms.get_smartform_schema(file);
```

## boilerplate module szamlazz
  boiler-lib-functions: ```javascript
    ß.lib.szamlazz.get_client(payment);
    ß.lib.szamlazz.get_seller(payment);
    ß.lib.szamlazz.makeInvoice(userid, paymentid);
```
  hook.functions: ```javascript
    payment_success.make_invoice(ref);
```
  calling hooks: ```javascript
    ß.run_hooks('invoice_created',{
```

## boilerplate module verify
  boiler-lib-functions: ```javascript
    ß.lib.verify.email(address, callback);
```


# The local project modules

