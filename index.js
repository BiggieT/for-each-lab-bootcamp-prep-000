function iterativeLog(array){
  var index = 0;
  array.forEach(element => {
    console.log(`${index}: ${element}`);
    index++;
  })
}

function iterate(callback){
  var names = ["Tim", "Bob", "Joe"];
  callback(names);
  return names;
}

function doToArray(array, callback){
  array.forEach(callback);
}
