import { Client, Databases, Query } from "appwrite";

const DATABASE_ID: string = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_SUBJECTS: string = import.meta.env.VITE_APPWRITE_COLLECTION_SUBJECT_ID;
const COLLECTION_BLOGS: string = import.meta.env.VITE_APPWRITE_COLLECTION_BLOGS_ID;

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const database = new Databases(client);

export async function getAllSubjects() {
    const subjects = await database.listDocuments(DATABASE_ID, COLLECTION_SUBJECTS);
    return subjects;
}

export async function getAllBlogs() {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS);
    return blogs;
}

export async function getBlogById(id: string) {
    const blog = await database.getDocument(DATABASE_ID, COLLECTION_BLOGS, id);
    return blog;
}

export async function getBlogsBySubjectId(id: string) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.equal("subject", id),
    ]);
    return blogs;
}

export async function searchBlogsByTags(tags: string[]) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.contains("tags", tags)
    ]);
    return blogs;
}

export async function searchBlogsByTitle(title: string) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.search("title", title)
    ]);
    return blogs;
}

