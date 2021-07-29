const videoshow = require('videoshow')
const path = require("path");
const fs = require('fs')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const ffprobePath = require("@ffprobe-installer/ffprobe").path;
ffmpeg.setFfprobePath(ffprobePath);

ffmpeg.setFfmpegPath(ffmpegPath);
module.exports = async (imagePath,videoFileName) => {

    var videoOptions = {
        fps: 25,
        loop: 10, // seconds

        videoBitrate: 1024,
        videoCodec: 'libx264',
        size: '640x?',
        audioChannels: 2,
        format: 'mp4'
      }
      return new Promise((resolve,reject)=>{
      if (!fs.existsSync(imagePath)) {
          reject("invalid image")
      }
      videoshow([imagePath], videoOptions).save(videoFileName)

            .on('error', function (err, stdout, stderr) {

                reject("error while process video")
            })
            .on('end', function (output) {

                resolve( path.resolve(output))
            })}

      )


}
