
// clean code chapter 2 Meaningfull names

//example 1
//bad code 
let d = new Date(); 

//clean code
let currentTimestamp = new Date();

//example 2
//bad code
function handle() {
  // code to send email
}

//clean code
function sendWelcomeEmailToUser() {
  // code to send email
}