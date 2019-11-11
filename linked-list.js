'use strict';
class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){ 
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) { 
        tempNode = tempNode.next; 
      }
      tempNode.next = new _Node(item, null); 
    }
  }

  find(item) { 
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){ 
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== undefined) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === undefined) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, target){
    let currNode = this.head;
    let previousNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item);
    
    if(target === 0){
      newNode.next = currNode;
      this.head = newNode;
    }
    
    else while(currTarget < target){
      currTarget++;
      previousNode = currNode;
      currNode = currNode.next;
    }
    newNode.next = currNode;
    previousNode.next = newNode;

  }

  insertAfter(item, target){
    let currNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item);
    
    // if(currTarget > 0){
    //   newNode.next = currNode;
    //   this.head = newNode
    // }
    
    while(currTarget < target){
      currTarget++;
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  insertAt(item, target){
    let currNode = this.head;
    let previousNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item);

    while (currTarget < target){
      currTarget++;
      previousNode = currNode;
      currNode = currNode.next;
    }

    previousNode.next = newNode;
    newNode.next = currNode;

  }

  insert(item){
    let currNode = this.head;
    let newNode = new _Node(item);
    if(this.head === null){
      this.head = newNode;
    }
    else{
      while(currNode.next){
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }
}  

//Q3: Supplemental functions for a linked list
function display(list){
  let result = JSON.stringify(list); 
  return result; 
}

function size(list){
  let currNode = list.head;
  let size = 0;
  while(currNode !== undefined){
    currNode = currNode.next;
    size++;
  }
  return size; 
}

function isEmpty(list){
  if(list.head === undefined){
    return console.log('is empty');
  }
  return console.log('list present'); 
}

function findPrevious(list, item){
  let currNode = list.head;
  let previousNode = list.head;
  //let counter = 0;
  let result;

  while(currNode.value !== item){
    previousNode = currNode;
    currNode = currNode.next;
  }
  result = previousNode.value;
  return console.log(result);
}

function findLast(list){
  let currNode = list.head;
  let previousNode = list.head;
  while(currNode !== undefined){
    previousNode = currNode;
    currNode = currNode.next;
  }
  return previousNode;
}

// Q5. Reverse a List

function Reverse(list){

  let currNode = list.head;
  let previousNode = null;
  let tempNode = null;

  while(currNode !== undefined){
    tempNode = currNode.next; // 1st case === "Athena"
    currNode.next = previousNode; // "Athena" => null
    previousNode = currNode; // null => Apollo
    currNode = tempNode; // "Apollo" => "Athena"
    // Sequence after 1st would be "Athena" => "Apollo"
  }

  list.head = previousNode;

  return console.log(JSON.stringify(list));
}

//Q6: 3rd from the end
function thirdFromTheEnd(list){
  // let previousNode = list.head;
  // let secondNode = null;
  // let thirdNode = null;
  // let currNode = list.head;
  // while(currNode !== undefined){
  //   thirdNode = secondNode;
  //   secondNode = previousNode;
  //   previousNode = currNode;
  //   currNode = currNode.next;
  // }
  // return console.log(`Third from the end: '${thirdNode.value}'`);
  let currNode =  list.head;

  while(currNode.next.next.next !== undefined){
    currNode = currNode.next;
  }
  let result = JSON.stringify(currNode);
  return console.log(result);
}

//Q7: Middle of a list
function middleOfList(list){
  let currNode = list.head;
  //let previousNode = list.head;
  let count = 0;
  let half = (size(list) / 2);
  if(half % 2 !== 0){
    return console.log('No middle');
  }
  else {
    while(currNode !== undefined){
      if(count + 1 === half){
        return console.log(currNode.value);
      }
      currNode = currNode.next;
      count++;
    }
  }

}


// Q8. Cycle Node

function cycle(list){
  let currNode = list.head;
  let otherNode = list.head;

  while(currNode.next !== undefined && currNode.next.next !== undefined){
    otherNode = otherNode.next; // 1st time is "Bobby"
    currNode = currNode.next.next; // 1st time is "Carlos"

    if(currNode.value === otherNode.value){
      return console.log('CYCLE IS TRUE')
    }
  }

  return console.log('NO CYCLE FOUND')

}

function main(){
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insert('Boomer');
  SLL.insert('Helo');
  SLL.insert('Husker');
  SLL.insert('Starbuck');
  SLL.insert('Tauhida');
  //SLL.insert('Random Element');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 1);
  SLL.insertAfter('Hotdog', 3);
  SLL.insertAt('Kat', 2);
  SLL.remove('Tauhida');
  // console.log(size(SLL));
  // console.log(display(SLL));
  // isEmpty(SLL);
  // findPrevious(SLL, 'Boomer');
  // findLast(SLL);
  //Reverse(SLL);
  // thirdFromTheEnd(SLL);
  // middleOfList(SLL);

  let Cycle = new LinkedList();
  Cycle.insertFirst('Albert')
  Cycle.insert('Bobby')
  Cycle.insert('Carlos')
  Cycle.insert('Daniel')
  Cycle.insert('EJ')
  console.log(display(Cycle))
  cycle(Cycle)

}
//console.log(JSON.stringify(main()));
main();


// Q4. Mystery Program

// Time Complexity: O(n) --> The first while just checks to make sure the list is not 
// empty but the second while checks for the values and isnt dependent on the first
// while loop (newNode.next)

 module.exports = {LinkedList, Node}