const { z } = require('zod');

const contactSchema = z.object({
 name: z.string().trim().min(1).max(50),
 email: z.string().trim().toLowerCase().email(),
 phone: z.string().regex(/^[0-9]{10,11}$/),
 favorite: z.boolean().optional().default(false)
});

module.exports = contactSchema;