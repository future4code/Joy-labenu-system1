import { app } from "./app";
import { getDocente } from "./endpoints/Docente/getDocente";
import { getDocentesPoo } from "./endpoints/Docente/getDocentesPoo";
import { postDocente } from "./endpoints/Docente/postDocente";
import { putDocenteTurma } from "./endpoints/Docente/putDocenteTurma";
import { getEstudante } from "./endpoints/Estudante/getEstudante";
import { postEstudante } from "./endpoints/Estudante/postEstudante";
import { putEstudante } from "./endpoints/Estudante/putEstudante";
import { getTurmaAtiva } from "./endpoints/Turma/getTurmaAtiva";
import { postTurma } from "./endpoints/Turma/postTurma";
import { putModuloTurma } from "./endpoints/Turma/putModuloTurma";

//Endpoints de Estudante
app.get("/estudante/:nome",getEstudante)
app.post("/estudante", postEstudante)
app.put("/estudante",putEstudante)

//Endpoints de Turma
app.get("/turmas",getTurmaAtiva)
app.post("/turmas", postTurma)
app.put("/turmas", putModuloTurma)

//Endpoints de Docente
app.get("/docente",getDocente)
app.get("/docente/poo",getDocentesPoo)
app.post("/docente",postDocente)
app.put("/docente/",putDocenteTurma)
