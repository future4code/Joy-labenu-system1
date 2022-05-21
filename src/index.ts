import { app } from "./app";
import { getDocente } from "./endpoints/Docente/getDocente";
import { postDocente } from "./endpoints/Docente/postDocente";
import { putDocenteTurma } from "./endpoints/Docente/putDocenteTurma";
import { postEstudante } from "./endpoints/Estudante/postEstudante";
import { getTurmaAtiva } from "./endpoints/Turma/getTurmaAtiva";
import { postTurma } from "./endpoints/Turma/postTurma";
import { putModuloTurma } from "./endpoints/Turma/putModuloTurma";

app.post("/estudante", postEstudante)

app.post("/turmas", postTurma)
app.put("/turmas", putModuloTurma)
app.get("/turmas",getTurmaAtiva)

app.post("/docente",postDocente)
app.get("/docente",getDocente)
app.put("/docente/",putDocenteTurma)