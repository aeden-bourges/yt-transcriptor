require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/transcript', async function(req, res) {
    const url = req.query.url

    try {
        const response = await fetch("https://api.supadata.ai/v1/youtube/transcript?url=" + encodeURIComponent(url) + "&text=true", {
            headers: {
                "x-api-key": process.env.SUPADATA_API_KEY
            }
        })
        const data = await response.json()

        if (!data.content) {
            res.json({ error: "could not get transcript" })
            return
        }

        res.json(data)
    } catch (error) {
        console.log(error)
        res.json({ error: "something went wrong" })
    }
})

app.listen(3000, function() {
    console.log('server running on port 3000')
})