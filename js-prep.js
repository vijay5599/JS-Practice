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


/*Sum of Digits*/
// function rev(n){
//     if(n < 10){
//         return n
//     }
//     return rev(Math.floor(n/10)) + n%10
// }
// let num = 253;  ==> output=10
// console.log(rev(num))



/*Reverse a string*/

// function rev(str) {
//   let revStr = "";
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   return revStr;
// }

// const inpu = "abcg";
// console.log(rev(inpu));




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
// function largestNums(arr){
//   arr.sort();
//   var second_large = arr[1]
//   var rev = arr.reverse()
//   var second_last_large = rev[1]
//   return [second_large, second_last_large]
// }
// console.log(largestNums([1, 3, 4, 5, 2]))


// function secLargeNum(ar) {
//   const arr = ar.sort((a,b)=>a-b);
//   console.log(arr)
//   let res = arr[arr.length - 1];
//   for (let i = arr.length - 2; i >= 0; i--) {
//     if (res !== ar[i]) {
//       res = ar[i];
//       break;
//     }
//   }
//   return res;
// }
// // const input = [1, 2, -2, 11, 7, 1];
// const input = [1, 4, 7, 2, 7];
// console.log(secLargeNum(input));

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


// function Longest_Country_Name(country_name)
//   {
//   return country_name.reduce(function(lname, country) 
//   {
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));



/*Rotation of array by 2 step*/
// const input = [1, 4, 6, 2, 7];
// function rotateArray(input) {
//   for (let i = 0; i < 2; i++) {
//     let temp = input[0];
//     for (let i = 0; i < input.length; i++) {
//       input[i] = input[i + 1];
//       console.log(input[i]);
//     }
//     input[input.length - 1] = temp;
//   }
//   console.log(input);
// }
// rotateArray(input);

/*Reverse each word*/
// function revEachWord(string){
//   const words = string.split(" ")
//   const rev = words.map(word => {
//   return word.split('').reverse().join("")}).join(' ')
//   return rev
// }

// const string = "This is Javascript code";
// console.log(revEachWord(string))


/*Max char occurances*/
// function maxCharacter(str) {
//   const charMap = {};
//   let max = 0,
//     maxChar = "";

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//     console.log(charMap);
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
// const string = "This is Javascript code";
// console.log(maxCharacter(string));


/*Wave array sort*/
function swap(arr, x, y)
{
	let temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp
}
function sortInWave(arr, n)
{
	arr.sort((a, b) => a - b);
	for(let i = 0; i < n - 1; i += 2){
		swap(arr, i, i + 1);
	}
	return arr
}

let arr = [ 10, 90, 49, 2, 1, 5, 23 ];
let n = arr.length;
console.log(sortInWave(arr, n));


function convertToWave(n, arr)
    {
        //your code here
        for(let i = 0; i < n; i+=2){
            if(i > 0 && arr[i-1] > arr[i]){
                let temp;
                temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
            if(i < n-1 && arr[i+1] > arr[i]){
                let temp1;
                temp1 = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp1;
            }
        }
        return arr;
    }
let arr = [ 10, 90, 49, 2, 1, 5, 23 ];
let n = arr.length;
console.log(sortInWave(arr, n));




/*Maximum of all subarrays of size k*/
function printKMax(arr,n,k)
{
    let j, max;
    for (let i = 0; i <= n - k; i++)
    {
        max = arr[i];
        for (j = 1; j < k; j++)
        {
            if (arr[i + j] > max)
                max = arr[i + j];
        }
        document.write( max + " ");
    }
}
    let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
    let n =arr.length;
    let k = 3;
    printKMax(arr, n, k);



/*Palindromic Array*/
function palindromeCheck(arr, n){
    let newArr = [];
    for(let i = 0; i< n; i++){
        arr[i]= arr[i]+"";
        let revNum = arr[i].split("").reverse().join("")
        if(arr[i] !== revNum){
            newArr.push(revNum)
        }
    }
    if(newArr.length === 0){
        return true
    }else{
        return false
    }
}


let arr = [121, 132, 141]
let n = 3
console.log(palindromeCheck(arr, n))

/*Maximize Array*/
function Maximize(arr,n){
        const array = arr.sort(function(a, b){return a - b})
       let sum = 0;
       for(let i = 0; i < n; i++){
           sum = sum + (array[i] * i)
           console.log((array[i]))
       }
       return sum
    }
    
    let arr = [5, 1, 2, 3, 4]
    let n = arr.length
    console.log(Maximize(arr,n))




/*Count pairs with given sum*/

function getPairsCount(arr,n,k){
        var m = new Map();
        var count = 0;
        for (var i = 0; i < n; i++) {
            if (m.has(k - arr[i])) {
                count += m.get(k - arr[i]);
            }
            if (m.has(arr[i])) {
                m.set(arr[i], m.get(arr[i]) + 1);
            } else {
                m.set(arr[i], 1);
            }
        }
        return count;
    }


let N = 4, K = 6
let arr = [1, 5, 7, 1]
console.log(getPairsCount(arr,N,K))




/*Subset of array */
function subset(a1, a2, n, m){
        a1.sort(function compareNumbers(a, b) { return a - b;})
        a2.sort(function compareNumbers(a, b) { return a - b;})
        let count = 0;
        let j = 0;
        for(let i =0; i<n; i++){
            if(a1[i] == a2[j]){
                count+=1
                j+=1
            }
        }
        if(count>= m){
            return "Yes"
        }
        return "No"
    }
    
let a1 = [1, 2, 3, 4, 5, 6]
let a2 = [1, 2, 4] 
let n = a1.length
let m = a2.length

console.log(subset(a1, a2, n, m))


/*Retun objexts in arraya */
const books = [
    {
        author: 'Pailo',
        books: ['The Alchemist', 'Eleven Minutes']
    },
    {
        author: 'John Green',
        books: ['The fault']
    },
    {
        author: 'James alen',
        books: ['As u think', 'The way of Peace']
    }
]
const result = books.reduce((accu, current) => {
    return [...accu, ...current.books];
}, [])

console.log(result)



/*Anagram checker*/
function isAnagram(a, b){
    let flag = false
    let n1 = a.length
    let n2 = b.length
    if(n1 !== n2) return false;
    var a1 = a.split("").sort().join("");
    var b1 = b.split("").sort().join("");
    for(let i = 0; i<n1; i++){
        if(a1.charAt(i) === b1.charAt(i)){
            flag = true
        }else{
            flag = false;
            break;
        }
    }
    if(flag == true){
        return true
    }
    return false
}
    
let a = "geeksforgeeks";
let b = "forgeeksgeeks";
console.log(isAnagram(a, b))







//Smallest Subset with Greater Sum
function subArray(Arr, N){
    Arr.sort(function(a, b){return a - b});
    console.log(Arr)
    var totalSum = 0;
    for(let i=0;i<N;i++)
    {
        totalSum += Arr[i];
        
    }
    let sum=0;
    let count=0;
    for(let i=N-1;i>=0;i--)
    {
        count++;
        sum += Arr[i];
        totalSum -= Arr[i];
        if(sum > totalSum)
        {
            break;
        }
    }
    return count;
}

let arr = [20, 12, 18, 4]
let N = arr.length
console.log(subArray(arr, N))



/**/
function singleNumber(nums) {
    if (nums.length===1) {
        return nums[0]
    }
    let result = 0;
    nums.forEach(element => {
        result = result ^ element
    });
    return result;
}


let nums = [4,1,2,1,2]
console.log(singleNumber(nums))
