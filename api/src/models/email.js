import _ from 'lodash'
import {url} from "./config";

export default class Email {

    constructor(app){

        this.app = app;

    }

    sendDownloadLink(post, callback = ()=> {}){

        const app = this.app;
        const email = app.email;
        const from = _.get(post, 'from'); //post.from
        const to = _.get(post, 'to'); //post.to
        const message = _.get(post, 'message', ''); //post.message
        const postId = _.get(post, '_id'); //the id of the file
        const downloadLink = `${url}/share/${postId}`;

        //message to email
        let messageOptions = {

            from: from, //sender address
            to: to, //list of receivers
            subject: '[UpFiles] Download Invitation',
            text: message, //the message body
            html: `<p>${from} has sent to you file. Click <a href="${downloadLink}">here</a> to download.</p><p>Message: ${message}</p>`


        }

        //send email with defined transport object
        email.sendMail(messageOptions, (err, info) => {
            if (err) {
                console.log('Failed to send mail to: ' + to, err);
            } else {
                console.log('Mail sent to: ' + to);
                return callback(err, info);
            }
          });

        // verify connection configuration
        email.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
        }
    });
        
    }

}
