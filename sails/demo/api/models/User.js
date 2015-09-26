/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nome:{
      type: "string",
      required: true,
      minLength: 2
    },
    email:{
      type: "string",
      required: "true",
      unique: true
    },
    telefone:{
      type: "string",
      required: true,
      minLength: 2
    },
    mensagem:{
      type: "string",
      required: true
    }
  }
};

