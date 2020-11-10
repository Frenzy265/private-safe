console.log("Hello Franzi!");

const args = process.argv.slice(2);
const passwordName = args[0];
console.log(`You want to know the password of ${passwordName}?`);

if (passwordName === "Lisa") {
  console.log("Password is München");
} else {
  console.log("Unknown password");
}
