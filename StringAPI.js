//Long String Literal


let longString1 = " The is a sentence, kjsdf jsdf lhdf lhdf lshdfl.\
The is a sentence, kjsdf jsdf lhdf lhdf lshdfl.\
The is a sentence, kjsdf jsdf lhdf lhdf lshdfl.";
console.log(longString1);

let longString2 = `The is a sentence, kjsdf jsdf lhdf lhdf lshdfl.
The is a sentence, kjsdf jsdf lhdf lhdf lshdfl.
The is a sentence, kjsdf jsdf lhdf lhdf lshdfl.`;
console.log(longString2);


let sentence = "JavaScript is a scripting or programming language that allows you to implement complex features on web pages.";
let sentenceObject = new String (sentence);


//String APIs

sentence.charAt(10);
sentence.charCodeAt(10); //ascii code

console.log(sentence.charAt(11));
console.log(sentence.charCodeAt(11));
console.log(sentence.concat('10'));
console.log(sentence.startsWith ('Javascript'));
console.log(sentence.endsWith (''));
console.log(sentence.includes('the'));
console.log(sentence.indexOf('t'));
console.log(sentence.lastIndexOf ('t'));
console.log(sentence.repeat(5));
console.log(sentence.replace("s", "$"));

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

console.log(sentence.split(' '));

console.log(sentence.substr(0, 5));
console.log(sentence.substring(0,5));
console.log(sentence.slice(0,5));