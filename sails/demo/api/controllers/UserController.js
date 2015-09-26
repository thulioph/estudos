/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addConv:function (req,res) {

    var data_from_client = req.params.all();

    if(req.isSocket && req.method === 'POST'){

      // This is the message from connected client
      // So add new conversation

    }
    else if(req.isSocket){
      // subscribe client to model changes
    }
  }

};

