const url2image = require('./url2image');
const image2video = require('./image2video.js')


const express = require("express");
const app = express();
const imagePath = "example.png"
const videoPath = "vid.mp4"
app.use(express.json());
app.post('/', async function (req, res) {
    const {url} = req.body;
    let r = await url2image(url, imagePath)
    image2video(imagePath, videoPath).then(path =>
        res.status(200).send({file:path}))



})


module.exports = app