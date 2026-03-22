const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port:587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.BREVO_KEY, // App password
  },
});

module.exports = transporter;