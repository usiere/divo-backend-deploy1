
import Payment from '../../model/payment-model';



export function show(req, res) {
    // FIND ALL NECESSITIES
    Payment.find({vendor: req.params.user}, (error, payments) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ payments: payments });
       
    })
}



