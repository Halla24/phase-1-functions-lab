function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
  }


  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }


  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }


  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;

    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = 0.02 * (distance - 400);
    } else if (distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }

    return fare;
  }

  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
