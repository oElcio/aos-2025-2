import { v4 as uuidV4 } from "uuid";
import tarefas from "../models/tarefa.js";

const getAllTarefas = (req, res) => {
  res.send({
    data: tarefas,
  });
};

const getTarefasPorId = (req, res) => {
  const { idtarefa } = req.params;

  const tarefaRes = tarefas.find((e) => e.id === idtarefa);
  if (!tarefaRes) {
    return res.status(404).send({
      error: "Tarefa não encontrada",
    });
  }
  res.status(200).send({
    data: tarefaRes,
  });
};

const postTarefa = (req, res) => {
  const { descricao, completa } = req.body;

  if (!descricao || typeof descricao !== "string") {
    res
      .status(400)
      .send({ message: "A descrição é obrigatória e deve ser uma string" });
    return;
  }

  const novaTarefa = {
    id: uuidV4(),
    descricao: descricao,
    completa: completa ?? false,
  };

  tarefas.push(novaTarefa);
  res.status(201).send({
    message: "Tarefa criada com sucesso",
    data: novaTarefa,
  });
};

const updateTarefa = (req, res) => {
  const { idtarefa } = req.params;
  const { descricao, completa } = req.body;

  if (!idtarefa) {
    return res.status(404).send({ message: "Forneça o ID da tarefa" });
  }

  const tarefaRes = tarefas.find((e) => e.id === idtarefa);
  if (!tarefaRes) {
    return res.status(404).send({ error: "Tarefa não encontrada" });
  }

  if (descricao !== undefined) {
    if (typeof descricao !== "string") {
      return res.status(400).send({ message: "A descrição deve ser uma string" });
    }
    tarefaRes.descricao = descricao;
  }

  if (completa !== undefined) {
    if (typeof completa !== "boolean") {
      return res.status(400).send({ message: "Completed deve ser um booleano" });
    }
    tarefaRes.completa = completa;
  }

  return res.status(200).send({
    message: "Tarefa atualizada com sucesso",
    data: tarefaRes,
  });
};

const deleteTarefa = (req, res) => {
  const { idtarefa } = req.params;

  const tarefaResIndex = tarefas.findIndex((e) => e.id === idtarefa);

  if (tarefaResIndex !== -1) {
    tarefas.splice(tarefaResIndex, 1);
    res.status(200).send({
      message: "Tarefa deletada com sucesso!",
    });
  } else {
    res.status(404).send({
      message: "Erro! Tarefa não encontrada.",
    });
  }
};

export { deleteTarefa, getAllTarefas, getTarefasPorId, postTarefa, updateTarefa };

