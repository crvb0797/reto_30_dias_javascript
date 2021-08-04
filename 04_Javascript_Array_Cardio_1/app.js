/* Data que estaremos utilizando */

const inventors = [
    {nombre: 'Albert', apellido:'Einstein', año: 1879, RIP: 1955},
    {nombre: 'Isaac', apellido:'Newton', año: 1643, RIP: 1727},
    {nombre: 'Galileo', apellido:'Galilei', año: 1564, RIP: 1642},
    {nombre: 'Marie', apellido:'Curie', año: 1867, RIP: 1934},
    {nombre: 'Johannes', apellido:'kepler', año: 1571, RIP: 1630},
    {nombre: 'Nicolaus', apellido:'Copernicus', año: 1473, RIP: 1543},
    {nombre: 'Max', apellido:'planck', año: 1858, RIP: 1947},
    {nombre: 'Katherine', apellido:'Blodgett', año: 1898, RIP: 1979},
    {nombre: 'Ada', apellido:'Lovelace', año: 1815, RIP: 1852},
    {nombre: 'Sarah E.', apellido:'Goode', año: 1855, RIP: 1905},
    {nombre: 'Lise', apellido:'Meitner', año: 1878, RIP: 1968},
    {nombre: 'Hanna', apellido:'Hammrstöm', año: 1829, RIP: 1909},
]

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  /* Array.prototype.filter() */
  /* Filtrar de la lista de inventores los que nacieron en 1500 */

  const fifteen = inventors.filter(inventor => (inventor.año >= 1500 && inventor.año < 1600));

  console.log(fifteen);

  /* Array.prototype.map() */
  /* 2. Dar un arreglo del nombre y apellido de los inventores */

  const fullName = inventors.map(inventor => `${inventor.nombre} ${inventor.apellido}`);
  console.log(fullName);

  /* Array.prototype.sort() */
  /* 3. ordenar los inventores por fecha de nacimiento, de mayor a menor */

  const ordered = inventors.sort((a,b) => a.año < b.año ? 1 : -1);
  console.table(ordered);

/* Array.prototype.reduce() */
/* 4. cuantos años vivieron los inventores ? */

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.RIP - inventor.año);
}, 0);
console.log(totalYears)

/* 5. Ordenar los inventores por años vividos */
const oldest = inventors.sort(function(a, b){
    const lastInventor = a.RIP - a.año;
    const nextInventor = b.RIP - b.año;
    return lastInventor > nextInventor ? -1 : 1;
})
console.log(oldest);

/* 6. ordenar la gente en orden alfabetico por su apellido*/
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
})

console.log(alpha);

/* 7. resumir las instancias de cada uno de estos */

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);


