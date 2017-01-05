import Table from '../../src/models/table.model';

let tablesSeed = () => {
  return Table.remove({}).then(() => {
    var tablesData = require('./data/tables.json');
    return Table.collection.insertMany(tablesData).then(res => {
      console.log('Tables inserted.');
    })
  });
};


export default tablesSeed;
