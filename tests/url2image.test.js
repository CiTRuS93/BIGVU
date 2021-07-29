const url2image = require('../src/url2image.js')
const fs = require('fs')

beforeEach(() => {

    try {
        fs.unlinkSync("example.png")
        //file removed
    } catch(err) {

    }
});
test('take image of google.com',async ()=>{

    let res = await url2image("https://google.com","example.png")
    expect(res).toBe(true)
},10000);

test('bad url',async ()=>{
    url2image("sadf","example.png").catch(
    expect(fs.existsSync("example.png")).toBe(false))
});