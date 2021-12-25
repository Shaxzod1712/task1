// ============  Homa work


// ---------- Task1
// letter = value => value == value.toLowerCase() 


// console.log(letter('A'))

// Masalalar//
// 1-masala 1-Holat
// function data(letter) {
//    return letter === letter.toUpperCase()
// }
// console.log(data('a'));

// 2-Holat
// data = a => a === a.toUpperCase()
// console.log(data('f'));

// 3-Holat
// function data(letter) {
//     console.log(letter=== letter.toUpperCase());
// }
// data ('d')


// 2-masala 1-Holat
// letter = 'Webbrain Academy';
// console.log( letter.match(/a/gi).length)

// 2-Holat

// var data = 'Webbrain Academy'
// var a = 0
// for (let i = 0; i < data.length; i++) {
//     (data[i] == 'a' || data[i] == 'A') && a++
// }
// console.log(a);
// ------------------3-masala
//  -------------1-Holat
// var num = '123456789';
// var a = 0;

// b = num.split('');

// b.map((value) => {
//   a += parseInt(value);
// });
// console.log(a);

// ------------2-Holat
    // var num = '123456789';

    // var a = 0;

    // for (i = 0; i <= num.length; i+2) {
    //   a += i;
    // }
    // console.log(a);

// ----------3-Holat

    // function sumOfStr(str) {
    //   var a = num.split('');
    //   return a.reduce(function (first, second) {
    //     return parseInt(first) + parseInt(second);
    //   });
    // }
    // console.log(sumOfStr('123456789'));
// ------------------------4-masala
// --------------1-Holat
// function data(letter) {
    //     var letter1 = letter.split('*').join('');
    //     return letter1.split('/').join('')
    // }
    // console.log(data('lorem / lorem *'));
// -------------2-Holat
    // var Otabek = 'lorem / lorem *'
    // Shaxzod = Otabek.split('*').join('')
    // console.log(Shaxzod.split('/').join(''));
// ---------------3-Holat
    // function data(letter) {
    //     var letter1 = letter.replace('*', '');
    //     return letter1.replace('/', '')
    // }
    // console.log(data('lorem / lorem *'));
//---------------4-Holat
    // function data(str) {
    //   console.log(str.match(/\w/g).join(''));
    // }
    // data(Webbrain // Academy ** );

// ================================================================================================

// function imthon(mark) {
// if (mark == 'A'){
//     console.log('HAVE PASSED SUCCESFULY');
// } else if(mark == 'B'){
//     console.log('YOU HARDLY PASSED');
// } else if(mark == 'C'){
//     console.log('YOU TAKE REEXAM');
// } else if(mark == 'E'){
//     console.log('YOU FAILED');
// } else {
//     console.log('ENTER VALID INPUT');
// }  

// };
// imthon('NUN')

// function app(value1,value2,value3){
//     var date = 'Shakhzod Shukurullaev'
//     if(date.includes(value1,value2,value3)) console.log(true);
//     else console.log(false);
// }
// app('Otabek', 'Elbek', 'Shakhzod')

// data = (value) => {
//     return value.split('').sort((a,b) => b - a).join('')
// }
// console.log(data('123456789'));

// data = person => person ? `Welcome to our course ${person}` :'welcome to strenge'
// console.log(data('otabek'))
// var b = 'Web brain academy'
// data = (b) => {
//     return b
// }
// console.log(data(b));

// data = (a, b) => {
//     return a ** b
// }
// console.log(data(7,2));


// ...................21,12,21...................................

/////////// 1-masala //////////

// function translate(value1) {
//     if (value1 === 'Russian') console.log('Privet');
//     else if (value1 === 'Uzbek') console.log('Salom');
//     else if (value1 === 'English') console.log('Hello');
//     else console.log('Bizda ushbu til mavjud emas');
// }
// translate('Uzbek')

///////// 2-masala ////////

// 1-Holat

// function data(value) {
//     return value.split('').reverse().join('')

// }
// console.log(data('123456789'));

// 2-Holat

// var point = '123456789';
// var data = point.split('')
// data.sort(function (a, b) {
//   return b - a;
// });
// console.log(data.join(''));

///////// 3-masala /////////

// function data(person) {
//   person
//     ? console.log(welcome to our course ${person})
//     : console.log('Welcome to strange');
// }
// data();

