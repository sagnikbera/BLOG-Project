import config from "../config/config";
import { Client, Databases, Query, Storage ,ID } from "appwrite";


export class Service{
    client = new Client();
    database;
    bucket;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.projectId);

        this.account = new Account(this.client);

        this.database = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }


    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            return await this.database.createDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: Error" , error);
            
        }
    }


    async updatePost(slug , {title , content , featuredImage , status}){
        try {
            return await this.database.updateDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: Error" , error);
            
        }
    }

    async ddeletepost(slug){
        try {
            await this.database.deleteDocument(
                config.databaseId,
                config.collectionId,
                slug,
             )  
             return true; 
        } catch (error) {
            console.log("Appwrite service :: deletePost :: Error" , error);
            return false;
        }
    }

    async getpost(slug){
        try {
            return await this.database.getDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: Error" , error);
        }
    }

    async getAllPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.database.listDocuments(
                config.databaseId,
                config.collectionId,
                queries,
            )            
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: Error" , error);
            return false;
        }
    }

    //file upload services


    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.bucketId,
                ID.unique(),
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: Error" , error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                config.bucketId,
                fileID,
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: Error" , error);
            return false;
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.bucketId,
            fileID
        )
    }

}

const service = new Service();
export default service;