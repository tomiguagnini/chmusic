require('dotenv').config()


const apiKey = process.env.API_KEY
const clientUrl = process.env.CLIENT_URL
const app_host = process.env.APP_HOST 
const db_url = process.env.DB_URL || `${process.env.DB_CLIENT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

module.exports = {
    apiKey,
    clientUrl,
    app_host,
    db_url
}