// data = person => person ? Welcome to our course ${person} :'welcome to strenge'
// console.log(data('otabek'))

////////// 4-masala //////////

// var data = 'Web brain academy';
// var a = data.split(' ');

// function Capital(a) {
//   return (
//     a[0].replace(a[0][0], a[0][0].toUpperCase()) +
//     ' ' +
//     a[1].replace(a[1][0], a[1][0].toUpperCase()) +
//     ' ' +
//     a[2].replace(a[2][0], a[2][0].toUpperCase())
//   );
// }

// console.log(Capital(a));

//////// 5-masala ////////

// function data(params) {
//     params % 2 ? console.log('toq') : console.log('juft');
// }
// data(52);

//////// 6-masala ////////

// data = (a, b) => {
//   return a ** b;
// };
// console.log(data(7, 2));

// var sam = 'web brain academy'

// console.log(sam.replace(/ /g, ''));


// var sum = 0
// for (let i = 0; i < sam.length; i++){
//     if (sam[i] === ' ') console.log(sam[i]=='');
// }


// console.log(sam);

// for(let i = 0; i <=100; i++){
//     i % 2 ? console.log(i, '=toq') : console.log(i, '=juft' );
// }

// var num = '123456789'
// var num1 = num.split('').reverse().join('')
// console.log(num1);
// var num = '748394736384937483'
// var a = 0
// var b = 0
// for(let i = 0; i <num.length; i+=2){
//     a+=parseInt(num[i])
// }
// for(let j = 1; j <num.length; j+=2){
//     b+=parseInt(num[j])
// }
// console.log(a,b);

// test= () => {
//     console.log('test1');
//     return 'test2'
// }
// console.log(test());

// console.log(eval('12+3'));

// var num1= '1234567890'
// var num2= '1234567890'
// console.log(num1.slice(2,5));
// console.log(num1);
// console.log(num2.substr(2,5));
//  console.log(num2);
// var fruits = ['apple', 12, 'Ananas', 'Orenge', 'Banana', 65, 'Kiwi'] 
// let res = fruits.filter((value)=> typeof value === typeof "s")

// console.log(res);

// ShiftLeft = (a,b) => {
//     for(i = 0; i < b; i++ ){
//         var lastIndex = a.length - 1;
//         var lastItem = a[lastIndex];
//         for(j = lastIndex; j > -1; j--){
//             if(lastIndex > 0){
                
//             }
//         }
//     }
// }

// ShiftLeft([5,6,7,8,9],1)


// var fruits = ['apple', 12, 'Ananas', 'Orenge', 'Banana', 'Kiwi'] 

// palindrom = str => {
//     str = str.toLowerCase()
//     return str === str.split('').reverse().join('')
// }
// console.log(palindrom('cacacacac'));


// [...new Array(10)].map((value, index)=>{
    //     console.log(num[value]);
    // });
    
    // var fruits = ['apple', 12, 'Ananas', 'Orenge', 'Banana', 'Kiwi'] 
    // var res = fruits.filter((value) => typeof value !== typeof 1)
    // var ress = res.join('')
    // let a = 0
    
    // fruits.map((value,index)=>{
    //     console.log(index);
         
    // })
    // for(let i = 0; i < ress.length; i++ ){
        //     (ress[i] === 'a' || ress[i] === 'A') && a++
        // }
        // console.log(a);
    
// var num = [ 10, 1, 12, 3, 'apple', 14, 15, 6, 17, 8,9];
// var res = num.filter((value) => typeof value !== 'string')
// console.log(eval(res.toString().split(',').join('+')));


// var num = [ 10, 1, 12, 3, 14, 15, 6, 17, 8,9]

// var num1 = num.sort((a,b)=>b-a)
// num1.pop()
// console.log(num1.pop())

// name1 = param => {
//     var sum = param.join(' ') 
//     var sum1 = `${sum} ${'+ 1'}`
//     return eval(sum1)
// }
// console.log(name1([1,2,3]))

// var arr = [12, 12, 12, 12]

// const res = arr.map((value)=>value+=1)
// console.log(res);

  var fruits = ['apple', 12, 'Ananas', 'Orenge', 'Banana', 'Kiwi'] 
  console.log(fruits.join().match(/a/gi).length);