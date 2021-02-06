
import Payment from '../../model/payment-model';


export function index(req, res) {
    // FIND ALL NECESSITIES
    Payment.find({}, (error, payments) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ payment: payments });
    })
    console.log(payments)
}



 