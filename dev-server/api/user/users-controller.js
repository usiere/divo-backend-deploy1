
import User from '../../model/user-model';
import moment from 'moment';




export function create(req, res) {
    User.find({email: req.params.vendor}, function(err, data){
      if(err){
          console.log(err); 
          return
      }
  // if there is no user with the email
      if(data.length == 0) {
  
        const account = new Account({            
            divoid: '',
            email: req.body.vendor,
            name: '',
            address: '',
            district: '',
            city: '',
            phone1: '',
            phone2: '',
         });           
      
  
  
        user.save(error => {
            if (error) {
                return console.log(error);
              
            }
            return res.status(201).json({ user: data});
    }) 
  }
  
      if(data.length !== 0) {
        console.log("User already has account registered")
      }
  })
      }

    export function show(req, res) {
        // GET NECESSITY BY ID
        User.findOne({ email: req.params.id}, (error, user) => {
            if (error) {
                return res.status(505).json();
            }
            if (!user) {
                return res.status(200).json({ user: 'none' });

            }
            return res.status(200).json({ user: user });
            
        })
        
    }

    export function update(req, res) {
        User.findOneAndUpdate({email: req.body.email}, req.body)
        .then(function(user){
            res.send(req.body); // do a small check on this
        });
      
        console.log(req.body)
      }
             

            


   
      

    