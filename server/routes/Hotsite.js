const express = require('express');
const router = express.Router();
const {Hotsites} = require("../models");

const hotsiteController = require('../controllers/hotsiteController.js');
 
router.get('/:nomeSite', function(req,res){
    Hotsites.findAll({where:{urlSite: req.params.nomeSite }}).then((HotsitesResult)=>{
        if(HotsitesResult){
            res.send(HotsitesResult);
        }
        else{
            res.status(404).send("Not Found");
        }
    }).catch((err)=>{
        console.log(err)
    })
})

router.post('/addSite', hotsiteController.upload, hotsiteController.addSite);



module.exports = router