import nodemailer from 'nodemailer'

const CONFIRMATION_EMAIL_SENDER = 'colshacol@gmail.com'
const CONFIRMATION_EMAIL_SUBJECT = 'bytesized module created ✔'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'colshacol',
    pass: 'closure120'
  }
})

export const generateEmail = (email) => (module) => {
  return {
    from: CONFIRMATION_EMAIL_SENDER,
    to: email,
    subject: CONFIRMATION_EMAIL_SUBJECT,
    text: `Wassap. You created dis module: ${module.sid}`,
    html: `<h3>Wassap. You created dis module: ${module.sid}</h3>`
  }
}

export const sendConfirmationEmail = (email) => (module) => {
  console.log({ email, module })
  const emailOptions = generateEmail(email)(module)

  transporter.sendMail(emailOptions, (error, info) => {
    error && handleConfirmationEmailError(error)
  })
}

const handleConfirmationEmailError = (error) => {
  console.log('got an error:', error)
}
