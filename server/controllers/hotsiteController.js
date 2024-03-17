const db = require('../models');

const multer  = require('multer');
const path    = require('path'); 

const Hotsite = db.Hotsites;


// Logic to create a new hotsite
const addSite = async (req,res)=>{
    let info = {
      urlSite: req.body.urlSite,
      image: req.file.originalname,
      primaryColor: req.body.primaryColor,
      secondColor: req.body.secondColor,
    }
  
    const site = await Hotsite.create(info)
    res.status(200).send(site) 
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


  const upload = multer({
    storage: storage,
    limits: {fileSize: '10000000'},
    fileFilter: (req,file,cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType    = fileTypes.test(file.mimetype)
      const extName     = fileTypes.test(path.extname(file.originalname))  
  
      if (mimeType && extName){
        return cb(null, true)
      }
      cb('Forneça formatos válidos para o arquivo de imagem!')
    }
  }).single('image');





  module.exports = {
    addSite,
    upload   
}
  