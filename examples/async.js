function sleep(millis) {
  var date = new Date();
  var curDate = null;
  do {
    curDate = new Date();
  } while (curDate - date < millis);
}

function queryDB_Async(query, cb) {
  setTimeout(function () {
    cb(null, { name: 'dallin', age: '23', hair: 'blonde' });
  }, 3000);
}

console.log('querying the database');
queryDB_Async({ name: 'dallin' }, function (err, doc) {
  if (err) return console.error(err);
  console.log('recieved:', doc);
});

var num = 20;
function doWork() {
  console.log(Math.floor(Math.random() * 100));
  sleep(400);
  if (num > 0) {
    --num;
    process.nextTick(doWork)
  }
}
doWork();
