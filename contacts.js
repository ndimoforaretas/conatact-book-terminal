// Import the readline-sync module for interactive terminal input
import readlineSync from "readline-sync";

// ASCII art for the application title
const appTitle = `
===============================
  ____            _             _
 / ___|___  _ __ | |_ __ _  ___| |_
| |   / _ \\| '_ \\| __/ _\` |/ __| __|
| |__| (_) | | | | || (_| | (__| |_
 \\____\\___/|_| |_|\\__\\__,_|\\___|\\__|
            | __ )  ___   ___ | | __
            |  _ \\ / _ \\ / _ \\| |/ /
            | |_) | (_) | (_) |   <
            |____/ \\___/ \\___/|_|\\_\\

===============================
`;

console.log(appTitle);
// Function to display the main menu
function showMenu() {
  console.log("\n🤖 Action Menu:");
  console.log("--------------------------------\n");
  console.log("1. View Contacts 👀");
  console.log("2. Add Contact 📝");
  console.log("3. Edit Contact 🖋️");
  console.log("4. Delete Contact ❌");
  console.log("5. Exit 🚪\n");
}

// Function to view all contacts
function viewContacts(contactList) {
  console.log("--------------------------------\n");
  console.log("\n🤖 Your Contacts:");
  if (contactList.length === 0) {
    console.log("🤔 There are currently no items in contacts list.");
    console.log("--------------------------------\n");
  } else {
    // Loop through the contact list and display each contact in a tabular format
    console.log("================================");
    console.log("No. | Name | Phone");
    console.log("--------------------");
    contactList.forEach((contact, index) => {
      console.log(`${index + 1} | ${contact.name} | ${contact.phone}`);
    });
    console.log("--------------------------------\n");
  }
}

// Function to add a new contact
function addContact(contactList) {
  const name = readlineSync.question("\n➕ Enter the name: ");
  const phone = readlineSync.question("➕ Enter the phone number: ");
  contactList.push({ name, phone });
  console.log("========================================\n");
  console.log(
    `Contact "${name}" with phone number "${phone}" has been added to your contacts.`
  );
  console.log("========================================\n");
}

// Function to edit an existing contact
function editContact(contactList) {
  const index = parseInt(
    readlineSync.question(
      "\nEnter the number of the contact you want to edit: "
    ),
    10
  );
  if (index > 0 && index <= contactList.length) {
    const name = readlineSync.question("Enter the new name: ");
    const phone = readlineSync.question("Enter the new phone number: ");
    contactList[index - 1] = { name, phone };
    console.log("========================================\n");
    console.log(`Contact ${index} has been updated.\n`);
    console.log("========================================\n");
  } else {
    console.log("❗️ Invalid contact number.\n");
  }
}

// Function to delete a contact
function deleteContact(contactList) {
  const index = parseInt(
    readlineSync.question(
      "\nEnter the number of the contact you want to delete: "
    ),
    10
  );
  if (index > 0 && index <= contactList.length) {
    const deletedContact = contactList.splice(index - 1, 1);
    console.log("========================================\n");
    console.log(`Contact "${deletedContact[0].name}" has been deleted.\n`);
    console.log("========================================\n");
  } else {
    console.log("❗️ Invalid contact number.\n");
  }
}

// Main function to run the Contact Book
function startContactBook() {
  const contactList = [];
  let isRunning = true;

  while (isRunning) {
    showMenu();
    console.log("--------------------");
    const choice = readlineSync.question("Choose an option: ");

    switch (choice) {
      case "1":
        viewContacts(contactList);
        break;
      case "2":
        addContact(contactList);
        break;
      case "3":
        editContact(contactList);
        break;
      case "4":
        deleteContact(contactList);
        break;
      case "5":
        isRunning = false;
        console.log("\nExiting Contact Book.\n");
        console.log("\nThank you for using the Contact Book! 📇\n");
        break;
      default:
        console.log("\n❗️ Invalid option.\n");
        console.log("\n❗️Please choose a number between 1 and 5.\n");
    }
  }
}

// Start the Contact Book application
startContactBook();
