import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    
    bank: String,
    number: Number,
    vendor: String,
    Date: { type: Date, default: Date.now }, //Date added
});
accountSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('accounts', accountSchema);




