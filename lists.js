function List(argumentsArr){
		
		if(argumentsArr){
			var args = argumentsArr;
			this.data=argumentsArr;
			this.count = argumentsArr.length;
		} else {
			this.data = [];
			this.count = 0;
		}
		
	}

	List.prototype.push = function(x){
		this.data[this.count] = x;
		this.count++;
	};

	List.prototype.pop = function(x){
		this.data.length = this.count-1;
		this.count++;
	};



function LinkedList(){
	this.header = new Node("head", null);
	this.count = 0;

}

LinkedList.prototype.add = function( item, el ){
	
	var item = new Node(item);
	var currEl = this.header;
	while( currEl.element !== el ){
		currEl = currEl.next;
	}

	item.next = currEl.next;
	currEl.next = item;

	this.count++;

	
}

LinkedList.prototype.remove = function( item ){

	var currEl = this.header;

	while( currEl.next.element !== item && currEl.next !== null){
		currEl = currEl.next;
	}
	currEl.next = currEl.next.next;

	//currEl.next = currEl.next.next;

	this.count--;
}

LinkedList.prototype.count = function(){
	return this.count;
}




function Node ( el, next ) {
	this.element = el;
	this.next = next;
}



function solve(arr){
	

	var newList = new List();

	for( var i = 0; i < arr.length; i++ ){
		var subList = new List();
		var nums = arr[i].match(/\-{0,1}\d/gi);
		if(nums){
			nums.forEach(function(n){
				subList.push(n);
			});
		} else {
			subList.push('0');
		}
		newList.push(subList);
	}

	newList.data.forEach(function(l){
		var sum = 0;
		var average = 0;

		l.data.forEach(function(n){
			sum += parseInt(n);
		});
		average = sum/l.count;
		console.log('Sum= ' + sum);
		console.log('Average= ' + average);
	});

}
var arr = ["4 5 6", "1 1", " ", "10", "2 2 1"];
//solve(arr);


/////////////////
function solveTwo(arr){

	var newList = new List();
	arr.forEach(function (m) {
		var subList = new List();
		var words = m.match(/\w+/gi);
		if( words ){
			words.sort();
			words.forEach(function (w) {
				subList.push(w);
			});
		}
		newList.push(subList);

	});

	console.log(newList);


}

var arrTwo = ["wow softuni alpha", "hi", "rakiya beer wine vodka whiskey"];

//solveTwo(arrTwo);


////////////////////

function solveThree(array){
	
	var newList = new List();
	

	for( var i = 0; i < array.length; i++ ){
		var nums = array[i].match(/\-{0,1}\d{1,}/gi);
		var size = nums.length;
		var repeating = 0;
		
		var step;
		var count = 1;
		var checkIndex;

		var subList = new List();

		for( var k = 0; k < size; k += step){
			
			var sub = new List();
			count = 1;
			checkIndex = k;
			for( var m = k + 1; m < size; m++){
				if( checkIndex === m-1 && nums[k] === nums[m]){
					count++;
					checkIndex = m;
				}
			}
			step = count;

			if(count > 1){
				var p = 0;
				while( p < count ){
					sub.push(nums[k]);
					p++;
				}

				repeating++;
			} 

			if(sub.count > 0){
				subList.push(sub);
			} else {
				subList.push(new List(array[i][0]));
			}
		}

		if( repeating >= 0 ){
			var reduced = subList.data.reduce(function(a, b){
				if( a.count >= b.count ){
					return a;
				} else {
					return b;
				}
			});
			console.log(reduced);
		} 
	}	
}

var arrThree = ["12 12 12 2 7 4 3 3 12 12  8", "1 1 1 2 2 2 2 3 3 2 2 2 3", "4 4 5 5 5 4 4 4", "1 2 3", "0"];
 
//solveThree(arrThree);

///////////////////

function solveFour( arr ){

	var newList = new List();
	var arrSize = arr.length;
	for( var i = 0; i < arrSize; i++ ){
		var nums = arr[i].match(/\-{0,1}\d/g);
		//console.log(nums);

		var size = nums.length;
		var count;

		var temp = [];
		for( var m = 0; m < size; m++ ){
			count = 0;
			for( var k = 0; k < size; k++ ){
				if( nums[m] === nums[k] ){
					count++;
				}
			}
			if( count > 0 ){
				if( count % 2 === 0 ){
					temp.push(nums[m]);
				} 
			}
		}
		newList.push(temp)
	}
	console.log(newList);


}

var arrFour = ["1 2 3 4 1", "1 2 3 4 5 3 6 7 6 7 6", "1 2 1 2 1 2", "3 7 3 3 4 3 4 3 7", "1 1"];

//solveFour(arrFour);

//////////

function solveFive( arr ){

	var arrLength = arr.length;
	for( var i = 0; i < arrLength; i++ ){
		var nums = arr[i].match(/\-{0,1}\d+/g);

		var size = nums.length;
		var count;

		var temp = [{temp: []}];
		var check = temp[0].temp;

		for( var k = 0; k < size; k++ ){
			count = 0;
			for( var l = k; l < size; l++ ){
				if( nums[k] === nums[l] ){
					count++;
				}
			}
			if( check.indexOf( nums[k] ) === -1 ){
				check.push( nums[k] );
				temp.push({ num: nums[k], count: count });
			}
		}
		console.log('temp', temp);
	}

}

var arrFive = ["3 4 4 2 3 3 4 3 2", "1000", "0 0 0", "7 6 5 5 6"];

//solveFive(arrFive);

function solveSix( ){
	var ll = new LinkedList();
	

	
	ll.add("bomba", "head");
	ll.add("heineken", "head");
	ll.add("shumensko", "bomba");
	ll.add("banana", "shumensko");
	ll.remove("banana");
	ll.remove("bomba");
	ll.remove("heineken");
	console.log(ll);

}

solveSix();