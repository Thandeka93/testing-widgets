function FruitEater() {
  var appleCount = 0;
  var pearCount = 0;

  function eat(fruit) {
    if (fruit === 'apple') {
      appleCount++;
    } else if (fruit === 'pear') {
      pearCount++;
    }
  }
  function applesEaten() {
    return appleCount;
  }
  function pearsEaten() {
    return pearCount;
  }

  return {
    FruitEater,
    eat,
    applesEaten,
    pearsEaten

  }
}
