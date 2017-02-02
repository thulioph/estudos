//
// Atenção ao data
//
// quando utilizado no componente
// ele é uma função que retorna um objeto
//
// quando utilizado na estância do new Vue
// ele é um objeto

new Vue({
  el: '#app',

  data: {
    name: '',
    email: '',
    postReturn: ''
  },

  methods: {
    onSubmitForm() {
      let url = 'https://jsonplaceholder.typicode.com/posts';

      const data = {
        name: this.name,
        email: this.email
      }

      axios.post(url, data)
        .then(response => this.postReturn = response.data)
        .catch(error => console.error(error));
    },

    searchBy(event) {
      console.info(event.target);
    }
  }
});