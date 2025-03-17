console.log('Hello World');
console.error("This is an error");
console.warn("This is a warning");
//var ,let, const
let age =30;
age = 31;
console.log(age);
//const sabittir.

//const score; // hata alıcaz consta yeniden değer atıyamayız list dizi değiştirebiliriz
score = 95;
console.log(score);

//String ,Numbers, Boolean, undefined
const name='Artun';
const yaş =30;
const rating=4.5;
const isMarried = false;
const x=null; //gerçekten bir nesne değil sahte return
const y=undefined;
let z; //değersiz
console.log(typeof rating);
console.log(typeof name);
console.log(typeof yaş);
console.log(typeof isMarried);
console.log(typeof x);
console.log(typeof z);


//Concatenation
console.log('Benim Adım ' + name);

//Template String
const hello =`Benim Adım ${name} Ve Benim Yaşım ${age}`;
console.log(hello);


const s = 'Hello World!';
console.log(s.length); //12
console.log(s.substring(0,5).toUpperCase()); //HELLO
const a="technology,companies,computer,IT";
console.log(a.split(',')); 

//Arrays

/* multi
line
comment */

const numbers = new Array(1,2,3,4,5,6,7,8,9);
console.log(numbers);

const fruits= ['apples','orange','pears',10,true];

fruits[3]='grapes';//const olan değeri sadece değiştiremessin içindeki değerlerde değişiklik yapabilirsin

fruits.push("mangos");// sona ekleme

fruits.unshift('strawberries') //başa ekleme

fruits.pop(); // sonuncusunu atar

console.log(Array.isArray(fruits));//burada array olan bir dize ile diğer arrayi karşılaştırıyoruz

console.log(fruits.indexOf('orange')); //indexini verir

console.log(fruits[1],fruits[3]);

//sözlükler

const person = {
  firstName: 'Artun',
  age: 19,
  address: {
    street: 'zümrütevler',
    city: 'İstanbul'
  },
  hobbies: ['okuma', 'yazma', 'kod yazma']
};// bu nesnedir object türündedir

console.log(person.firstName, person.address);

console.log(person.hobbies[1])

console.log(person.address.city)

const {firstName,address:{city}} =person;
console.log(firstName,city);

person.email='artunseker@gmail.com';
console.log(person);

const todos = [
    {
        id:1,
        text:'Parti',
        isCompleted:true
    },
    {
        id:2,
        text:'Parti sonrası temizlik',
        isCompleted:false
    }
];

console.log(todos);
// ben parti sonrası temizliği almak istiyom
console.log(todos[1].text);

//todolarımız bir listenin içinde listenin içindede sözlüklere ayrılmış durumda

//ben bu todoları json verisi yapcam

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);