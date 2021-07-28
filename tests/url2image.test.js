const url2image = require('../src/url2image.js')
test('take image of google.com',async ()=>{
    let result =await url2image("https://google.com","example.png")
    expect(result).toBe(true);
});

test('bad url',async ()=>{
    let result =await url2image("sadf","example.png")
    expect(result).toBe(false);
});