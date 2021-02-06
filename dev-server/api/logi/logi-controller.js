
import Logi from '../../model/logi-model';



export function show(req, res) {
  Logi.find({vendor: req.params.vendor}, (error, logi) => {
      if (error) {
          return res.status(500).json();
      }
      console.log("this is logis" + logi)
      return res.status(200).json({ logis: logi});
      
     
  })

}

export function update(req, res) {
  Logi.findOneAndUpdate({vendor: req.params.vendor}, req.body)
  .then(function(logis){
      res.send(req.body); // do a small check on this
  });

  console.log(req.body)
}

export function create(req, res) {
  console.log(req.body)
  // finding the available documents saved 
  Logi.find({vendor: req.body.vendor}, function(err, data){
    if(err){
        console.log(err); 
        return
    }

    console.log(data.length + 'this is data plus length')
    if(data.length == 0) {

      const logi = new Logi({            
        divo_hand : true,
        self_hand : false,
        vendor: req.body.vendor
       });           
    


      logi.save(error => {
          if (error) {
              return console.log(error);
            
          }
          return res.status(201).json({ logis: data});
  }) 
}

    if(data.length !== 0) {
      console.log("Vendor email has been registered for logistics")
    }
})
    }
