const path = require('path');
const Details = require('../model/expenses');

exports.AddDetails = async (req,res,next)=>{
    try {
      const expense = req.body.expense;
      const catagary = req.body.catagary;
      const description = req.body.description;
      
  
      
      const data = await Details.create({
          expense : expense,
          catagary : catagary,
          description : description
      })
  
      res.status(201).json({ newUserDetail: data });
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
  }
}


exports.getDetails=async (req,res,next)=>{
    try{
        const Users = await Details.findAll();
       
        res.status(200).json({allUsers : Users});
    }catch(err) {
        console.log(err);
        res.status(500).json({error : err})
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await Details.findAll({where: {id:id}});
        if(!user){
            console.log('This user does not exist.');
            return res.sendStatus(400);
        }
        await Details.destroy({where: {id:id}});
        res.sendStatus(200);
        }catch(err){
            console.log(err);
            res.status(500).json({error : err})
        }
}
exports.editUser = async (req, res, next) => {
    try{
        
        const updatedexpense= req.body.expense;
        const updatedcatagary = req.body.catagary;
        const updateddescription = req.body.description;
        const id = req.params.id;
       let user = await Details.update(
            {
               expense : updatedexpense,
                catagary:updatedcatagary,
                description:updateddescription
            },
            {where:{id:id}})
            console.log("user",user);
  res.status(201).json({user});
    }catch(err){
        console.log(err);
        res.status(500).json({error : err})
    }
}
