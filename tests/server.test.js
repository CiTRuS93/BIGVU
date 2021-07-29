const app = require('../src/server.js')
const supertest = require("supertest");
test("Post", async () => {

    await supertest(app).post("/").send({url:"https://google.com"}).expect(200).then((response) => {
        expect(response.body).toStrictEqual({file:process.cwd()+"\\vid.mp4"})
    })
}, 200000)

test("Bad Post", async () => {

    await supertest(app).post("/").send({url:"qwerty"}).expect(400)

}, 200000)