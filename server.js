const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: "baruffaldiariela@gmail.com",
      pass: "apb123apb"
    }
  });

  // verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post('/send', (req, res, next) => {
    var phone = req.body.phone
    var email = req.body.email
    var message = req.body.message
  
    var mail = {
      from: phone,
      to: 'baruffaldiariela@gmail.com',
      subject: email,
      text: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })