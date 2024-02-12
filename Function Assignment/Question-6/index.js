function curry(X){
  return function (Y){
    return X+Y;
  }
}
console.log(curry(2)(5));
console.log(curry(5)(10));
