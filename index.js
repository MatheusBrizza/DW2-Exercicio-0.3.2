const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
  },
];

const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida === true);
console.log(tarefasConcluidas);

const numeroTarefasNaoConcluidas = tarefas.filter(
  (tarefa) => tarefa.concluida === false
);
console.log(numeroTarefasNaoConcluidas);


const 