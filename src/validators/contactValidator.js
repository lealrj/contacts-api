const { z } = require('zod');

const contactSchema = z.object({
 name: z.string().max(50),
 email: z.string().toLowerCase().email(),
 phone: z.string(),
 favorite: z.boolean()
});

module.exports = contactSchema;