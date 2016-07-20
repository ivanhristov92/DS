
function Dictionary(){
    this.data = [];
}

Dictionary.prototype.add = function(key, val){
    this.data[key] = val;
};

Dictionary.prototype.find = function(key){
    return this.data[key];

};



function Tree(value, children){
    var self = this;
    this.value = value;
    this.parent = null;

    this.children = [];
    if( children ){
        children.forEach(function(child){
            self.children.push(child);
            child.parent = self;
        });
    }
    
}




function solve( arr ){
    var N = arr[0];
    var S = arr[arr.length-1];
    var P = arr[arr.length-2];
    var nodes = [];

    var treesByNodeValue = new Dictionary();
    var tree;

    for( var i = 1; i < arr.length-2; i++ ){
        var nums = arr[i].match( /\-{0,1}\d+/gi );
        var parent = nums[0];
        var child = nums[1];

        var childNode = new Tree(child);
        var parentNode;

        if( !treesByNodeValue.data.hasOwnProperty(parent) ){
            parentNode = new Tree(parent);
            treesByNodeValue.add(parent, parentNode);
        } 

        if( !treesByNodeValue.data.hasOwnProperty(child) ){
            treesByNodeValue.add(child, childNode);
        }

        childNode.parent = treesByNodeValue.find(parent);
        childNode.parent.children.push( childNode );
        console.log('newTree', childNode);
    }
    
    var leaves = [];
    var middle = [];
    var root;
    treesByNodeValue.data.forEach(function(v){
        if( v.parent === null ){
            root = v;
        }

        if(v.children.length === 0 ){
            leaves.push(v);
        } else if( v.parent !== null ){
            middle.push( v );
        }
        
    });

    console.log( middle );
}

var arr = ['9', '7 19', '7 21', '7 14', '19 1', '19 12', '19 31', '14 23', '14 6', '38', '43'];

solve(arr);