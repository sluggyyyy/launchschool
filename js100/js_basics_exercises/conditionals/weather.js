let weatherCheck = (weather) => {
  // if (weather === 'rainy') {
  //   console.log('Grab your umbrella.');
  // } if (weather === 'sunny') {
  //   console.log(`It's a beautiful day!`);
  // } if (weather !== 'sunny' && weather !== 'rainy') {
  //   console.log(`Let's stay inside.`);
  // }

  switch (weather) {

    case 'sunny':
      console.log(`It's a beautiful day!`);
      break;

    case 'rainy':
      console.log('Grab your umbrella.');
      break;

    default:
      console.log(`Let's stay inside.`);
      break;

  }
}

weatherCheck('sunny');
weatherCheck('rainy');
weatherCheck('cloudy');
