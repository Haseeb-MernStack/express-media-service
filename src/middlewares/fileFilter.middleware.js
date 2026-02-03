

export const imageOnly = (req,file, cb)=> {
    if(file.mimetype.startsWith("image/")) cb(null,true);
    else cb(new Error("Only image files allowed"), false);
};