                     /*           بسم الله الرحمن الرحيم                 */
// let name=Infinity;

// console.log( typeof NaN);
// console.log(1);
// console.log(2);


// function sayhi(username,age){
//     if(age <20){ console.log (`go away from me and play with your pape !!`)}
//    else {console.log(`Hello ${username} your age is ${age} `)} 
// }
// sayhi("mustafa",21);
// sayhi("yousef",16);
// sayhi("ahmed",24);
// function clacyear(start , end , skip){
//     for(i = start ; i<=end ; i++){
//         if( i=== skip){
//             continue; // it make skiping for one year it taked condition
//         }
//         console.log(i)
//     }
// }
// clacyear(2000,2024,2020);
// function calc (num1, num2){
//     return num1+num2;
// }
// let rez=calc(10, 20);
// console.log(rez);
// function clacyear(start , end , skip){
//     for(i = start ; i<=end ; i++){
//         if( i=== 2020){
//           return `Interrputting`;
//         }
//         console.log(i)
//     }
// }
// clacyear(2000 ,2024)

// function sayhi(username,age){
//     //  if(age === undefined){ age ="Unknow";
//     //  }
//     age = age || "Unknow"
//   return `Hello ${username} your age is ${age} ` 
// }
// console.log(sayhi("mustafa"));
// let x=1/0;
// let y=Number.MAX_VALUE*2;
// console.log(x, y,x/y)
// console.log(0/0) //nan
// console.log(Math.fround(2.2));
// let name="mohmed";
// console.log(name.padEnd(13,"ahmed"));
// console.log (Number.NEGATIVE_INFINITY)// -infinity
// console.log (Number.EPSILON)// 2.2000000005e
// let name="welcome Mostafa, mostafa khalid is software developer " ;
// let regex= /mostafa/ig; // is return Mostafa & mostafa 
// // let regex= /yehya/ig; // is return null
// console.log(name.match(regex));
// // console.log(name.test(regex));
// let nums="12345678910";
// let renums=/[0-9]/g;
// console.log(nums.match(renums));
// let nums2="12345678910";
// let renums2=/[^0-2]/g;
// console.log(nums2.match(renums2));
// let nums3="1&23#45678@91%0";
// let renums3=/[^0-9]/g;
// console.log(nums3.match(renums3))
// let nums4="mo1mo momo2 mo2om 22moom mo8om";
// let renums4=/mo[0-9]om/ig;
// console.log(nums4.match(renums4));
// let nu=" sayed 1spam 2spam 3spam spam5 spam6 walead spamspam";
// let re =/\bspam/ig; // must spam there is at first statment
// let re1 =/spam\b/ig; // must spam there is at end statment
// let re3 =/(spam\b|\bspam)/ig; // must spam there is at end statment
// console.log(nu.match(re));
// console.log(nu.match(re1));
// console.log(nu.match(re3));
// console.log(re.test(nu));
// console.log(/(spam\b|\bspam)/ig.test("sayed"));
// console.log(/(spam\b|\bspam)/ig.test("2spam"));
// let nus=" 0110 00 000 01520 1050 0113"
// let renus=/0\d0/ig;
// let renus1=/0\d+0/ig;
// let renus2=/0\d*0/ig;
// console.log(nus.match(renus));
// console.log(nus.match(renus1));
// console.log(nus.match(renus2));
// let url=" https://google.com http://www.website.net web.com"
// let urlre=/https?:\/\/(www.)?\w+.\w+/ig; 
// let urlre1=/(https?:\/\/)?(www.)?\w+.\w+/ig; 
// console.log(url.match(urlre));
// console.log(url.match(urlre1));
// let hours="2";
// let minutes="5";
// console.log(`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}`)
// let base= 2, pow=4;
// let ac=1;
// while(pow>0){
//     ac*=base;
//     --pow;
// }console.log(ac);
// let num=4;
// let fact=1;
// while(num>1){
//     fact*=num;
//     --num;
// }console.log(fact);


