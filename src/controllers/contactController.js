const Contact = require('../models/Contact');
const contactSchema = require('../validators/contactValidator');

async function findContactByName(name) {
 return Contact.findOne({
  where: {
   name
  }
 });
}

async function list(req, res) {
 const contacts = await Contact.findAll();
 res.json(contacts);
}

async function getByName(req, res) {
 const { name } = req.params;

 const contact = await findContactByName(name)

 if (!contact) {
  return res.status(404).json({
   error: {
    message: 'Contact not found'
   }
  });
 }

 return res.status(200).json(contact)
}

async function create(req, res) {
 const result = contactSchema.safeParse(req.body);
 if (!result.success) {
  return res.status(400).json({
   error: {
    message: 'Invalid post data',
    details: result.error.issues
   }
  });
 }
 const { name, email, phone, favorite } = result.data;
 const contact = await Contact.create({
  name,
  email,
  phone,
  favorite
 });
 res.status(201).json(contact);
}

async function remove(req, res) {
 const { name } = req.params;

 const contact = await findContactByName(name);

 if (!contact) {
  return res.status(404).json({ error: 'Contact not found' });
 }

 await contact.destroy();
 res.status(204).send();
}

module.exports = {
 list,
 create,
 getByName,
 remove
}