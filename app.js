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

  const newPasswordValue = args[1];

  if (newPasswordValue) {
    passwordSafe[passwordName] = newPasswordValue;
    fs.writeFile("./db.json", JSON.stringify(passwordSafe, null, 2));
    console.log("Your password was successfully changed 🥳");
  } else {
    console.log(`You want to know the password of ${passwordName}?`);

    const password = passwordSafe[passwordName];
    if (password) {
      console.log(`Password is ${password}`);
    } else {
      console.log("unknown password");
    }
  }
}
validateAccess();

// {
//   "wifi": "123",
//   "bank": "456",
//   "pin": "789"
// }
