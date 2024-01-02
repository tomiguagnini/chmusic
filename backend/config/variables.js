require('dotenv').config()


const apiKey = process.env.API_KEY
const clientUrl = process.env.CLIENT_URL
const app_host = process.env.APP_HOST 
const db_url = process.env.DB_URL || `${process.env.DB_CLIENT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
const secretKey = process.env.JWT_KEY
const mail_user = process.env.MAIL_USER
const mail_pass = process.env.MAIL_PASS
module.exports = {
    apiKey,
    clientUrl,
    app_host,
    db_url,
    secretKey,
    mail_pass,
    mail_user,
}