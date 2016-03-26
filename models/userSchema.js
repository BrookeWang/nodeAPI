var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
		name:String,
		password: String,
		user_id: Number,
		completed:Boolean,
		updated_at:{type:Date, default:Date.now},
});

module.exports = mongoose.model('userschema', userSchema);