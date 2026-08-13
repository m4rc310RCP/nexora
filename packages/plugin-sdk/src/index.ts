export interface PluginContext {

	readonly pluginId: string;

	log(
		message: string,
	): void;

}


export interface NexoraPlugin {

	id: string;

	name: string;

	version: string;

	activate(
		context: PluginContext,
	): Promise<void> | void;

	deactivate?(): Promise<void> | void;

}