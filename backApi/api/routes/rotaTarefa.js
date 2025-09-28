import { Router } from "express";
import { deleteTarefa, getAllTarefas, getTarefasPorId, postTarefa, updateTarefa } from "../controllers/tarefaController.js";

const router = Router();

router.get("/", getAllTarefas);
router.get("/:idtarefa", getTarefasPorId);
router.post("/", postTarefa);
router.put("/:idtarefa", updateTarefa);
router.delete("/:idtarefa", deleteTarefa);

export default router;