import axios from 'axios';

class Form {
  constructor(data) {
    this.originalData = data;
  }

  onSuccess(response) {
    return console.info(response.data);
  }

  onFail(err) {
    return console.warn(err);
  }

  submit(url) {
    console.log(this.originalData);

    axios
      .post(url, this.originalData)
        .then(this.onSuccess)
        .catch(this.onFail);
  }
}

export default Form;