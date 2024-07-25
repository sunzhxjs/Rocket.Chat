import { callbacks } from '../../../../lib/callbacks';

callbacks.add(
	'afterSaveMessage',
	async (message) => {
		return message;
	},
	callbacks.priority.HIGH,
	'save-last-visitor-message-timestamp',
);
