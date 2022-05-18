import { app } from "./app";
import { postEstudante } from "./endpoints/postEstudante";

app.post("/estudante", postEstudante)