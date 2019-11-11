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
