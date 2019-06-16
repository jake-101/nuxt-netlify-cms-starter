const Mailgun = require('mailgun-js')

const sendEmail = ({ data }) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email')
    const mailgun = Mailgun({
      apiKey: MG_KEY,
      domain: 'https://api.mailgun.net/v3/send.jake101.com'
    })

    const mailData = {
      from: data.email,
      to: 'jake101@gmail.com',
      subject: 'Message from your website',
      text: data.message
    }

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err)

      resolve()
    })
  })
}

exports.handler = async event => {
  try {
    const data = JSON.parse(event.body)

    await sendEmail(data)

    // send a thank you email
    // sign person

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message Sent'
      })
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: e.message
    }
  }
}
