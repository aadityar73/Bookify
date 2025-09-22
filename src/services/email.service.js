import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationMail = async (email, name, token) => {
  const verifyUrl = `${process.env.API_URI}/auth/verify-email?token=${token}&email=${email}`;

  await sgMail.send({
    to: email,
    from: {
      email: 'no-reply@aadityaraikar.tech',
      name: 'Aaditya from Bookify',
    },
    subject: 'Verify your Bookify account',
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #222">
          <p>Hi <strong>${name}</strong>,</p>

          <p>Thanks for signing up for <strong>Bookify</strong>! To get started, please verify your email address by clicking the link below:</p>
          <p><a href="${verifyUrl}">Verify Email</a></p>

          <p>This link will expire in <strong>30 minutes</strong> for security reasons.</p>
          <p>If you didn't create an account, you can safely ignore this email.</p>

          <p>Thanks,</p>
          <p>— Aaditya Raikar<br><em>Creator of Bookify</em></p>
        </div>
      `,
  });
};

const sendVerifiedMail = async (email, name) => {
  await sgMail.send({
    to: email,
    from: {
      email: 'no-reply@aadityaraikar.tech',
      name: 'Aaditya from Bookify',
    },
    subject: "✅ You're verified - Welcome to Bookify!",
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #222">
          <p>Hi <strong>${name}</strong>,</p>

          <p>Thanks for verifying your email — and welcome to Bookify! 📚</p>

          <p>You're all set to start exploring! Here's a place you might like to visit:</p>
          <p><a href="https://bookify-fnct.onrender.com/categories">Explore Categories</a></p>

          <p>If you have any feedback or suggestions, I'd love to hear them!</p>

          <p>Happy reading,</p>
          <p>— Aaditya Raikar<br><em>Creator of Bookify</em></p>
        </div>
      `,
  });
};

export { sendVerificationMail, sendVerifiedMail };
