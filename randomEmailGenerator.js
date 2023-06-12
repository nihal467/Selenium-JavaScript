function generateRandomEmail() {
    const length = 10; 
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; 
    let email = '';
  
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      email += characters[randomIndex];
    }
  
    const domain = 'gmail.com'; 
    email += '@' + domain;
  
    return email;
  }
  
  module.exports = generateRandomEmail;
  