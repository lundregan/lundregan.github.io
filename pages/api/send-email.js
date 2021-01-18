// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//javascript
require('dotenv').config()

export default async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: 'lundregan.ethan@gmail.com', // Change to your recipient
        from: 'lundregan.ethan@gmail.com', // Change to your verified sender
        subject: `Lundregan.com Contact Request - ${name} from ${email}`,
        text: `${message}`,
        html: `<strong>${message}</strong>`,
    }

    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}