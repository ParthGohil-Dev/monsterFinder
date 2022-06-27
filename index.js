

import { monsters } from "./monsters.js";



for (let monsterData of monsters) {
    showMonster(monsterData)
}

function showMonster(monsterData) {

    const monster = document.createElement('div');
monster.className = 'monster';

const image =  document.createElement('img');
image.src = `https://robohash.org/${monsterData.id}?set=set2`;
image.alt = 'moster';

const para = document.createElement('p');
para.className = "name";
para.innerHTML = monsterData.name;

const para2 = document.createElement('p');
para2.className = 'email';
para2.innerHTML = monsterData.email;

monster.append(image,para,para2);

document.querySelector('.monsters').append(monster);

}

function notFound() {

    const error = document.createElement('div');
    error.className = 'p-5 not-found';
    error.style.display = 'none';

    const span = document.createElement('span');
    span.innerHTML = '404';

    const h1 = document.createElement('h1');
    h1.innerHTML = 'No Monster Found';

    error.append(h1,span);

    document.querySelector('.monsters').append(error);

    
}
notFound();


document.querySelector('#search-monster').addEventListener('keyup',

function(e) {
   const keyword = e.target.value.toLowerCase() ;
   
   

   const findMonster = document.querySelectorAll('.monster');

let notFound = true;
console.log(keyword);
for (let monster of findMonster) {
    
    const name = monster.children[1].innerText.toLowerCase();
    const email = monster.children[2].innerText.toLowerCase();
    
    if (name.includes(keyword) || email.includes(keyword)) {
        monster.style.display = 'block';
        notFound = false;
        
    }
    else {
        monster.style.display = 'none';
        
    }
}

if (notFound) {

    document.querySelector('.not-found').style.display = 'block';
     
}

else {

    document.querySelector('.not-found').style.display = 'none'; }

} );








