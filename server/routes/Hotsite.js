const express = require('express');
const router = express.Router();
const db = require('../models');
const {Hotsites} = require("../models");
 
router.get('/:nomeSite', function(req,res){
    Hotsites.findAll({where:{urlSite: req.params.nomeSite }}).then((HotsitesResult)=>{
        res.send(HotsitesResult);
    }).catch((err)=>{
        console.log(err)
    })
})



module.exports = router