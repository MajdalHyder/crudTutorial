var Userdb = require('../model/model');

// create & save new user

exports.create = (req,res)=>{
  //validate request
  if (!req.body){
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }
  // new user
  const user = new Userdb({
    fName:req.body.fName,
    lName:req.body.lName,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status,
  })

  // save user in DB
  user
  .save(user)
  .then(data =>{
    //res.send(data
    res.redirect("http://localhost:8080/add-user");
  })
  .catch(err =>{
    res.status(500).send({
      message: err.message || "Some error occured while creating a create operation"
    });
  });
}


// retreive & return all users / retreive and return single users
exports.find = (req, res) =>{
  if(req.query.id){
      const id = req.query.id;
      Userdb.findById(id)
      .then(data=>{
        if(!data){
          res.status(404).send({message:"Not found id: " + id})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retreiving user with id: " + id})
      })
  }else{
  Userdb.find()
  .then(user =>{
    res.send(user);
  })
  .catch(err =>{
    res.status(500).send({message: err.message|| "Error occured while retreiving user information!"})
  })
}
}

//Update a new identified user by user
// new function = new route for API eg. find single user instead of all
exports.update = (req, res) =>{
  if(!req.body){
    return request.status(400)
    .send({message:"Data to update can not be empty"})
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
  .then(data=>{
    if(!data){
      res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found!`})
    }else{
      res.send(data)
    }
  })
  .catch(err =>{
    res.status(500).send({message:"Error Updte User Info"});
  })
}

exports.delete = (req, res) =>{
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
  .then(data=>{
    if(!data){
      res.status(404).send({message:`Cannot Delete with id ${id}. Wrong id!`})
    }else{
      res.send({
        message:"User deleted successfully!"
      })
    }
  })
  .catch(err=>{
    res.status(500).send({
      message:"Could not delete User with id: " + id
    })
  })
}
