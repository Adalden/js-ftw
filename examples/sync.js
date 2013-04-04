function sleep(millis) {
  var date = new Date();
  var curDate = null;
  do {
    curDate = new Date();
  } while (curDate - date < millis);
}

function queryDB_Sync(query, cb) {
  sleep(3000);
  return { name: 'dallin', age: '23', hair: 'blonde' };
}

console.log('querying the database');
var doc = queryDB_Sync({ name: 'dallin' });
console.log('recieved:', doc);

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
