
///-----Recursion-----////


////////////////////////////////////////
function fun1(){
    console.log("fun() 1")
}

function fun2(){-8 77
    console.log("Before fun() 1");
    fun1()
    console.log("After fun() 1")
}

console.log("Before fun() 2")
fun2()
console.log("After fun() 1")

//==Output==//
Before fun() 2
Before fun() 1
fun() 1
After fun() 1
After fun() 1
////////////////////////////////////////////

function fun1(n){
   if(n === 0)
    return;
   console.log("GFG")
   fun1(n-1)
}
let n = 2
fun1(n)

//==Output==//
GFG
GFG

////////////////////////////////////////////

Practice - 1

function fun1(n){
   if(n === 0)
    return;
   console.log(n)
   fun1(n-1)
   console.log(n)
}
let n = 3
fun1(n)

//==Output==//
3
2
1
1
2
3

////////////////////////////////////////////

Practice -2 => Sum of natural numbers

function fun(n){
 if(n === 0 )
  return 0;
 return n + fun(n-1) 
 
}
let n = 5
console.log(fun(n))

//==Output==//
15  => Time complexity-> theta(n)


////////////////////////////////////////////


///-----Arrays-----////

Practice -1 : check Array is sorted or not

function isSort(arr, n){
    for (let i = 0; i < n; i++){
        if(arr[i] < arr[i-1]){
            return false
        }
    }
    return true
}
const arr = [2, 5, 6, 7, 9, 19]
const n = arr.length
console.log(isSort(arr, n))



































