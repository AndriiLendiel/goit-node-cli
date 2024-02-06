const contacts = require('./db/contacts')

const { program } = require("commander");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
const contactList = await contacts.listContacts()
return console.table(contactList);
      break;

    case "get":
const contactById = await contacts.getContactById(id)
return console.log(contactById);
      break;

    case "add":
const addContact = await contacts.addContact({name,phone,email})
return console.log(addContact);
      break;

    case "remove":
const removeContact = await contacts.removeContact(id)
return console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);

// invokeAction({action: 'list'})
// invokeAction({action: 'get', id: 'qdggE76Jtbfd9eWJHrssH'})
// invokeAction({action: 'add', name: 'Andrii', phone: '0954703540', email: '@mail.com'})
// invokeAction({action: 'remove', id: 'IF-qFMjrfRTt5MMB9ManX'})

