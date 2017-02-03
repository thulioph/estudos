import Vue from 'vue';
import axios from 'axios';

import Form from './core/Form';

new Vue({
  el: '#app',

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
        name: this.name,
        email: this.email
      }

      return console.info(data);

      // axios.post(url, data)
      //   .then(response => this.postReturn = response.data)
      //   .catch(error => console.error(error));
    },

    searchBy(event) {
      console.info(event.target);
    }
  }
});