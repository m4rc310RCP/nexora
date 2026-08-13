import type {
	NexoraPlugin,
} from "@nexora/plugin-sdk";


export class PluginRuntime {

	private readonly plugins =
		new Map<
			string,
			NexoraPlugin
		>();


	register(
		plugin: NexoraPlugin,
	) {

		if (
			this.plugins.has(
				plugin.id,
			)
		) {

			throw new Error(
				`Plugin "${plugin.id}" já registrado.`,
			);

		}


		this.plugins.set(
			plugin.id,
			plugin,
		);

	}


	get(
		id: string,
	) {

		return this.plugins.get(
			id,
		);

	}


	getAll() {

		return [
			...this.plugins.values(),
		];

	}


	async activate(
		id: string,
	) {

		const plugin =
			this.get(
				id,
			);


		if (!plugin) {

			throw new Error(
				`Plugin "${id}" não encontrado.`,
			);

		}


		await plugin.activate({

			pluginId:
				plugin.id,

			log(
				message,
			) {

				console.log(
					`[${plugin.id}] ${message}`,
				);

			},

		});

	}


	async deactivate(
		id: string,
	) {

		const plugin =
			this.get(
				id,
			);


		if (!plugin) {

			return;

		}


		await plugin.deactivate?.();

	}


	unregister(
		id: string,
	) {

		this.plugins.delete(
			id,
		);

	}

}