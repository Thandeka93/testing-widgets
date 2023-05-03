function FruitEater() {
  var appleCount = 0;
  var pearCount = 0;

  return {
    eat:
      function (fruit) {
        if (fruit === 'apple') {
          appleCount++;
        } else if (fruit === 'pear') {
          pearCount++;
        }
      },

    applesEaten:
      function () {
        return appleCount;
      },

    pearsEaten:
      function () {
        return pearCount;
      }
  }
}
