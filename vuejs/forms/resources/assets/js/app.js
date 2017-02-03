import Vue from 'vue';

import Form from './core/Form';

// Fiz o import de um component que foi criado
// e utilizo ele dentro da instância do Vuejs
// adicionando-o ao objeto (components)
import Example from './components/Example';

new Vue({
  el: '#app',

  components: { Example },

  data: {
    form: new Form({
      name: '',
      description: ''
    })
  },

  methods: {
    onSubmitForm() {
      let url = 'https://jsonplaceholder.typicode.com/posts';

      const data = {
        name: this.form.name,
        description: this.form.description
      }

      this.form.submit(url);

      // return console.info(data);

      // axios.post(url, data)
      //   .then(response => this.postReturn = response.data)
      //   .catch(error => console.error(error));
    },

    searchBy(event) {
      console.info(event.target);
    }
  }
});