import { NextApiResponse, NextApiRequest } from 'next'
const nodemailer = require("nodemailer");
const fs = require('fs');
import path from 'path'

interface Response{
  status: number,
  message:string,
  data?:{},
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === 'POST') {
    const { email, subject, message} = req.body;

    // create transport
    const transport = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:process.env.GMAIL_EMAIL,
        pass:process.env.GMAIL_PASSWORD
      }
    })

    // renderTemplate
    const renderTemplate = (template:string, data:{ [key: string]:string|number}):string =>{
      return template.replace(/{{(\w+)}}/g, (_, key) => data[key] as string || '');
    }

    // templates
    const feedBackTemplatePath = path.join(process.cwd(), '/src/constants/EmailTemplates/feedBack.html');
    const feedBackTemplate = fs.readFileSync(feedBackTemplatePath,"utf8");

    const receiveTemplatePath = path.join(process.cwd(), '/src/constants/EmailTemplates/receive.html');
    const receiveTemplate = fs.readFileSync(receiveTemplatePath,"utf8");


    // mail options
    const receiveMailOptions={
      from:email,
      to:'volkankaraali1@gmail.com',
      subject:"You have a message from your website",
      html:renderTemplate(receiveTemplate, {email,subject,message})
    }

    const feedBackMailOptions={
      from:{
        name:"volkankaraali.vercel.app",
        address:"volkankaraali1@gmail.com"
      },
      to:email,
      subject:'Volkan Karaali',
      html:renderTemplate(feedBackTemplate, {email})
    }

    // emails sends
    const receiveSend = await transport.sendMail(receiveMailOptions);
    const feedBackSend = await transport.sendMail(feedBackMailOptions);
    
    if(receiveSend.error || feedBackSend.error ){
      res.status(400).json({
        status:400,
        message:"some error occurred while send email. check out the data",
        data:{
          error:receiveSend.error ? receiveSend.error : feedBackSend.error  
        }
      })
    }
    else{
      res.status(200).json({
        status:200,
        message:"email sent successfully"
      })
    }
    
  } 

  else{
    res.status(200).json({
      status:200,
      message:'api is working.'
    })
  }
}