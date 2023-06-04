const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

async function getUserPages(page){
  const response = await request.get(`/users?page=${page}`);
  return response
}


describe("GET /users", function(){
    it("returns users page 2", async function(){
        const query1 = "2"
        const response = await getUserPages(query1);
        //console.log(await response.body)
        

        expect(await response.status).to.eql(200);
        expect(await response.body.data.length).to.eql(6);
    })

    it("returns users page 3", async function(){
      const query1 = "3"
      const response = await getUserPages(query1);
      //console.log(await response.body)
      

      expect(await response.status).to.eql(200);
      expect(await response.body.data.length).to.eql(0);
  })
})

exports.getUserPages = { getUserPages }
