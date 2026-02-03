import multer from "multer";
import {v4 as uuid} from "uuid";
import path from "path";

const storage = multer.diskStorage({
    destination:'src/uploads',
    filename:(req,file,cb)=>{
        const ext = path.extname(file.originalname);
        cb(null, `${uuid()}${ext}`);
    }
});

export const upload = multer({
    storage,
    limits:{fileSize:2 * 1024 * 1024} // 2MB
});