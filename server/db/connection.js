const mongoose = require('mongoose');
const url = 'mongodb+srv://chat_app_admin:Gj05pt9886@cluster0.ch4ax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(() => console.log('connected to DB')).catch((e)=> console.log('Error', e))
