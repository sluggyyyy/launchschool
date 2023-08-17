let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
let regex = /x/;

console.log(byteSequence.search(regex));
console.log(byteSequence.includes('x'));