// //round
// console.log(Math.round(99.2)); // =>> 99     if the number after dot . ( .0 : .4)
// console.log(Math.round(99.5)); // =>> 100    if the number after dot . ( .5 : .9)
// // ceil
// console.log(Math.ceil(99.2));  // =>> 100    if the number after dot . ( .0 : .4)
// console.log(Math.ceil(99.6));  // =>> 100    if the number after dot . ( .5 : .9)
// // floor
// console.log(Math.floor(99.1)); // =>> 99    if the number after dot . ( .0 : .4)
// console.log(Math.floor(99.7)); // =>> 99    if the number after dot . ( .5 : .9)

//function
// function hello(){
//     console.log(`hi man my name is mostafa`);
// }
// hello();
// // function with parametar
// function hi(name){
// console.log(`hello every one i am ${name}`);
// }
// hi('mostafa');
// function product(price ,taxes, ads){
// let pro =price+taxes;
// let rez =pro +ads;
// console.log(rez);
// }
// product(1000 , 50 ,100);
// product(1000 , 10 ,200);
// product(1000 , 20 ,300);
// product(1000 , 30 ,400);
// //function with return
// function product(price ,taxes, ads){
//     let pro =price+taxes;
//     let rez =pro +ads;
//     return rez;
//     }
//     let natg =product(1000 , 50 ,100);
//     console.log(natg)
// /* **notes** know if you write any things after return on the same scope it wiil hidden 
//  (not print)*/

//  // using two function together
//  function days(age){
//     let res=age*365;
//     return res;
//  }
//  let x=days(21);
//  function calchour(age){
//     let ress=age*24;
//     return ress;
//  }
//  let hours=calchour(x);
//  console.log(hours);
// //  console.log("amr")

//  function names (...peopeles){
// for(let i=0; i<peopeles.length;i++){
//    let rex= console.log([i]) 
// }
//  }names(ah,ali,mo,os);
// console.log("\n")
//  let names= (...peopeles)=>`string [${peopeles.join("],[")}]=> done !`;
//  console.log(names("ah","ali","mo","os"));
//  console.log("\n")
//  let nus=[20,50,10,60];
//  let calc=(one,two,...nums)=>one+two+nums[0];
//  console.log(calc(nus[0],nus[1],nus[2]))
//  console.log("\n")
//  let n=["ab","bg",3,"Ag",5,9];
//  let empty=[];
//  for(let i=0;i<n.length;i++){
//         empty.push(n[i]);
//  }console.log(empty);
//  console.log("\n")
//  //filter
//  //to return name's start with ("a")
//   let fri =["ali","sara","mostafa","ahmed","ibrahem","amr","osama"];
//  let fif=fri.filter(function(ele){return ele.startsWith ("a");});
//  console.log(fif);
//  console.log("\n")
 //to return even nums
//  let nuss=[11,20,2,5,17,10];
//  let evnum=nuss.filter(function(ele){return ele %2===0});
//  console.log(evnum)
//  let sens=" i love foood code too playing much ";
//  //console.log(sens.split(""))// كدا انا هفصل بين الكلام مش الحروف
// let rem=sens.split(" ").filter(function(ele){return ele.length<5
// }); console.log(rem.join(" "))
// // اعمل فلترة للحروف ورجع الارقام مضروبة في نفسها 
// let mix="a13bs2zx";
// let ret=mix.split("").filter(function(ele){
//        return !isNaN(parseInt(ele));}).map(function(ele){
//               return ele*ele;
// }); console.log(ret.join(""));
//عايز اطلع اطول كلمة من الاري دي
let bigw=["sasa","samiar","momo","propogana","samsam"];
let check=bigw.reduce(function(acc,cur){
       // console.log(`acc = ${acc}`);
       // console.log(`acc = ${cur}`);
       // console.log( acc.length > cur.length? acc: cur);
       // console.log(`####`);
       return acc.length > cur.length? acc: cur;})
console.log(check);
let b=["@","s","m","@","@","s","@","m"];
let x=b.filter(function(ele){return !ele.startsWith("@");}).reduce(function(acc,cur){
       return `${acc}${cur}`;  
}); console.log(x);

