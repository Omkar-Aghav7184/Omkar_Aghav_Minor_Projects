import {Client,Account,ID} from "appwrite"
import conf from "../config/conf";

export class AuthService{

    client = new Client();
    account;
    
    constructor() {
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                //loginMethod
                return await this.login({email,password});
            }
            else{
                return userAccount;
            } 
        } 
        catch (error) {
            console.log("AppWrite Service:: createAccount :: error",error);
            throw error; // Let caller handle
        }
    }   
    
    async login({email,password}){
        try {
            const user = await this.account.createEmailPasswordSession(email,password);
            return user;
            
        } catch (error) {
            console.log("AppWrite Service:: login :: error",error);
            throw error; // Let caller handle
        }
    }
    async getCurrentUser(){
        try {
            return  await this.account.get();
        } catch (error) {
            console.log("AppWrite Service:: getCurrentUser :: error",error);
        }
        return null;
    }
    async logOut(){
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.log("AppWrite Service:: logout  :: error",error);  
            return false; 
        }
    }
}


const authService = new AuthService();
export default authService;