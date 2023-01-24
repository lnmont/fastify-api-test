import Fastify from "fastify";
import cors from "@fastify/cors";

import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
// app.register(cors, {
//     origin: ['https://localhost:30000'] // aqui voce coloca o endereco de permissão
// });
app.register(appRoutes);

const port = 3333;
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server running in http://localhost:${port} 🚀`);
  });
