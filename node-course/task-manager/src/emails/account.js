const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'jalvarez@intekglobal.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jalvarez@intekglobal.com',
        subject: 'Sorry to see you go!',
        text: `We are sorry you leave, ${name}. Can we do something to get you back?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
