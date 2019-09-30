const {GmailApi} = require('./gmailAPI');


exports.handler = (event, context, callback) => {
    GmailApi.send(JSON.parse(event.body));
    let httpTimeout = setTimeout(() => {
        clearInterval(checkStatus);
        return callback(null, {
            statusCode: 200,
            body: GmailApi.statusCode
        });
    }, 8000);
    let checkStatus = setInterval(() => {
        if(GmailApi.statusCode !== ''){
            clearTimeout(httpTimeout);
            clearInterval(checkStatus);
            return callback(null, {
                statusCode: 200,
                body: GmailApi.statusCode
            });
        }
    }, 10);
}