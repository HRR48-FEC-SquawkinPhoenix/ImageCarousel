const jest = require('jest');
const mysql = require('mysql');
const db = require('./db.js');
const Promise = require('bluebird');

// jest.mock('mysql');

// const mockOptions = {
//   host: 'localhost',
//   user: 'root',
//   password: 'pineapple'
// }

describe('database', () => { // start of database tests

  test('connection to mock server', () => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'pineapple',
    });

    const db = Promise.promisifyAll(connection, { multiArgs: true });

    return db.connectAsync()
      .then(() => db.queryAsync('USE imageCarousel'))
      .then(() => db.queryAsync('SELECT * FROM Products'))
      .then((results) => expect(results).toBeTruthy())

      .catch(err => {
        if (err) {
          throw err;
        }
      })
  });



}); // end of database tests