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

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Ayarlar';
ul.children[1].innerText = 'Oyun Ayarları'; //farklı bir şekli text in
ul.lastElementChild.innerHTML='<h4>Çıkış</h4>';//HTML de ekleyebiliriz

const btn =document.querySelector('.btn');
btn.style.background='red';

btn.addEventListener('click',(e) =>{ //click yerine mouseover gibi farklı eylemlerde koyulabilir
    e.preventDefault(); //butonun default eventlerini iptal ediyoruz
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerText = 'Çıkış'
});