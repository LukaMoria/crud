const {MongoClient} = require('mongodb');
const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
    });
	
	console.log('Connection successful');
    db = await connection.db('vocab-builder');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });
	beforeEach(async () => {
		
	//await db.collection('vocab').deleteMany({});
  });
  

  it('Вставка русского слова в коллекцию с небуквенным символом', async () => {
    const vocabulary = db.collection('vocab');
	
    const newWord = {_id: '129', russian: 'книга', english: 'book'};
    await vocabulary.insertOne(newWord);

    const newWord2 = {_id: '128', russian: 'книга', english: 'book'};
    await vocabulary.insertOne(newWord2);

  }); 
  
  test("Delete with status 200", done => {
    request(app)
      .delete('/words/128')
	  .expect('Content-Type', /json/)
	  .set('Accept', 'application/json')
	  .expect(200)
      .then(response => {
	  expect(response.body.name.toLowerCase()).toContain('error')
	  .err((err,res)=>{ done();});
      })	  
  });
  
  test("Delete with error", done => {
    request(app)
      .delete('/words/130')
	  .expect('Content-Type', /json/)
	  .set('Accept', 'application/json')
	  .then(response => {
	  expect(response.body.name.toLowerCase()).toContain('error')
  	  .err((err,res)=>{ done();});
      })
  });  
  
  test("It should response the GET method list_all_words", done => {
    request(app)
      .get("/words")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  
    test("It should response the POST method create_a_word", done => {
    request(app)
      .post("/words")
	  .send({_id: '132', russian: 'спина', english: 'book'})
	  .set('Accept', 'application/json')
	  .expect('Content-Type', /json/)
	  .expect(200)

		
//		const response = await ;
       done();
      });
  
  
  test("It should response the GET method", done => {
    request(app)
      .get("/words/:129")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  
  
  
});