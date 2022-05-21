import { app } from "./app";
import { getDocente } from "./endpoints/Docente/getDocente";
import { postDocente } from "./endpoints/Docente/postDocente";
import { putDocenteTurma } from "./endpoints/Docente/putDocenteTurma";
import { postEstudante } from "./endpoints/Estudante/postEstudante";
import { getTurmaAtiva } from "./endpoints/Turma/getTurmaAtiva";
import { postTurma } from "./endpoints/Turma/postTurma";
import { putModuloTurma } from "./endpoints/Turma/putModuloTurma";

//Endpoints de Estudante
app.post("/estudante", postEstudante)

//Endpoints de Turma
app.get("/turmas",getTurmaAtiva)
app.post("/turmas", postTurma)
app.put("/turmas", putModuloTurma)

//Endpoints de Docente
app.get("/docente",getDocente)
app.post("/docente",postDocente)
app.put("/docente/",putDocenteTurma)