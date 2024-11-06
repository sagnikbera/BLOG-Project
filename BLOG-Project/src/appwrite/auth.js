import { Account, Client, ID } from "appwrite";
import config from "../config/config";


export class AuthService {
    client  = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.projectId);

        this.account = new Account(this.client)
    }


    async creatACoount({email, password , name}) {
        try {
            const userAcoount = await this.account.create(ID.unique() , email , password , name);

            if(userAcoount){
                //call another method
                return this.login({email , password});
            }else{
                return userAcoount;
            }

        } catch (error) {
            throw new Error("Error creating account");
        }
    }


    async login({email , password}){
        try {
            return await this.account.createEmailPasswordSession(email , password);
        } catch (error) {
            throw new Error("Error logging in");
            
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: Error" , error);
            
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: Error" , error);
            
        }
    }
}

const authService = new AuthService();

export default authService;