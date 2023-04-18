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

