import { z } from 'zod';

const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 5;

export const ContactValidationSchema = z.object({
	name: z
		.string()
		.min(MIN_NAME_LENGTH, `Name must be at least ${MIN_NAME_LENGTH} characters`)
		.transform((str) => str.trim()),

	email: z
		.string()
		.email()
		.transform((email) => email.trim()),

	message: z
		.string()
		.min(MIN_MESSAGE_LENGTH, `Message must be at least ${MIN_MESSAGE_LENGTH} characters`)
		.transform((str) => str.trim())
});
