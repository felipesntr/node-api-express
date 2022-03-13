import express from "express";
import cors from "cors";

import router from "./routes/post.routes";
import environment from "./environment";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.use((_req, res) => res.status(404));

app.listen(environment.port || 3334, () => {
  console.log("Server running...");
});
