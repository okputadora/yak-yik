var mongoose = require('mongoose')

var ZoneSchema = mongoose.Schema({
  name: {type:String, default:''},
  zipCodes: {type:Array, default:[]},
  comments: {type:Number, default:0},
  timestamp: {type: Date, default:Date.now}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)
