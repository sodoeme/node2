// async/await is more concies and readable way of handling async ConvolverNode. It allows writing async code in a
// synchronous looking way.ConvolverNode
// pros:
// - readbility
// - straigth forward error handling
// - sequntial execution
// cons:
// - modern js enviorment


async function fetchUserData(userId) {
    try {
      const response = await fetch("url");
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  // Using the async function
  fetchUserData(123)
    .then(userData => {
      console.log('User data:', userData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  