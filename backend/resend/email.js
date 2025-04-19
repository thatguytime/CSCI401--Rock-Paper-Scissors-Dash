import { resend } from './config.js'
import { verificationTokenEmailTemplate, THANKYOU_EMAIL_TEMPLATE } from './email-templates.js'

export const sendVerificationEmail = async (email, username, verificationToken) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "noreply@rockpaperscissorsdash.com",
            to: [email],
            subject: "Let the games begin...",

            // create custom email templates and place here
            // import react component and use 'react' in place of 'html'
            html: verificationTokenEmailTemplate.replace('{verificationToken}', verificationToken).replace('{username}', username)

            // `Welcome to Rock Paper Scissors Dash, ${username}!
            // Please verify your account to unlock achievements. 
            // Here is the verification code: ${verificationToken}`
        })
    } catch (error) {
        console.log("error sending verification email", error)
        throw new Error("Error sending verification email")
    }
}

export const sendThankYouForVerificationEmail = async (email, username) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "noreply@rockpaperscissorsdash.com",
            to: [email],
            subject: "You have been verified",
            html: THANKYOU_EMAIL_TEMPLATE.replace('{username}', username)

        })
    } catch (error) {
        console.log("error sending thank you email", error)
        throw new Error("Error sending thank you email")
    }
}