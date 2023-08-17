let extractLanguage = (locale) => {
  switch (locale) {
    case 'en_US.UTF-8':
      console.log('en');
      break;

    case 'en_GB.UTF-8':
      console.log('en');
      break;

    case 'ko_KR.UTF-16':
      console.log('ko');
      break;

    default:
      console.log('Locale not supported...');
      break;
  }
}

let extractRegion = (locale) => {
  switch (locale) {
    case 'en_US.UTF-8':
      console.log('US');
      break;

    case 'en_GB.UTF-8':
      console.log('GB');
      break;

    case 'ko_KR.UTF-16':
      console.log('KR');
      break;

    default:
      console.log('Locale not supported...');
      break;
  }
}

let localGreet = (locale) => {
  switch (locale) {
    case 'en_US.UTF-8':
      console.log('Hey!');
      break;

    case 'en_GB.UTF-8':
      console.log('Hello!');
      break;

    case 'en_AU.UTF-8':
      console.log('Howdy!');
      break;

    case 'fr_FR.UTF-8':
      console.log('Salut!');
      break;
      
    case 'fr_CA.UTF-8':
      console.log('Salut!');
      break;

    case 'fr_MA.UTF-8':
      console.log('Salut!');
      break;

    default:
      console.log('Locale not supported...');
      break;
  }
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
