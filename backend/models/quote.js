import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  author: { type: String, required: true },
  quote: { type: String, required: true },
});

const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema, 'quote');

export default Quote;
