var inquirer = require("inquirer");
const fs = require("fs").promises;

console.log("Hi, welcome to the password manager");

const secretPassword = "abc";

var questions = [
  {
    type: "input",
    name: "masterPassword",
    message: "Enter your master password",
  },
];

async function validateAccess() {
  const { masterPassword } = await inquirer.prompt(questions);

  const passwordSafeJSON = await fs.readFile(
    "./db.json",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

  const passwordSafe = JSON.parse(passwordSafeJSON);

  if (masterPassword !== secretPassword) {
    console.error("You are a intruder");
    validateAccess();
    return;
  }

  const args = process.argv.slice(2);
  const passwordName = args[0];
  console.log(`You want to know the password of ${passwordName}?`);

  const password = passwordSafe[passwordName];
  if (password) {
    console.log(`Password is ${password}`);
  } else {
    console.log("unknown password");
  }
}
validateAccess();

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
