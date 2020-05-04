const {MongoClient} = require('mongodb');

describe('insert', () => {
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
	await db.collection('vocab').deleteMany({});
  });
  it('Вставка правильной пары русское-английское слов', async () => {
    const vocabulary = db.collection('vocab');
	console.log('0');
    const newWord = {_id: '129', russian: 'книга', english: 'book'};
    await vocabulary.insertOne(newWord);

    const insertedWord = await vocabulary.findOne({_id: '129'});
    expect(insertedWord).toEqual(newWord);
  });
  it('Вставка русского слова в коллекцию с небуквенным символом', async () => {
    const vocabulary = db.collection('vocab');
	
    const newWord = {_id: '129', russian: 'книга%', english: 'book'};
    await vocabulary.insertOne(newWord);

    const insertedWord = await vocabulary.findOne({_id: '129'});
	expect(insertedWord.russian).not.toMatch(/[\W0-9a-zA-Z]+/);
  });
  it('Вставка английского слова в коллекцию с небуквенным символом', async () => {
    const vocabulary = db.collection('vocab');
	
    const newWord = {_id: '129', russian: 'книга', english: 'book%'};
    await vocabulary.insertOne(newWord);

    const insertedWord = await vocabulary.findOne({_id: '129'});	
	expect(insertedWord.english).not.toMatch(/[\W0-9а-яА-Я]+/);
  });
  it('Вставка "пустого" слова в коллекцию', async () => {
    const vocabulary = db.collection('vocab');
	
    const newWord = {_id: '129', russian: 'книга', english: ''};
    await vocabulary.insertOne(newWord);

    const insertedWord = await vocabulary.findOne({_id: '129'});
	expect(insertedWord.russian).not.toEqual('');	
	expect(insertedWord.english).not.toEqual('');	
  });
  it('Апдейт слова в коллекции', async () => {
    const vocabulary = db.collection('vocab');
	
	const updateWord = {_id: '129',  russian: 'книга', english: 'book'};
    const newWord = {_id: '129', russian: 'книги', english: 'book'};
    await vocabulary.insertOne(newWord);
    await vocabulary.updateOne({russian: 'книги'}, { $set: {russian: 'книга'}});
	
    const gotWord = await vocabulary.findOne({_id: '129'});
	
	expect(gotWord).toEqual(updateWord);	
	//expect(insertedWord.english).not.toEqual('');	
  });
  it('Удаление слова из коллекцию', async () => {
    const vocabulary = db.collection('vocab');
	
    const newWord = {_id: '129', russian: 'книга', english: ''};
    await vocabulary.insertOne(newWord);
    const info = await vocabulary.deleteOne({_id:'129'});
    const gotWord = await vocabulary.findOne({_id: '129'});
	
	expect(gotWord).toEqual(null);	
	//expect(insertedWord.english).not.toEqual('');	
  });

});