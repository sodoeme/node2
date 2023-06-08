// a callback is a function that is passed as an argument to another function and is called within that function.
// callback refers to a situation in which multpiple calllabcks are nested due to the nature of asynchronoius functions
// and mainting cpecific order of operations.


function async1(callback) {
    setTimeout(() => {
      console.log(' 1');
      callback();
    }, 111111);
  }
  
  function async2(callback) {
    setTimeout(() => {
      console.log(' 2');
      callback();
    }, 22222);
  }
  
  function async3(callback) {
    setTimeout(() => {
      console.log(' 3');
      callback();
    }, 33333);
  }
  
  // callback hell
  async1(() => {
    asnyc2(() => {
      async3(() => {
        console.log('All operations completed');
      });
    });
  });
  