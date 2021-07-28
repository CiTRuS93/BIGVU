var videoshow = require('videoshow')
const path = require("path");
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
      return new Promise((resolve,reject)=>
      videoshow([imagePath], videoOptions).save(videoFileName)
            .on('start', function (command) {
                console.log('ffmpeg process started:', command)
            })
            .on('error', function (err, stdout, stderr) {

                reject()
            })
            .on('end', function (output) {

                resolve( path.resolve(output))
            })

      )


}
