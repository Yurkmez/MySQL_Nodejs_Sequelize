const myUrl = 'https://www.youtube.com/watch?v=Nu7tLZ-_wNA';

const urlObject = new URL(myUrl);

const hostName = urlObject.hostname;
const protocol = urlObject.protocol;
let domainName = hostName.replace(/^[^.]+\./g, '');
// The regular expression below works with .dev, .com, .net, .org and other top level domain names

console.log('Hostname:', hostName);
console.log('Domain:', domainName);
console.log('Protocol:', protocol);
