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

//For

for(let i=0;i<=10;i++){
  console.log(`loop: ${i}`);
}

for(let a=0;a<todos.length;a++){
  console.log(`todo: ${todos[a].text}`);
}

for(let t of todos){
  console.log(t.text);
}

//While
let i=0
while(i<10){
  console.log(`while loop: ${i}`);
  i++;
}

//forEach, map, filter (bunların hepsi verdiğimiz dizede tek tek değerlerin üstünde)

todos.forEach(function(todo){ // sadece yazdırır normal bir döngü gibi çalışır
  console.log(todo.text);
});

function yazdir(t){
  console.log(t.text);
}
todos.forEach(yazdir);


const todoText = todos.map(function(todo){ //map yeni bir dizi döndürür döngü şeklinde;
  return todo.text;
});

console.log (todoText);


const todoText1 = todos.filter(function(todo){//filter sadece şartı sağlayanları bir dizi içine atar ve döndürür
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
})
console.log(todoText1);


// Condition

const c=10;
const k=11;
if(c==10){
  console.log('x degeri 10');
}

if(c===10|| y>10){ //veri tipi ile de uyuşması lazım int===int
  console.log('x degeri 10 ya da y 10dan buyuk');
}else if(c>10 && k>10){ 
  console.log('x degeri 10dan buyuk ve k değeri 10 dan buyuk');
}else{
  console.log('x degeri 10dan kucuk');
}

const color = c>9 ? 'red':'blue';

console.log(color);

switch(color) {
  case 'red':
    console.log('renk kırmızı');
    break;
   case 'blue':
    console.log('renk mavi');
    break;
  default:
    console.log('renk bilinmiyor');
    break;
}
