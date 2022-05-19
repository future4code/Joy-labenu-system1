import { app } from "./app";
import { postEstudante } from "./endpoints/Estudante/postEstudante";

app.post("/estudante", postEstudante)