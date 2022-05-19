import { app } from "./app";
import { postEstudante } from "./endpoints/Estudante/postEstudante";
import { postTurma } from "./endpoints/Turma/postTurma";
import { putModuloTurma } from "./endpoints/Turma/putModuloTurma";

app.post("/estudante", postEstudante)
app.post("/turmas", postTurma)
app.put("/turmas", putModuloTurma)