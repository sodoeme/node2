// In regular functions the "this" keyword is binded dynamically. refering to the
// current instance of the object/class

// for arrow functions the this keyword determined by its scope

const object = {
    name: "love",
    hello: function(){
        console.log(this.name)
    }
}




const object2 = {
    name: "love",
    hello: function(){
        const innerFunction = () => {
            console.log(this.name);
          };
      
          innerFunction();
    }
}