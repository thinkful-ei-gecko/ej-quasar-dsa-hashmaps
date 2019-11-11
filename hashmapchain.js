'use strict';

const Linked = require('./linked-list');

class customHashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      // throw new Error('Key error');
      return null;
    }
    return this._hashTable[index].value;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > customHashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * customHashMap.SIZE_RATIO);
    }
    // Find the slot where this key should be in
    const slot = this._findSlot(key);

    //   if(this._hashTable[index] === )
    // console.log(`item ${key}, ${value} has index ${index}`);
    // if (!this._hashTable[index] );
    //   this.length++;
    //   this._hashTable[index] = {
    //     key,
    //     value,
    //     next: null,
    //     DELETED: false,
    //   };

    //   // this._hashTable[index]
    // } else {
    //   // this.length++;
    //   let temp = this._hashTable[index];
    //   console.log(`temp/slot head: ${JSON.stringify(temp)}`);
    //   console.log(`temp.next: ${temp.next}`);
    //   while (temp.next !== null) temp = temp.next;
    //   temp.next = {
    //     value,
    //     next: null,
    //     DELETED: false,
    //   };

      // create linked list, or add to linked list
      // if it already exists
    }
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

// return slot
  _findSlot(key) {
    const hash = customHashMap._hashString(key);
    const start = hash % this._capacity;
    const slot = this._hashTable[start];
    // if the slot doesn't exist, 
    //
    if (!slot) {
      this.length++;
return this._hashTable[start] = {key};


    }  if(slot.key === key ) return slot; 
    while (slot.next) {
      slot = slot.next;
      if(slot.key === key) return slot;
    } 
    return slot.next = {key};
  }

  _resize(size) {
    const oldSlots = this._t ashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      // Bitwise left shift with 5 0s - this would be similar to
      // hash*31, 31 being the decent prime number
      // but bit shifting is a faster way to do this
      // tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      // converting hash to a 32 bit integer
      hash = hash & hash;
    }
    // making sure hash is unsigned - meaning non-negative number.
    return hash >>> 0;
  }
}

module.exports = customHashMap;
