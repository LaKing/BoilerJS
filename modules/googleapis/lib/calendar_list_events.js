/*jshint esnext: true */

//https://stackoverflow.com/questions/44962062/accessing-google-calendar-api-from-node-server

module.exports = function(calendarId, callback) {

    //authenticate request
    ß.jwtClient.authorize(function(err, tokens) {
        if (err) {
            console.log("ERROR Google calendar connection failed!", err);
            return callback(err, null);
        } else {
            //console.log("Google calendar - Successfully connected!", calendarId);
            let calendar = ß.google.calendar('v3');
            calendar.events.list({
                auth: ß.jwtClient,
                calendarId: calendarId,
                singleEvents: true,
                maxResults: 100,
                timeMin: (new Date()).toISOString()
            }, function(err, response) {
                if (err) return console.log("ERROR google_calendar.list_events FAILED", calendarId);
                console.log("google_calendar.list_events fetched", response.data.items.length, "from", calendarId);
                return callback(err, response.data);
            });

        }
    });

};