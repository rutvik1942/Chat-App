const mongoose = require('mongoose');

//const url = 'mongodb+srv://<chat_app_admin>:<Gj05pt9886>@cluster0.mongodb.net/<chat_app_admin>?retryWrites=true&w=majority';

const username = encodeURIComponent("<username>");
const password = encodeURIComponent("<password>");
const cluster = "<Cluster0>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";
let uri =
  `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => console.log('connected to DB')).catch((e)=> console.log('Error', e))