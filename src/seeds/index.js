import mongoose from 'mongoose';
import Promise from 'bluebird';
import config from '../../config/env';
import seedTables from './tables';
import seedProducts from './products';


mongoose.Promise = Promise;
mongoose.connect(config.db);

mongoose.connection.on('error', function onConnectionError(error) {
  console.error('db error:', error.stack)
});


mongoose.connection.once('open', function (callback) {
  console.error('db connected');

  seedTables().then(() => {
    seedProducts().then(() => {
      console.log('All done');
      mongoose.connection.close()
    })
  });

});





