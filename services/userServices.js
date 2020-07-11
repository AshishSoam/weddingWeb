
var nodemailer = require('nodemailer')
const constant = require('../helpers/constants');
const Response = require('../helpers/commonResponseHaldler');
const responseMessage = require('../helpers/httpResponseMessage');
const responseCode = require('../helpers/httpResponseCode');
module.exports = {
    /**
* Function Name :Function to check weather proper request is coming or not
* Description :Function to check weather proper request is coming or not
* @return  response
*/
    checkRequest: (array, obj) => {
        console.log("arry is", array, obj);
        for (let i of array) {

            if (!obj[i])
                return i;

        }
        return true;
    },
    /**
* Function Name :Generate randon 4 digit otp
* Description :Generate randon 4 digit otp
* @return  response
*/
    getOTP: () => {
        var val = Math.floor(1000 + Math.random() * 9000);
        console.log("value==>>", val);
        return val;

    },


    adminSendMail: (req, res) => {


        const { email, subject, password, otp, fullName } = req.body
        console.log("common func>>>>>>>>>>>>>>>", otp, "name", fullName, "password", password)
        var html = `<!DOCTYPE html>
  <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="x-apple-disable-message-reformatting">
    <title>Confirm Your Email</title>
    <!--[if mso]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <style>
      table {border-collapse: collapse;}
      .spacer,.divider {mso-line-height-rule:exactly;}
      td,th,div,p,a {font-size: 13px; line-height: 22px;}
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family:"Segoe UI",Helvetica,Arial,sans-serif;}
    </style>
    <![endif]-->
  <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans');
      table {border-collapse:separate;}
        a, a:link, a:visited {text-decoration: none; color: #00788a;} 
        a:hover {text-decoration: underline;}
        h2,h2 a,h2 a:visited,h3,h3 a,h3 a:visited,h4,h5,h6,.t_cht {color:#000 !important;}
        .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
        .ExternalClass {width: 100%;}
      @media only screen {
        .col, td, th, div, p {font-family: "Open Sans",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;}
        .webfont {font-family: "Lato",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;}
      }
  
      img {border: 0; line-height: 100%; vertical-align: middle;}
      #outlook a, .links-inherit-color a {padding: 0; color: inherit;}
  </style>
  </head>
  <body style="box-sizing:border-box;margin:0;padding:0;width:100%;word-break:break-word;-webkit-font-smoothing:antialiased;">
      <div width="100%" style="margin:0; background:#f5f6fa">
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="margin:0 auto" class="">
              <tbody>
                  <tr style="margin:0;padding:0">
                      <td width="600" height="130" valign="top" class="" style="background-image:url(https://res.cloudinary.com/dnjgq0lig/image/upload/v1546064214/vyymvuxpm6yyoqjhw6qr.jpg);background-repeat:no-repeat;background-position:top center;">
                          <table width="460" height="50" class="" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto">
                              <tbody>
                              </tbody>
                          </table>
                          <table width="460" class="" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto">
                              <tbody>
                                  <tr style="margin:0;padding:0">
                                      <td style="text-align:center; padding: 10px;">
                                          <img src="" alt="" width="100" class="">
                                      </td>
                                  </tr>
                                  <tr bgcolor="#ffffff" style="margin:0;padding:0;text-align:center;background:#ffffff;border-top-left-radius:4px;border-top-right-radius:4px">
                                      <td>
                                          <table width="460" class="" bgcolor="#ffffff" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto;background:#ffffff;border-top-left-radius:4px;border-top-right-radius:4px">
                                              <tbody>
                                                  <tr style="margin:0;padding:0">
                                                      <td bgcolor="#ffffff" height="30" style="text-align:center;background:#ffffff;border-top-left-radius:4px;border-top-right-radius:4px">
                                                      </td>
                                                  </tr>
                                                  <tr style="margin:0;padding:0">
                                                      <td bgcolor="#ffffff" height="100" style="text-align:center;background:#ffffff">
                                                          <img src="https://res.cloudinary.com/dvflctxao/image/upload/v1544705930/wp0z7cswoqigji0whe7n.png" alt="Email register" class="">
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
  
                      </td>
                  </tr>
  
                  <tr>
                      <td>
                          <table width="460" class="" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto">
                              <tbody>
                                  <tr style="margin:0;padding:0">
                                      <td bgcolor="#ffffff" height="20" style="font-size:0;line-height:0;text-align:center;background:#ffffff">
                                      &nbsp;
                                      </td>
                                  </tr>
                                  <tr style="margin:0;padding:0">
                                      <td bgcolor="#ffffff" style="text-align:center;background:#ffffff">
                                          <p style="margin:0;font-family:'Open Sans',Open Sans,Verdana,sans-serif;font-size:26px;line-height:26px;color:#272c73!important;font-weight:600;margin-bottom:20px">Welcome ${fullName}</p>
                                      </td>
                                  </tr>
                                  <tr style="margin:0;padding:0">
                                      <td bgcolor="#ffffff" style="font-family:'Open Sans',Open Sans,Verdana,sans-serif;font-size:14px;line-height:1.5;color:#3a4161;text-align:center;font-weight:300">
                                          <p style="margin:0 30px;color:#3a4161">Thank you for registering. Your user email is:- <b>${email}</b> and password is:- <b>${password}</b> <br>Your verification otp is :-<b> ${otp}</b>.</p>
                                      </td>
                                  </tr>
                                  <tr style="margin:0;padding:0">
                                      <td bgcolor="#ffffff" height="30" style="font-size:0;line-height:0;text-align:center;background:#ffffff">
                                      &nbsp;
                                      </td>
                                  </tr>
                                  <tr style="margin:0;padding:0">
                                      <td bgcolor="#ffffff" style="font-family:'Open Sans',Open Sans,Verdana,sans-serif;font-size:17px;font-weight:bold;line-height:20px;color:#ffffff">
                                          <table cellspacing="0" cellpadding="0" border="0" align="center" style="margin:auto">

                                      </table>
                                      </td>
                                  </tr>
                                  <tr style="margin:0;padding:0">
                                      <td height="40" bgcolor="#ffffff" style="background:#ffffff;font-size:0;line-height:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px">
                                          &nbsp;
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
                  <tr style="margin:0;padding:0">
                      <td height="30" style="font-size:0;line-height:0;text-align:center">
                      &nbsp;
                      </td>
                  </tr>
              </tbody>
          </table>
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="600" style="margin:auto" class="">
              <tbody>
  
        <tr style="margin:0;padding:0">
                  <td height="20" style="font-size:0;line-height:0">
                      &nbsp;
                  </td>
              </tr>
  
              <tr style="margin:0;padding:0">
                  <td valign="middle" style="width:100%;font-size:13px;text-align:center;color:#aeb2c6!important" class="m_-638414352698265372m_619938522399521914x-gmail-data-detectors">
                      <p style="font-family:'Open Sans',Open Sans,Verdana,sans-serif;line-height:16px;font-size:13px!important;color:#aeb2c6!important;margin:0 30px">© 2020 Wedding APP. <br />
                      All rights reserved</p>
                  </td>
              </tr>
              <tr style="margin:0;padding:0">
                  <td height="20" style="font-size:0;line-height:0">
                      &nbsp;
                  </td>
              </tr>
          </tbody></table>
      </div>
  </body>
  </html>
  `
        const mailBody = {
            // from: "<do_not_reply@gmail.com>",
            from:"pramodsmsit@gmail.com",
            to: email,
            subject: subject,
            html: html
        };

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "pramodsmsit@gmail.com",
                pass: "promogmail"
            },
            // secure: true,
            // port: 465,
            // host: 'smtp.gmail.com'
        });
        return new Promise((resolve, reject) => {

            transporter.sendMail(mailBody, function (error, info) {
                console.log("rejectt---->", error, info.response)
                if (error) {
                    return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)
                } else {
                    resolve(null, 'Email sent: ' + info.response);
                }
            });

        })
    },
    //*********************************end of exports********************* */
}