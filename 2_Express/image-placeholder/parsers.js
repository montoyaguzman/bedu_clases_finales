const parseDimentions = dimentionsString => {
  let dimentionsArray = dimentionsString.split('x');
  if(dimentionsArray.length > 2) throw 'dimentions argument error.';
  return dimentionsArray.map(x => parseInt(x));
}

module.exports = {
  parseDimentions: parseDimentions
}