const express = require('express')
const router = express.Router()
var controllers = require('../controllers/')
router.get('/:resource', function(req, res, next){
  var resource = req.params.resource
  var controller = controllers[resource]
  if (controller == null){
    res.json({
      confirmation: 'fail',
      error: 'invalid resource'
    })
    return
  }
  controller.find(req.query, function(err, results){
    if (err){
      res.json({
        confirmation: 'fail',
        error: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })

})

router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource
  var id = req.params.id
  console.log(id)
  var controller = controllers[resource]
  if (controller == null){
    res.json({
      confirmation: 'fail',
      error: 'invalid resource'
    })
    return
  }
  controller.findById(id, function(err, result){
    if (err){
      res.json({
        confirmation: 'error',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

router.post('/:resource', function(req, res, next){
  var resource = req.params.resource
  var params = req.body
  console.log("PARAMS "+JSON.stringify(params))
  console.log(resource)
  var controller = controllers[resource]
  if (controller == null){
    res.json({
      confirmation: 'error',
      error: 'invalid resource'
    })
    return
  }
  controller.create(params, function(err, result){
    if (err){
      res.json({
        confirmation: 'error',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})
router.put('/:resource/:id', function(req, res, next){
  var resource = req.params.resource
  var id = req.params.id
  var params = req.body
  var controller = controllers[resource]
  if (controller == null){
    res.json({
      confirmation: 'error',
      message: 'invalid resource'
    })
    return
  }
  controller.update(id, params, function(err, result){
    if (err){
      res.json({
        confirmation: 'error',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})
router.delete("/:resource/:id", function(req, res, next){
  var resource = req.params.resource
  var id = req.params.id
  var params = req.body
  var controller = controllers[resource]
  if (controller == null){
    res.json({
      confirmation: 'error',
      message: 'invalid resource'
    })
    return
  }
  controller.delete(id, params, function(err, result){
    if (err){
      res.json({
        confirmation: 'error',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

module.exports = router
