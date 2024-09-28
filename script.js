
// ## Array Cardio Day 1


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];


const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 
    'Blake, William','Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 
    'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 
    'Benjamin, Walter', 'Berlin, Irving', 'Benn, Tony','Benson, Leana', 'Bent, Silas', 'Berle, Milton', 
    'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 
    'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose', 'Billings, Josh', 'Birrell, Augustine', 
    'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 
    'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'
];



// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => {
    // console.log("inventor:", inventor);

    filteredInvertors = inventor.year >= 1500 && inventor.year < 1600;

    return filteredInvertors;
});
console.table('fifteen :', fifteen);


// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullNames = inventors.map(inventor => {
    // console.log('inventor :', inventor);

    const inventorNames = `${inventor.first} ${inventor.last}`

   return inventorNames;
});
console.log("fullNames :", fullNames);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => {
    const sortedInventors = (a.year > b.year ? 1 : -1);
    return sortedInventors;
});
console.log("ordered :", ordered);
console.table(ordered);



// 4. Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;

    const result = lastInventor > nextInventor ? -1 : 1;
    return result;
});
console.table('oldest :', oldest);



// Array.prototype.reduce()
// 5. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    const result = total + (inventor.passed - inventor.year);
    return result;
}, 0);
console.log("totalYears :", totalYears);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Paste this url to browser and below functionality works

// const category = document.querySelector('.mw-category');
// console.log(category);
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));



// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabeticallySort = people.sort((lastOne, nextOne) => {
    // console.log('lastOne:', lastOne);
    // console.log('nextOne:', nextOne);

    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log('alphabeticallySort :', alphabeticallySort);



// 8. Reduce Exercise
// Sum up the instances of each of these
const transportation = data.reduce(function (obj, item) {
    // console.log('Item:', item);
    // console.log('obj:', obj);

    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log("transportation :", transportation);



// Return inventor name using forEach
inventors.forEach((inventor) => {
    // console.log('inventor :', inventor);
    
    const firstName = inventor.first; 
    console.log('firstName :', firstName);

    const lastName = inventor.last; 
    console.log('lastName :', lastName);

    const year = inventor.year; 
    console.log('year :', year);

    const passed = inventor.passed; 
    console.log('passed :', passed);
});



// Array.prototype.find()
// Find the first inventor who was born in the 1800s:
const inventorBornIn1800s = inventors.find(inventor => {
    const bornIn1800s = inventor.year >= 1800 && inventor.year < 1900;
    return bornIn1800s;
});
console.log("inventorBornIn1800s :", inventorBornIn1800s);



// Array.prototype.some()
// Check if at least one inventor was born before 1600:
const bornBefore1600 = inventors.some(inventor => inventor.year < 1600);
console.log("bornBefore1600 :", bornBefore1600); // true or false




// Array.prototype.every()
// Check if every inventor lived over 50 years:
const allLivedOver50 = inventors.every(inventor => (inventor.passed - inventor.year) > 50);
console.log("allLivedOver50 :", allLivedOver50); // true or false



// Array.prototype.flat()
// Flatten a nested array of arrays into a single array:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flat();
console.log("flatArray :", flatArray);



// Array.prototype.flatMap()
// Map and flatten the result in one step
const namesWithYears = inventors.flatMap(inventor => {
    return [inventor.first, inventor.year];
});
console.log("namesWithYears :", namesWithYears);


// Array.prototype.fill()
// Fill an array with a static value:
const filledArrayWithStaticValue = new Array(5).fill('Science')
console.log('filledArrayWithStaticValue :', filledArrayWithStaticValue);



// Array.prototype.splice()
// Remove elements from an array and optionally replace them:
const spliceMethodExample = people.splice(2, 1, 'ATIF HERE')
console.log("Updated people array:", people);

const spliceExample = people.splice(0, 5, 'New Name');
console.log("Updated people array:", people);


// Array.prototype.slice()
// Create a new array by slicing out part of an array:
const slicedPeople = people.slice(0, 5);
console.log("slicedPeople :", slicedPeople);



// Array.prototype.concat()
// Concatenate two arrays:
const combinedArray = inventors.concat(people);
console.log("combinedArray :", combinedArray);


