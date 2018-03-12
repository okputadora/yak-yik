const Zone = require('../models/Zone')

module.exports = {
  find: function(params, callback){
    Zone.find(params, function(err, zones){
      if (err){
        callback(err, null)
        return
      }
      callback(null, zones)
    })
  },
  findById: function(id, callback){
    Zone.findById(id, function(err, zone){
      if (err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },
  // update: (resource, id, params) => {},
  create: function(params, callback){
    // if the user has entered multiple zip codes
    // split them into an array
    // eventually we'll need to cover all of the input errors
    // a user might make
    // var zips = params['zipCodes']
    // var zip = zips.split(',')
    // var newZips = []
    // zip.forEach(function(zipCode){
    //   newZips.push(zipCode.trim())
    // })
    // params['zipCodes'] = newZips

    // ^^^ we've commented this out now because originally we weren't getting
    // an array from the user...but after implementing react we ARE getting an array
    Zone.create(params, function(err, zone){
      if (err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  update: function(id, params, callback){
    Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
      if (err){
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },
  delete: function(id, callback){
    Zone.findByIdAndRemove(id, function(err){
      if (err){
        callback(err, null)
        return
      }
      callback(null, null)
    })
  }
}
