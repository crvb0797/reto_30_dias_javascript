const dogs = [
  { name: "Ela", age: 2 },
  { name: "Rocky", age: 8 },
  { name: "Coby", age: 1 },
];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = "#bada55";
    p.style.fontSize = '50px';
}

/* Regular */
console.log('hello');

/* Iterpolado */
console.log('hello I am %s string!', '🍕');

/* Warning */
console.warn('OH NOOOO');

/* Error */
console.error('Shit!');

/* Info */
console.info('Los cocodrilos comen 3-4 personas al año');

/* testing */
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'esto es erroneo');

/* Limpiando */
/* console.clear(); */

/* Mostrando elementos del DOM */
console.log(p);
console.dir(p);

/* console.clear();
 */
/* Agrupando */
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`Este es ${dog.name}`);
    console.log(`${dog.name} tiene ${dog.age} años`);
    console.log(`${dog.name} tiene ${dog.age * 7} años de perro`);
    console.groupEnd(`${dog.name}`);
});

/* contando */
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
