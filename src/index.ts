import { app } from "./app";
import { postEstudante } from "./endpoints/Estudante/postEstudante";
import { postTurma } from "./endpoints/Turma/postTurma";

app.post("/estudante", postEstudante)
app.post("/turmas", postTurma)