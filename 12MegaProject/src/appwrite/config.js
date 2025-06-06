import conf from "../conf/conf";
import { Client, ID , Query , Storage , Databases } from "appwrite";

export class Services {
    client =  new Client();
    bucket;
    databases;

    constructor(){
        this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        
        this.bucket = new Storage(this.client);
    }

    async createPost({title , slug, content, featuredImage ,status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    userId,
                    featuredImage,
                }
            )
            
        } catch (error) {
            console.log("Apprite error in create post: " , error);
            throw error;
        }
    }

    async updatePost (slug ,{title , content , featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage,
                }
            )
            
        } catch (error) {
            console.log("Appwrite error in update post : ", error);
            throw error;
            
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite error in deletePost : ",error);
            throw error;          
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite error in getpost: ", error);
            throw error;         
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite error in getPosts: ", error); 
            return false;          
        }
    }

    // FILE UPLOAD SERVICES

    async uploadFile(file){
        try {
            return await this.bucket.updateFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log("Appwrite error in fileupload: ",error);
            return false;         
        }
    }

     async DeleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                ID.unique(),
                fileId,
            )

            return true;
            
        } catch (error) {
            console.log("Appwrite error in delete file: ",error);
            return false;         
        }
    }

    getFilePreview (fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }

}

const services = new Services();

export default services;