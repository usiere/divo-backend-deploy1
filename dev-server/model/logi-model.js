import mongoose from 'mongoose';

const logiSchema = new mongoose.Schema({
    
    divo_hand: Boolean,
    self_hand: Boolean,
    vendor: String,
    Date: { type: Date, default: Date.now }, //Date added
});
logiSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('logi', logiSchema);




