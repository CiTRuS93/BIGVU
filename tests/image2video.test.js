const image2video = require('../src/image2video.js')

test('video from image',async ()=>{
    image2video("example.png","vid.mp4").then((res)=>
    expect(res).toBe(process.cwd()+"\\vid.mp4")
    )
});