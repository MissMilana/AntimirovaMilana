
// var arr = 'Каждый охотник желает знать'

// let arr1 = atr.split('  ')
// console.log(arr1)

// function stringTorray(str){

// }

// var arr=stringTorray(str);

// document.writeln(arr);


// Задание1
// var arr = 'Каждый охотник желает знать';
// function stringTorray(str) {
//     return str.split('  ')
// };

// alert(stringTorray(arr)); 


// Задание2
// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     return str = str.slice(0, length);
// }
// alert(delete_characters(str, 5))



// Задание3
// var str = "HTML JavaScript PHP";
// let newArray = ''

// function insert_dash(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == ' ') {
//             newArray += str[i] = '-'
//         }
//         else {
//             newArray += str[i]
//         }
//     }
// }

// var arr = insert_dash(str)
// alert(newArray.toUpperCase())


// Задание4
// var str = "string not starting with capital";

// function cursive_letter(str) {
//     let ass = str.charAt[0] = 'S'
//     return ass = str.charAt[0] + str.slice(1)
// }

// var arr = cursive_letter(str)

// alert(arr);

// Задание5
// var str = "каждый охотник желает знать";

// let newArr = ''
// let bukvy = ''
// let probel = ''
// for (let i = 0; i < str.length; i++) {

//     if (i == 0 || str[i] == ' ') {
//         probel = str[i]
//         newArr += str[i].toUpperCase()
//         newArr += bukvy.toUpperCase()
//     }
//     else {
//         if (probel == ' ') {
//             newArr +=  str[i].toUpperCase()
//             newArr += bukvy.toUpperCase()
//             probel = ''
//         }
//         else {
//             newArr += str[i]
//         }
//     }

// }
// alert(newArr);



// const input = document.queryCommandIndeterm ('#search')
// input.oninput = function(){
//     let value = input.value.trim()
//     console.log(value)
// }


// const input = document.queryCommandIndeterm ('#search')
// input.oninput = function(){
//     let value = input.value.trim()
//     let list = document.querySelectorAll('#search-results li')

//     console.log (list[0].textContent)
// }


// Задание6
// let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь"; 

// function change_register(str) {
// let strNew = ''
// let str2 = str.length
// for(i = 0; i < str2; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//         strNew += str[i].toUpperCase()
//     }
//     else {
//         strNew += str[i].toLowerCase()
//     }
// }
// return strNew
// }

// alert(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"

// function zeros(num, len) { - 7777777777777777
//   let numStr = num.toString();
//   let sign = "";
//   if (numStr[0] === "+" || numStr[0] === "-") {
//     sign = numStr[0];
//     numStr = numStr.substring(1);
//   }
//   while (numStr.length < len) {
//     numStr = "0" + numStr;
//   }
//   return sign + numStr;
// }
// alert(zeros(145, 5, "-")); // -00145
// alert(zeros(33, 4, "+")); // +0033
// alert(zeros(33, 4));


// Задание8
// function comparison(str1, str2) {  
//    let result = str1.toUpperCase() === str2.toUpperCase()
//    return result
// };

// console.log(comparison('string', 'StRiNg')); // true
// console.log(comparison('ABCDe', 'AbcdW'));   // false


// Задание9
// function initCap(str) { 
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
//   }
//   return words.join("");
// }

// alert(initCap(str));





const input = document.querySelector('#search')

input.oninput = function () {
    let value = input.value.trim()
    let list = document.querySelectorAll('#search-results li')


    if (value != '') {

        list.forEach(elem => {
            if (elem.textContent.toLowerCase().search(value.toLowerCase()) == -1) {
                elem.classList.add('hide')
            }
            else {
                elem.classList.remove('hide')
            }
        })
    }
    else {
        list.forEach(elem => elem.classList.remove('hide'))
    }
}


