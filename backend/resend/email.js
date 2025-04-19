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

export const sendPasswordResetEmail = async (email, resetURL) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "noreply@rockpaperscissorsdash.com",
            to: [email],
            subject: "Reset password",
            html: `Click <a href="${resetURL}">here</a> to reset your password`

        })
    } catch (error) {
        console.log("error sending thank you email", error)
        throw new Error("Error sending thank you email")
    }
}

export const sendResetSuccessEmail = async (email, username) => {
    try {
        const { data, error } = await resend.emails.send({
            from: "noreply@rockpaperscissorsdash.com",
            to: [email],
            subject: "Password reset was successful",
            html: `Hey ${username}, your password has been reset. Happy gaming!`

        })
    } catch (error) {
        console.log("error sending password reset successful email", error)
        throw new Error("Error sending password reset successful email")
    }
}