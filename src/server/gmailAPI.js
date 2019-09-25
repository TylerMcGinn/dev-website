const faunadb = require('faunadb');
const axios = require('axios');
const {google} = require('googleapis');
const q = faunadb.query;
const client = new faunadb.Client({ secret:process.env.FAUNADB_SECRET });


let GmailApi = {
    statusCode:'',
    test:"testycles",
    send:function(emailMessage){
        getAuthCredentials(emailMessage);
    }
}


function getAuthCredentials(emailToSend){
    client.query(q.Get(q.Match(q.Index('all_credentials'))))
    .then(res=>{
        let credentials = res.data;
        let ref_Id = res.ref.value.id;
        if(!Object.keys(credentials).includes('access_token') || new Date().getTime() >= (credentials.access_token_issue_time + 3600000)){
            getNewAccessToken(credentials, ref_Id, emailToSend);
        }
        else{
            Oauth2Config(credentials, emailToSend);
        }
    })
    .catch(err=>{
        GmailApi.statusCode = err;
    });
}


function getNewAccessToken(credentials, ID, emailToSend){
    let postBody = `grant_type=refresh_token&client_id=${encodeURIComponent(credentials.client_id)}&client_secret=${encodeURIComponent(credentials.client_secret)}&refresh_token=${encodeURIComponent(credentials.refresh_token)}`
    axios({
        method:'post',
        url:'https://www.googleapis.com/oauth2/v4/token',
        data: postBody
    }).then((res)=>{
        if(Object.keys(res.data).includes('refresh_token')){
            credentials.refresh_token = res.data.refresh_token;
        }
        credentials.access_token = res.data.access_token;
        credentials.access_token_issue_time = new Date().getTime();
        client.query(q.Update(q.Ref(q.Collection('credentials'),ID),{
            data:{
                refresh_token:credentials.refresh_token,
                access_token:credentials.access_token,
                access_token_issue_time:credentials.access_token_issue_time
            }
        }))
        .then(()=>{
            getAuthCredentials(emailToSend);
        })
        .catch(err=>{
            GmailApi.statusCode = err;
        });
    })
    .catch((err)=>{
        GmailApi.statusCode = err;
    });
}


function Oauth2Config(credentials, emailToSend) {
    let client_secret = credentials.client_secret;
    let client_id = credentials.client_id;
    let redirect_url = credentials.redirect_uris[0];
    let {OAuth2} = google.auth;
    let oauth2Client = new OAuth2(client_id, client_secret, redirect_url);
    oauth2Client.credentials = { access_token:credentials.access_token };
    gmailSendMessage(oauth2Client, emailToSend);
}


function gmailSendMessage(auth, emailToSend){
    var gmail = google.gmail({ version:'v1', auth });
    let content = messageContent(emailToSend);
    gmail.users.messages.send({
        'auth':auth,
        'userId':'me',
        'resource':{
            raw: content
        }
    }, (err, response)=>{
        response ? GmailApi.statusCode = response.statusText 
                 : GmailApi.statusCode = err.message
    });
}


function messageContent(message){
    let formattedMessage = `${message.Message}\n\n${message.Name}\n${message.Email}\n${message.Phone}\n${message.Company}`;
    let messageBlob = [
        "Content-Type: text/plain; charset='UTF-8' \n",
        "MIME-Version: 1.0 \n",
        "Content-Transfer-Encoding: 7bit \n",
        "to: tylermcginn.dev@gmail.com \n",
        "from: tylermcginn.devwebsite@gmail.com \n",
        "subject: dev website contact form submission \n\n",
        formattedMessage
    ].join('');
    let encodedMessage = new Buffer.from(messageBlob).toString("base64").replace(/\+/g, "-").replace(/\//g, "_");
    return encodedMessage;
}


module.exports = {GmailApi};