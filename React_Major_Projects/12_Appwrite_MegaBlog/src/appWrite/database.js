import {Client,Databases,Query} from "appwrite"
import conf from "../config/conf"

/**
 * Service class for handling database operations with Appwrite.
 * Provides CRUD methods for managing blog posts.
 */
export class DataBaseService{
    client = new Client();
    databases;

    constructor(){
        this.client
                   .setEndpoint(conf.appWriteUrl)
                   .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    //create New Post
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } 
        catch (error) {
            console.error("AppWrite Service:: createPost :: error",error);
            return null;
        }
    }

    //update existing post
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )  
        } 
        catch (error) {
            console.error("AppWrite Service:: updatePost :: error",error);
            return null;
        }
    }

    //delete post using slug
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.error("Appwrite Service :: deletePost :: error ",error);
            return null;
        }
    }

    //get post with specific Slug/ID
    async getPostByID(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )  
        } 
        catch (error) {
            console.error("AppWrite Service :: getPost :: error",error);
            return null;
        }
    }

    //get all active status posts
    async getAllPosts(status="active"){
        try {
            const response =  await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("status",[status])
                ]
            )
            return response.documents; // only return docs
        } 
        catch (error) {
            console.error("AppWrite Service :: getAllPosts :: error",error);
            return null;
        }
    }

}


const dataBaseService = new DataBaseService();
export default  dataBaseService;