import type { Actions, PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';

import type { AlertMessage } from '$lib/types';
import { ContactValidationSchema } from '$lib/validations/contactValidationSchema';

export const load = (async () => {
	return { contactForm: superValidate(ContactValidationSchema) };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const contactForm = await superValidate<typeof ContactValidationSchema, AlertMessage>(
			request,
			ContactValidationSchema
		);

		if (!contactForm.valid) {
			return message(contactForm, {
				alertType: 'error',
				alertText: 'Please correct the errors below and try again.'
			});
		}

		return message(contactForm, {
			alertType: 'success',
			alertText: 'Your message has been sent. Thank you!'
		});
	}
};
