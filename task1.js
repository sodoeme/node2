// A promise is an object that assures either one of 2 things: succes or failure of an asynchrounous operation
// and its value.

function getUserData(userId) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        const userData = {
          id: userId,
          name: 'John Doe',
          email: 'johndoe@example.com'
        };
  
        if (userData) {
          resolve(userData); // Operation succeeded, pass the data to the resolve function
        } else {
          reject('User not found'); // Operation failed, pass an error message to the reject function
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the promise
  getUserData(123)
    .then(data => {
      console.log('User data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });