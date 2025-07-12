
import mongoose from 'mongoose';
const factorSchema = new mongoose.Schema({
  hospitalName: String,
  city: String,
  factors: {
    factor7: Boolean,
    factor8: Boolean,
    factor9: Boolean,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Factor || mongoose.model('Factor', factorSchema);
