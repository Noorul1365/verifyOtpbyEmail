import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
    // user: "noorulk135@gmail.com",
    user: "renee.purdy21@ethereal.email",
    //pass: "Your Pass key",
    pass: "jMwZrf13cSa68tNk9g"
  },
});


  
