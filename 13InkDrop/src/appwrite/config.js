import conf from "../conf/conf";
import { Client, ID, Storage, Query, Account, Databases } from "appwrite";

export class Services {
    client = new Client;
    bucket;
    database;

    constructor(){
        this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId)

        this.database = new Databases(this.client)
        this.bucket = new Storage(this.bucket)
    }

    async createTweet({slug,content , image ,userId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    image,
                    userId,
                    content,
                    likes : 0,
                    status : "active",
                    createdAt: new Date().toISOString()
                }

            )
            
        } catch (error) {
            throw error
            
        }
    }

    async updateTweet(slug,{image,status,content}){
        try {
                return await this.database.updateDocument(
                   conf.appwriteDatabaseId,
                   conf.appwriteCollectionId,
                   slug,
                   {
                      content,
                      image,
                      status,
                   }

                )
        } catch (error) {
            console.log("Appwrite service error in updateTweet: ",error);
            throw error;
        }
    }

    async deleteTweet(slug){
        try {
           return await this.database.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
          ) 
        } catch (error) {
            console.log("Appwrite service error in deletetweet: ",error);
            throw error
            
        }
    }

    async getTweet(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {
            console.log("Apperite error");     
        }
    }

     async getTweets(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite error in getTweets:", error);
            return false;
        }
    }

    

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite error in uploadFile:", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite error in deleteFile:", error);
            return false;
        }
    }


    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    }

};

const services = new Services();

export default services;



