
exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
    return 0;
}
  else{
  let resultMin = Math.min.apply(null, array);
  return resultMin;
      }
  };
  //console.log(min([1,2,3,4,5,-1,-5,-6]))

  exports.max = function max (array) {
    if (array == undefined || array.length == 0) {
      return 0;
  }
    else{
    let resultMax = Math.max.apply(null, array);
    return resultMax;
    }
  };
  //console.log(max([1,2,3,4,5,-1,-5,-6]))
  exports.avg =   function avg (array) {
    if (array == undefined || array.length == 0) {
      return 0;
  }
    else {
    let result = 0;
  for(let i = 0; i < array.length; i++) {
    result += array[i];
  }
    return result / array.length;
}
  };
  //console.log(avg([1,2,3,4,5,-1,-5,-6]))

