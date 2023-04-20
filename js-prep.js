/** Reverse a given Number **/
// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(325)));


// function rev(a){
  
//   let reversed_num=0;
//   while(a !== 0){
 
//   reversed_num = reversed_num * 10 + a % 10;
//   a = Math.floor(a / 10);
//   }
//   return reversed_num;
// }


// const result = rev(234);
// console.log(result)



/** Check given strinf is palindroem **/

// function palindrome(s){
//     s = s + ""
//     let revS = s.split("").reverse().join("")

//     return revS===s?"Palindrome":"Not a Palindrome";
// }
// const stri = "abba";
// console.log(palindrome(stri));


/**Cobination generate**/

// function substrings(str) {
//   const result = [];
  
//   function search_combination(start, curr) {
//     if (curr.length > 0) {
//       result.push(curr);
//     }
//     for (let i = start; i < str.length; i++) {
//       search_combination(i + 1, curr + str[i]);
//     }
//   }  
//   search_combination(0, '');
//   return result;
// }
// const str = 'dog';
// const result = substrings(str);
// console.log(result);


/** Sorting alphabetic order **/

// function sortAlpha(s){
//         let revS;
//     return revS = s.split("").sort().join("")

// }
// const stri = "abb123";
// console.log(sortAlpha(stri));


/** Sentence case **/

// function capitalize_First_Letter(text){
//     let words = text.split(" ");
//     for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
// const text = 'the quick brown fox';
// const result = capitalize_First_Letter(text);
// console.log(result); 



/**Find the longest word**/

// function longestWord(s1){
//     let words = s1.split(" ");
//     var result = words[0];
//     for(let i = 1; i < words.length; i++){
//         if(result.length < words[i].length){
//             result = words[i];
//         }
//     }
//     return result
// }

// let ste = "Web Developmentttttttttt Tutoriallllll";
// console.log(longestWord(ste))



/* count the number of vovels */
// function countVowels(str){
//     var vowel_list = "aeiouAEIOU";
//     var vcount = 0;
//     for(var i = 0; i<str.length; i++){
//         if(vowel_list.indexOf(str[i])  !== -1 ){
//             vcount += 1;
//         }
//     }
//     return vcount;
// }

// console.log(countVowels("I love You"));


/*Check prime number */
// function checkPrime(n){
  
//   if (n===1){
//     return "Not prime";
//   }else if(n===2){
//     return "Is prime";
//   }else{
//     for(var i = 2; i < n; i++){
//       if( n % i === 0){
//         return "Not prime";
//       }
//     }
//     return "Is prime";
//   }
// }

// console.log(checkPrime(2))


/* Creating indentity MAtrix*/
// function identity_Matrix(n){
  
//   var i;
//   var j;
//   for (i=0; i<n; i++){
//     for(j=0; j<n; j++){
//       if(i === j){
//         console.log(" 1 ")
//       }else{
//         console.log(" 0 ")
//       }
//     }
//     console.log("------------- ")
//   }
  
// }

// console.log(identity_Matrix(4))


/*find second largest number and second last largest number */
function largestNums(arr){
  arr.sort();
  var second_large = arr[1]
  var rev = arr.reverse()
  var second_last_large = rev[1]
  return [second_large, second_last_large]
}
console.log(largestNums([1, 3, 4, 5, 2]))


/*Count the number of occurances */
// function countOccurance(str, x){
//     var s = str.split(" ").join(" ");
//     var count = 0;
//     for(var i = 0; i< s.length; i++){
//         if (s[i] === x){
//             count += 1
//         }
//     }
//     return count
// }
// const s = "VijayVB";
// const f = "V"
// console.log(countOccurance(s, f))

// function nonRepeatedChar(str){
//     var s = str.split("");
//     var result = " ";
//     for(var i = 0; i< s.length; i++){
//         var ctr = 0;
//         for(var j = 0; j<s.length; j++){
//              if (s[i] === s[j]){
//                 ctr+=1;
//             }
//         }
//         if (ctr < 2){
//             result = s[i]
//         }
//     }
//     return result;
// }

// console.log(nonRepeatedChar("vbv"))


function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

