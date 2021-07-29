const image2video = require('../src/image2video.js')

test('video from image',async ()=>{
    image2video("example.png","vid.mp4").then((res)=>
    expect(res).toBe(process.cwd()+"\\vid.mp4")
    )
},10000);

test('video from non existing image',async ()=>{
    image2video("notReal.png","vid.mp4").catch((err)=>
        expect(err).toBe("invalid image")
    )
},10000);