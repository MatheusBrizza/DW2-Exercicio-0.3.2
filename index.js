const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
];

const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida === true);
console.log(tarefasConcluidas);

const numeroTarefasNaoConcluidas = tarefas.filter(
  (tarefa) => tarefa.concluida === false
);
console.log(numeroTarefasNaoConcluidas.length);

const tarefasCriadasMenosUmMes = tarefas
  .filter((tarefa) => tarefa.concluida === true)
  .some((tarefa) => tarefa.dias < 30);
console.log(tarefasCriadasMenosUmMes);
