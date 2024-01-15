function Reference(value) {
    this.value = value;
}


function Person(age, name) {
    //Local shareV can not be inherited.
    this.age = age;
    this.name = name;
}
//Inheritance can be implemented by prototype
Person.prototype.shareV = 1;
Person.prototype.ShareR = new Reference(88);
Person.prototype.shareMethod = function () {
    console.log("shareMethod" + " " + this.shareV);
};


function Asian() {
    this.showValue = function () {
        console.log(this.shareV);
    }
}
Asian.prototype.__proto__ = Person.prototype;
//here var asian = new Asian(), object asian's __proto__ is Asian.prototype, Asian.prototype.__proto__ is Person.prototype
//when asian want to access shareV,it will check the field following asian -> (asian.__proto__ = Aisan.prototype) -> (Asian.prototype.__proto__ = Person.prototype)

function AsianWithLocalR() {
    this.ShareR = new Reference(100);
    this.showValue = function () {
        console.log(this.shareV);
    }
}
AsianWithLocalR.prototype.__proto__ = Person.prototype;

//Note: Use below principle to understand above
//protoType belong to Function, it will be created when Funtion is created.
//__proto__ belong to object, when properties can not be found in the object, it wil find it in its __proto__


var p = new Person(11, 'Meng');

p.tmp = 9;
console.log(p.age);
console.log(p.name);
console.log("p.tmp:" + p.tmp);//Can set any new field to a object.
console.log("p.shareV:" + p.shareV);//One function's prototype field can be accessed by object through object -> (p.__proto__ = Persion.prototype)


var asian = new Asian();
console.log("instance field can not be inherited by subclass");
console.log(asian.name);

console.log("prototype field can be inherited by subclass");
console.log(asian.shareV);

console.log("prototype primitive type of field won't impact each other objects and their parent, the sub object should copy the value to its own method stack");
asian.shareV = 3
console.log("asian.shareV:" + asian.shareV);

var asian1 = new Asian();
asian1.shareV = 4;

console.log("p.shareV:" + p.shareV + " asian.shareV:" + asian.shareV + " asian._proto_.shareV:" + asian.__proto__.shareV + " asian1.shareV:" + asian1.shareV + " asian1._proto_.shareV:" + asian1.__proto__.shareV);
asian.shareMethod();
asian1.shareMethod();

console.log("prototype reference type of field share the same object");
console.log("p.ShareR.value:" + p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value + " asian1.ShareR.value:" + asian1.ShareR.value);
console.log("p.ShareR.value:" + p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value + " asian1.ShareR.value:" + asian1.ShareR.value);
asian.ShareR.value = 99;
console.log("p.ShareR.value:" + p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value + " asian1.ShareR.value:" + asian1.ShareR.value);
console.log("p.ShareR.value:" + p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value + " asian1.ShareR.value:" + asian1.ShareR.value);

var asian2 = new AsianWithLocalR();//AsianWithLocalR has its own sharedR, in another word, object find property in its own block first.
console.log("p.ShareR.value:" + p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value + " asian2.ShareR.value:" + asian2.ShareR.value + " asian2.ShareV:" + asian2.shareV);
console.log("p.ShareR.value:" + p.ShareR.value + " asian.ShareR.value:" + asian.ShareR.value + " asian2.ShareR.value:" + asian2.ShareR.value + " asian2.ShareV:" + asian2.shareV);




// var arr = [];

// arr[0] = 1;
// arr[1] = 2;
// arr["cat"] = 'meow';

// console.log(arr.length);
// console.log(arr);
