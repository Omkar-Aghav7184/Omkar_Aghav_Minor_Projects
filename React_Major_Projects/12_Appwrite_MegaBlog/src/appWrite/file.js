import { Client,Storage,ID } from "appwrite";
import conf from "../config/conf";

/**
 * Service for managing files in Appwrite Storage.
 */
export class FileService{
    client = new Client();
    storage;

    constructor(){
        this.client
               .setEndpoint(conf.appWriteUrl)
               .setProject(conf.appwriteProjectId);
        this.storage =  new Storage(this.client);       
    }

    //Upload a file to Appwrite.
    async uploadFile(file){
        if(!file)
        {
            console.error("uploadFile :: file is required");
            return false;   
        }
        try {
                return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ) 
        } 
        catch (error) {
            console.error("AppWrite Service :: uploadFile :: error",error);
            return false;
        }
    }

    //Delete a file from Appwrite by ID.
    async deleteFile(fileId){
        if (!fileId) {
            console.error("deleteFile :: fileId is required");
            return false;
        }
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error("AppWrite Service :: deleteFile :: error",error);
            return false;
        }
    }
    // Get a preview of a file from Appwrite storage by its ID.
    async getFilePreview(fileId){
        if (!fileId) {
            console.error("getFilePreview :: fileId is required");
            return false;
        }
        try {

            return await this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
            
        } catch (error) {
            console.error("AppWrite Service :: getFilePreview :: error",error);
            return false;
        }
    }
}

const fileService = new FileService();

export default fileService;