// fiz algum request e tive isso como retorno:
let tasksArray = [
  { description: 'Lavar os pratos', completed: true },
  { description: 'Comprar pão', completed: false },
  { description: 'Jogar o lixo', completed: false },
  { description: 'Forrar a cama', completed: true },
  { description: 'Tomar banho', completed: true },
  { description: 'Comer', completed: false }
];

//
//
Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">
        {{ task.description }}
      </task>
    </ul>
    `,

  data() {
    return {
      tasks: tasksArray
    }
  }
});


// <task></task>
// o mínimo para se criar um
// view componente (global)
// o <slot></slot> permite
// obter o que foi digitado dentro da
// tag do componete
Vue.component('task', {
  template: `
    <li>
      <slot></slot>
    </li>
  `
});

// local onde o vue vai "atuar"
new Vue({
  el: '#root',

  data: {
    tasks_array: tasksArray,
    isCompleted: false
  },

  methods: {
    toggleCompleted() {
        return this.isCompleted = !this.isCompleted;
    }
  }
});