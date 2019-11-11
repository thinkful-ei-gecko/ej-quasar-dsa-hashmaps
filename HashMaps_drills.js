'use strict';
const HashMap = require('./hashmap');

function main() {
  const Ior = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  Ior.set('Hobbit', 'Bilbo');
  Ior.set('Hobbit', 'Frodo');
  Ior.set('Wizard', 'Gandalf');
  Ior.set('Human', 'Aragorn');
  Ior.set('Elf', 'Legolas');
  Ior.set('Maiar', 'The Necromancer');
  Ior.set('Maiar', 'Sauron');
  Ior.set('RingBearer', 'Gollum');
  Ior.set('LadyOfLight', 'Galadriel');
  Ior.set('HalfElven', 'Arwen');
  Ior.set('Ent', 'Treebeard');

  console.log(Ior);
  console.log(Ior.get('Hobbit'));
  console.log(Ior.get('Maiar'));

  const dupString = 'google all that you can think of';
  console.log(removeDup(dupString));

  // input: as above
  // output: an array but with like hobbit
  // Key: hobbit, value: "Frodo", next: 'Bilbo' {
  //   value: bilbo, next: alex { }
  // }

}

const WhatDoesThisDo = function() {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

const removeDup = function(string) {
  let map = new HashMap();
  for (let i = 0; i < string.length; i++) {
    map.set(i, string[i]);
  }

  let currChar = '';
  let prevChar = '';
  let filteredString = '';

  for (let i = 0; i < map.length; i++) {
    currChar = map.get(i);
    prevChar = map.get(i - 1);
    if (currChar !== prevChar) filteredString += currChar;
  }

  return filteredString;
};

main();
// WhatDoesThisDo();


// Q5. Permutationn a Palinndrome

function palindrome(string){
  let map = new HashMap();
  let count = 0;
  for (let i = 0; i < string.length; i++){
    map.set(i, string[i])
    count++;
  }

  if (count % 2 === 0){

    for (let i = 0; i < string.length; i++){
      let letterCounter = 0;
      // if it is odd will return false
      let letter = map.get(i)
        for(let j = 0; j < string.length; j++){
          if(letter === map.get(j)){
            letterCounter++
          }
        }

        if (letterCounter % 2 !== 0){
          return false;
        }
    }
  
    return true;
  } else {
    let odd = 0;
    for (let i = 0; i < string.length; i++){
      let letterCounter = 0;
      let letter = map.get(i)

      for (let j = 0; j < string.length; j++){
        if(letter === map.get(j)){
          letterCounter++
        }
      }

      if(letterCounter % 2 !== 0) {
        odd++
      }
    }

    if (odd % 2 <= 1){
      return true;
    } else {
      return false;
    }

  }

}

console.log(palindrome('pagoda'))


// Q6. Anagram

function Anagram(array){

  const groups = new Map();

  array.forEach(wrd => {
    const word = wrd.split('').sort().join('');

    const group = groups.get(word) || []

    groups.set(word, [...group, wrd])

  })

  return Array.from(groups.values())
}

console.log(Anagram(
  ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
  ))


// Q7. Hash Maps with Linked Lists

// Pseudo Code

// have a hash map
// when two compare equal make new linked lists
// link all hobbits for example