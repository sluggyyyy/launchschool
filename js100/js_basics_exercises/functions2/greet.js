function greet(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', ' + recipient + '!');
}

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

greet(greeting(), recipient());