let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1 ) {
  let element = cities[ index ];

  if( element === null ) {
    continue
  } 

  console.log( element.length );
}