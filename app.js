var inquirer = require("inquirer");

console.log("Hi, welcome to the password manager");

const secretPassword = "abc";

var questions = [
  {
    type: "input",
    name: "name",
    message: "Enter your Name",
  },
  {
    type: "input",
    name: "masterPassword",
    message: "Enter your master password",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { masterPassword } = answers;

  if (masterPassword === secretPassword) {
    console.log("You are right and will get access");
  } else {
    console.error("You are a intruder");
  }
});

// // const args = process.argv.slice(2);
// // const passwordName = args[0];
// // console.log(`You want to know the password of ${passwordName}? Please enter the right access key:`);

// // if (passwordName === "Lisa") {
// //   console.log("Password is München");
// // } else {
// //   console.log("Unknown password");
// // }

// var questions = [
//   {
//     type: "input",
//     name: "name",
//     message: "Enter your name",
//     validate: function (input) {
//       var correct = input.match("Franzi");
//       if (correct) {
//         return "This is the rigth answer";
//       }
//       {
//         return "You are a intruder";
//       }
//     },
//   },
// ];
