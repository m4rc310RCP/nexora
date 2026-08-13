import {
	createServer,
} from "node:http";

import {
	PluginRuntime,
} from "@nexora/plugin-runtime";

import {
	helloPlugin,
} from "../../../plugins/hello/src/index.js";


const runtime =
	new PluginRuntime();


runtime.register(
	helloPlugin,
);


await runtime.activate(
	"hello",
);


const server =
	createServer(
		(
			request,
			response,
		) => {

			if (
				request.url ===
				"/api/plugins"
			) {

				response.writeHead(
					200,
					{
						"Content-Type":
							"application/json",
					},
				);

				response.end(
					JSON.stringify(
						runtime
							.getAll()
							.map(
								plugin => ({
									id:
										plugin.id,

									name:
										plugin.name,

									version:
										plugin.version,
								}),
							),
					),
				);

				return;

			}


			response.writeHead(
				200,
				{
					"Content-Type":
						"application/json",
				},
			);

			response.end(
				JSON.stringify({
					name:
						"Nexora",

					status:
						"ok",
				}),
			);

		},
	);


server.listen(
	3000,
	() => {

		console.log(
			"Nexora server: http://localhost:3000",
		);

	},
);