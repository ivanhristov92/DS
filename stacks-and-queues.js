function Queue(){
    this.data = [];
}

Queue.prototype.enqueue = function( num ){
    this.data.push( num );
};

Queue.prototype.dequeue = function(){
    return this.data.splice(0,1);
};

Queue.prototype.peek = function(){
    return this.data[0];
};


function Stack(){
    this.data = [];
    this.count = 0;
}

Stack.prototype.push = function( num ){
    this.data.push( num );
    this.count++;
};

Stack.prototype.pop = function(){
    this.count--;
    return this.data.splice( this.data.length-1, 1 );
};

function Node( element, next ){
    this.element = element;
    this.next = next;
}

function pNode( element, next, prev ){
    this.element = element;
    this.next = next;
    this.previous = prev;
}

function LinkedStack(){
    this.head = new Node('header', null );
    this.tail = this.head;
    this.count = 0;
}

LinkedStack.prototype.push = function( element ){
    var newNode = new Node( element, null );
    var currEl = this.head;
   if( this.head.next === null ){
       this.head.next = newNode;
   } else {
      this.tail.next = newNode;
   }
   this.tail = newNode;

}

LinkedStack.prototype.pop = function(){
    var currEl = this.head;
    var temp = this.tail;
   while( currEl.next !== this.tail ){
       currEl = currEl.next;
   }
   currEl.next = null;
   this.tail = currEl;
   return temp;
};


function LinkedQueue(){
    this.data = [];
    this.head = new pNode('header', null, null);
    this.tail = this.head;
}

LinkedQueue.prototype.enqueue = function( element ){
    var newNode = new pNode(element, null, this.tail);
    this.tail = newNode;

    if( this.head.next === null ){
        this.head.next = newNode;
        this.tail = newNode;
    }else{
        var currEl = this.head;
        while( currEl.next !== null ){
            currEl = currEl.next;
        }
        currEl.next = newNode;
        this.tail = newNode;
    }
};

LinkedQueue.prototype.pop = function(){
    var temp = this.tail;
    temp.previous.next = null;
    this.tail = temp.previous;
    return temp;
};

var lq = new LinkedQueue();

lq.enqueue(2);
lq.enqueue(4);
lq.enqueue(6);

console.log(lq.pop());
console.log(lq.pop());

console.log(lq);

LinkedQueue.prototype.dequeue = function(){

};


function solve(input){
    var q = new Queue();
    var count = 0;
    var index = 0;

    while( count < 50 ){
       
        if( q.data.length === 0 ){
            q.enqueue( input );
            q.enqueue( input + 1 );
            q.enqueue( input * 2 + 1 );
            q.enqueue( input + 2 );
            count += 4;
            index++;
        } else {
            var value = q.data[index];
            q.enqueue( value + 1 );
            q.enqueue( value * 2 + 1 );
            q.enqueue( value + 2 );
            count += 3;
            index++;
        }
    }

        for(var k = 0; k < 50; k++){
            console.log(q.data[k]);
        }
    
}

//solve(1000);