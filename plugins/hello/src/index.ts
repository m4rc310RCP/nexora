import type {
	NexoraPlugin,
} from "@nexora/plugin-sdk";


export const helloPlugin:
	NexoraPlugin = {

	id:
		"hello",

	name:
		"Hello World",

	version:
		"1.0.0",


	activate(
		context,
	) {

		context.log(
			"Plugin Hello ativado!",
		);

	},


	deactivate() {

		console.log(
			"Plugin Hello desativado!",
		);

	},

};
