import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // if file has been uploaded
        console.log("file is uplaoded", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove temporary file as the upload failed
        return null
    }
}

export {uploadOnCloudinary}