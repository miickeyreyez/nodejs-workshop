import mongoose from 'mongoose';

const { Schema } = mongoose;

const PokemonSchema = Schema({
  _id: Schema.ObjectId,
  url_image: String,
  type: Array,
  id: Number,
  name: [{
    japanese: String,
    chinese: String,
    english: String,
  }],
});

module.exports = mongoose.model('Pokemon', PokemonSchema, 'pokemon');
