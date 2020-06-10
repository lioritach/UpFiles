export const smtp = {

    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, //True for 465, false for others
    //NOTE! use your password. Take it from the web sendgrid.net
    auth: {
        user: 'apikey', //generated ethernal user
        pass: 'YOURPASSWORD' //generated ethernal password
    }

};

export const url = 'http://localhost:3001';