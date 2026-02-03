

export const uploadSingle = (req,res)=>{
    res.status(201).json({
        success:true,
        message:"File uploaded successfully",
        file: req.file
    });
};