
import Account from '../../model/account-model';



export function show(req, res) {
  Account.find({vendor: req.params.vendor}, (error, account) => {
      if (error) {
          return res.status(500).json();
      }
      console.log("this is vendors bank account" + account)
      return res.status(200).json({ account : account});
      
     
  })

}

export function update(req, res) {
  Account.findOneAndUpdate({vendor: req.params.vendor}, req.body)
  .then(function(account){
      res.send(req.body); // do a small check on this
  });

  console.log(req.body)
}

export function create(req, res) {
  console.log(req.body)
  // finding the available documents saved 
  Account.find({vendor: req.body.vendor}, function(err, data){
    if(err){
        console.log(err); 
        return
    }

    console.log(data.length + 'this is data plus length')
    if(data.length == 0) {

      const account = new Account({            
        bank : '',
        number : '',
        vendor: req.body.vendor
       });           
    


      account.save(error => {
          if (error) {
              return console.log(error);
            
          }
          return res.status(201).json({ account: data});
  }) 
}

    if(data.length !== 0) {
      console.log("Vendors bank details are already saved")
    }
})
    }
