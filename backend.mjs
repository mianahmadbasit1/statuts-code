import express from 'express'
import  cors from 'cors';
import { nanoid } from 'nanoid';
const app=express();
app.use(express.json());
app.use(cors());

console.log(nanoid());

let userBase = [];
app.post("/signup", (req, res) => {
  
    userBase.push(newUser);
    res.status(201).send("user is created");
  });

app.post("/login",(req,res)=>{
    let body = req.body;
    if ( !body.email || !body.password) {
      res.status(400).send(`required fields missing, request example:
      {
          
          "email":"ahmad@gmail.com",
          "pw":"123"
      }`
      );
      return;


    }

    let isFound=false;

    for(let i=0;i<userBase.length; i++)
    {
        if(userBase[i].email=== body.email  ){
          if( userBase[i].password === body.password){
            res.status(200).send({
                firstName: userBase[i].firstName,
                lastName: userBase[i].lastName,
                email:userBase[i].email,
                message:"login successfull",
                token:"some unique token"
            })
            
            // break;
            return;
        } else{
          res.status(404).send({
        message:"inncorrect pw"
          })
          return;
        }
        break;
    }
  }
})








const port = process.env.PORT || 5000;

app.listen(port, () => {
    
    console.log(`Server running on port ${port} 🔥`)});

