const Mailgun = require('mailgun-js')

const sendEmail = (email, message) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email')
    const mailgun = Mailgun({
      apiKey: process.env.MG_KEY,
      domain: process.env.MG_URL
    })

    const mailData = {
      from: email,
      to: 'jake101@gmail.com',
      subject: 'Message from your website',
      text: message
    }

    mailgun.messages().send(mailData, function(err, body) {
      console.log(body)
      if (err) return reject(err)

      resolve()
    })
  })
}

exports.handler = event => {
  try {
    const data = JSON.parse(event.body)
    console.log(data)
    sendEmail(data.email, data.message)

    // send a thank you email
    // sign person
    console.log(data.email, data.message)

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
