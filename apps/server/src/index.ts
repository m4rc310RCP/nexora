import {
	createServer,
} from "node:http";


const server =
	createServer(
		(
			request,
			response,
		) => {

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