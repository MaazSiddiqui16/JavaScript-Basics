//A JavaScript string stores a series of characters like "John Doe".
//A string can be any text inside double or single quotes.
//JS counts string with starting position "0" then "1" as second and so on.
//All JS string methods does not alter the original string instead they produce a new string.

let s1 = 'hello'; 
let s2 = "WORLD!";
let s3 = "     JavaScript     "

//both of the steps above are the same. (line 6 and 7)
console.log("s1 is:",s1);
console.log("s2 is:",s2);

/* "length" property */
console.log("\nlength of s1 is:",s1.length); // "length" return number of chars/length of a string.
console.log("length of s2 is:",s2.length);

/*There are 4 methods for extracting characters in a string (see below) */
console.log("\nThe first character of s1 is:",s1.charAt(0)); //"charAt(i)" return character at a specified index in a string.
console.log("The second character of s1 is:",s1.charCodeAt(1)); //"charCodeAt(i)" returns the code of the character at a specified index in a string.
console.log("The first character of s2 is:",s2.at(0)); //"at(i)" allows the use of negative indexes while "charAt()" do not.
console.log("The second character of s2 is:",s2[1]); //"[i]" is read-only and unpredictable.

/* There are 3 methods for extracting a part of a string */
console.log("\nExtracted part of s1 is:",s1.slice(1,4)); // second-param is "exclusive".
console.log("Extracted part of s2 is:",s2.substring(0,3)); //similar to "slice(s,e)" but negative values are considered "0".
//"substr()" is deprecated

/* Converting to UPPER and lower Case */
console.log("\nUpper Case:",s1.toUpperCase());
console.log("Lower Case:",s2.toLowerCase());

/* concatenation means joins two or more strings (2 way to do this) */
console.log("\n1st way of concatenation:", s1.concat(" ",s2)); //using "concat()" method.
console.log("2nd way of concatenation:", s1 + " " + s2); //using "+" operator

/* removes whitespace from the string */
console.log("\nBefore removing whitespace: " + "\"" + s3 + "\"");
console.log("removes whitespace only from the start: " + "\"" + s3.trimStart() + "\"");
console.log("removes whitespace only from the end: " + "\"" + s3.trimEnd() + "\"");
console.log("After removing whitespace from both sides: " + "\"" + s3.trim() + "\"");

/* padding at the beginning and at the end of a string */
console.log("\nPadding at Start:",s1.padStart(7,"O,")); 
console.log("Padding at End:",s2.padEnd(8,"?"));

/* making copies of a string */
console.log("\n3 Copies of a String:",s1.repeat(3));

/* replacing a string */
console.log("\nReplacing a String in simple way:", s2.replace("WORLD!", "Law_re")); // only replacing.
console.log("Replacing a String:",s1.concat(" ",s2).replace("WORLD!", "Everyone")); // first concatenating then replacing.
//Remember :- The replace() method replaces only the "first match" and it is "case-sensitive".(see below)
let text = "looking string and string methods."
console.log("Replacing only first match:",text.replace("string","Array")); //only first "string" will replaced to "Array".
console.log("Now all matches will be replaced:",text.replace(/string/g , "Array")); //Using "RegExp"
console.log("Case Sensitive:",text.replace("LOOKING","Practicing")); //"LOOKING" is case-sensitive so it will not work.
console.log("Use RegExp for case-sensitive:",text.replace(/LOOKING/i , "Practicing")); //Using "RegExp"
console.log("Replacing All:",text.replaceAll("string","Array")); //Without using "RegExp" but still it is case sensitive.

/* A string can be converted to an array with the split() method */
let string = "abc,bcd,cde,def,efg,fgh";
console.log("\nConverting String into an array:",string.split(","));
console.log("Converting String into an array:",string.split("")); //the returned array will be an array of single characters
console.log("Converting String into an array:",string.split()); //whole string will be at index "0"

/*There are also String Search Methods
 - indexOf()
 - lastIndexOf()
 - search()
 - match()
 - matchAll()
 - includes()
 - startsWith()
 - endsWith()
*/