export const verificationTokenEmailTemplate = `<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body style="background-color:#fff;color:#212121">
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;padding:20px;margin:0 auto;background-color:#eee">
      <tbody>
        <tr style="width:100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="background-color:#fff">
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="background-color:#18334c;display:flex;padding:20px 0;align-items:center;justify-content:center">
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding:25px 35px">
                      <tbody>
                        <tr>
                          <td>
                            <h1 text-align="center"
                              style="color:#212121;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:20px;font-weight:bold;margin-bottom:15px">
                              Welcome to Rock Paper Scissors Dash, {username}!
                            </h1>
                            <p
                              style="font-size:14px;line-height:24px;color:#212121;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:24px 0;margin-bottom:24px;margin-top:24px;margin-left:0;margin-right:0">
                              Please verify your account to unlock various features, including <em>achievements</em> and keeping track of your <em>high scores</em>.
                            </p>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="display:flex;align-items:center;justify-content:center">
                              <tbody style="margin:auto;">
                                <tr>
                                  <td>
                                    <p
                                      style="font-size:14px;line-height:24px;color:#212121;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:0;font-weight:bold;text-align:center;margin-bottom:0;margin-top:0;margin-left:0;margin-right:0;text-align:center">
                                      Here is the verification code
                                    </p>
                                    <p
                                      style="font-size:36px;line-height:24px;color:#212121;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:10px 0;font-weight:bold;text-align:center;margin-bottom:10px;margin-top:10px;margin-left:auto;margin-right:auto">
                                      {verificationToken}
                                    </p>
                                    <p
                                      style="font-size:14px;line-height:24px;color:#212121;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:0px;text-align:center;margin-bottom:0px;margin-top:0px;margin-left:0px;margin-right:0px">
                                      (This code is valid for 24 hours)
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr
                      style="width:100%;border:none;border-top:1px solid #eaeaea" />
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="padding:25px 35px">
                      <tbody>
                        <tr>
                          <td>
                            <p
                              style="font-size:14px;line-height:24px;color:#212121;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin:0px;margin-bottom:0px;margin-top:0px;margin-left:0px;margin-right:0px;text-align:center">
                              We hope you enjoy the game!
                            </p>
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
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`

export const THANKYOU_EMAIL_TEMPLATE = `<html dir="ltr" lang="en">
  <head>
    <link
      rel="preload"
      as="image"
      href="https://react-email-demo-i1as60qib-resend.vercel.app/static/koala-logo.png" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--$-->
  </head>
  <body
    style='background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'>
    <div
      style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      You are now a verified
    </div>
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
      <tbody>
        <tr style="width:100%">
          <td>
            <p
              style="font-size:16px;line-height:26px;margin-bottom:16px;margin-top:16px;color:#212121">
              Hi {username},
            </p>
            <p
              style="font-size:16px;line-height:26px;margin-bottom:16px;margin-top:16px">
              Thank you for taking the time to verify your email. Your high scores for single player and multiplayer will save, you have access to unlock achievements, and have the ability to upload a profile image. Take care, and happy gaming!
            </p>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="text-align:center">
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://rockpaperscissorsdash.com"
                      style="line-height:100%;text-decoration:none;display:block;max-width:100%;mso-padding-alt:0px;background-color:#18334c;border-radius:5px;color:#fff;font-size:16px;text-align:center;padding:12px 12px 12px 12px"
                      target="_blank"
                      ><span
                        ><!--[if mso]><i style="mso-font-width:300%;mso-text-raise:18" hidden>&#8202;&#8202;</i><![endif]--></span
                      ><span
                        style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px"
                        ><strong>Back to <em>Rock Paper Scissors Dash</em></strong></span
                      ><span
                        ><!--[if mso]><i style="mso-font-width:300%" hidden>&#8202;&#8202;&#8203;</i><![endif]--></span
                      ></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              style="font-size:16px;line-height:26px;margin-bottom:16px;margin-top:16px">
              Best,<br />The RPSD team
            </p>
            <hr
              style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
            <p
              style="font-size:12px;line-height:24px;color:#8898aa;margin-bottom:16px;margin-top:16px;text-align:center;">
              600 Mt Pleasant Ave, Providence, RI 02908
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <!--/$-->
  </body>
</html>
`