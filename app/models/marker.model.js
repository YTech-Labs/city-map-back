// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating buildings schema
const markersSchema = new Schema({
	"geometry": {
		type: Object,
		required: true,
	},
	"properties": {
		type: Object,
		required: true,
	},
	"type": {
		type: String,
		required: true,
	}
}, { timestamps: true });

const Marker = mongoose.model('Marker', markersSchema);

// export Object schema as a module;
module.exports = Marker;