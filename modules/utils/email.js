const nodemailer = require('nodemailer');
const pug = require('pug')
const htmlToText = require('html-to-text')

module.exports = class Email{
  constructor(user,url){
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = process.env.EMAIL_FROM
  }

  newTransport(){
    if(process.env.NODE_ENV === 'production'){
      // SendInBlue
      return nodemailer.createTransport({
        host: process.env.SENDGRID_HOST,
        port: process.env.SENDGRID_PORT,
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      })
    }

    return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
  }

 async send(template, subject){
    try {
      // Render html based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`,{
      firstName:this.firstName,
      url: this.url,
      subject
    })

    // Define email options
 const mailOptions = {
    from: this.from,
    to: this.to,
    subject,
    html,
    text: htmlToText.fromString(html),
  };

  // Create transport
  await this.newTransport().sendMail(mailOptions)
    } catch (error) {
      console.log(error)
    }
  }

async sendWelcome(){
    this.send('Welcome', 'Welcome to this channel')
  }

async sendPasswordReset(){
    this.send('PasswordReset', 'Your password reset token (Valid for only 10 minutes)')
  }
}

