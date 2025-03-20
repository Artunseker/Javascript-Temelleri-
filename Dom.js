// Single element

console.log(document.getElementById('my-form'));//burada html deki yazdığımız kullanıcının gördüğü kodları javasrcripte alıyoruz ve console da görebiliyoruz

console.log(document.querySelector('h1'));

//Multiple element

console.log(document.querySelectorAll('.item'));//burada array metodları kullanabiliriz

console.log(document.getElementsByClassName('item'));//direk array metodları kullanılamaz sadece classlar alınır arraye dönüştürmek lazım

console.log(document.getElementsByTagName('li'));


const items = document.querySelectorAll('.item');

items.forEach(function(item){
    console.log(item);
})