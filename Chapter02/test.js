function Reference(value) {
    this.value = value;
}


function Person(age, name) {
    this.age = age;
    this.name = name;
}
Person.prototype.shareV = 1;
Person.prototype.ShareR = new Reference(88);


function Asian() {
    this.set_Value = function(shareV) {
        this.shareV = shareV;
    }
}
Asian.prototype = new Person();
Asian.prototype.__proto__ = Person.prototype;

function AsianWithLocalR() {
    this.ShareR = new Reference(100);
    this.set_Value = function(shareV) {
        this.shareV = shareV;
    }
}
AsianWithLocalR.prototype = new Person();
AsianWithLocalR.prototype.__proto__ = Person.prototype;

var p = new Person(11, 'Meng');

p.tmp = 9;
console.log(p.tmp);
console.log(p.age);
console.log(p.name);

var asian = new Asian();
console.log("instance field can not be inherited by subclass");
console.log(asian.name);

console.log("prototype field can be inherited by subclass");
console.log(asian.shareV)

asian.set_Value(3);
console.log("prototype primitive type of field won't impact each other objects");
var asian1 = new Asian();
asian1.set_Value(4);
console.log("p.shareV:"+p.shareV+" asian.shareV:"+asian.shareV+" asian1.shareV:"+asian1.shareV);

console.log("prototype reference type of field share the same object");
console.log("p.ShareR.value:"+p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value+ " asian1.ShareR.value:" + asian1.ShareR.value);
asian.ShareR.value = 99;
console.log("p.ShareR.value:"+p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value+ " asian1.ShareR.value:" + asian1.ShareR.value);

var asian2 = new AsianWithLocalR();//AsianWithLocalR has its own sharedR, in another word, object find property in its own block first.
console.log("p.ShareR.value:"+p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value+ " asian2.ShareR.value:" + asian2.ShareR.value);




// var arr = [];

// arr[0] = 1;
// arr[1] = 2;
// arr["cat"] = 'meow';

// console.log(arr.length);
// console.log(arr);
