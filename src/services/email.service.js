'use strict';

import dotenv from 'dotenv';

dotenv.config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: {
      email: 'aaditya.raikar.dev@gmail.com',
      name: 'Aaditya from Bookify',
    },
    subject: 'Welcome to Bookify!',
    text: `Welcome to Bookify, ${name}! I'm excited to have you here! Feel free to explore, read, and enjoy the collection. If you have any feedback or suggestions, I’d love to hear them!`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #222;">
        <p>Welcome to <strong>Bookify</strong>, ${name}!</p>
        <p>I'm excited to have you here! Feel free to explore and enjoy the collection. If you have any feedback or suggestions, I’d love to hear them!</p>
        <p>Happy Reading!<br>— <strong>Aaditya Raikar</strong><br>Creator of Bookify</p>
      </div>
    `,
  });
};

module.exports = sendWelcomeEmail;
