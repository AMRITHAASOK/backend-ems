//import multer
const multer = require('multer')

//using multer define storage 
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename = `images-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

//filtering uploading files

const fileFilter = (req,file,callback)=>{
    if((file.mimetype==='image/png') || (file.mimetype==='image/jpeg')|| (file.mimetype==='image/jpg')){
        callback(null,true)
    }
    else{
        callback(null,false)
        //error
        return callback(new Error("Only .png, .jpeg and .jpg files are allowed!!!"))
    }
}

//define upload
const upload = multer ({
    storage,
    fileFilter
})

//export upload
module.exports = upload