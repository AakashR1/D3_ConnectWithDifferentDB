// const mongoos = require('mongoose');

// mongoos.connect('mongodb+srv://aakash:aakash1234@cluster0.gmwvx.mongodb.net/MulterPractise?retryWrites=true&w=majority',(err)=>{
//     console.log("connected");
// });

const mongodb  = require('mongodb');
async function main() {
    const client = new mongodb.MongoClient(url);
    try {
        await client.connect();
        console.log("connected");
        await listDatabases(client);
        
    } catch (e) {
        console.error(e);
    }
}
main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases are",databasesList.databases);
    
};