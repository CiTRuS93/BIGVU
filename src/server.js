const url2image = require('./url2image');
const image2video = require('./image2video.js')


const express = require("express");
const app = express();
const imagePath = "example.png"
const videoPath = "vid.mp4"
app.use(express.json());
app.post('/', async function (req, res,next) {
    const {url} = req.body;
    let image_created = await url2image(url, imagePath)
    if(!image_created){
        res.status(400)
        res.send( { error: "Invalid URL" })
    }else {
        image2video(imagePath, videoPath).then(path =>
            res.status(200).send({file: path})).catch((error) => next(error))
    }


})


module.exports = app