import { Client, Databases, Query, ID } from "appwrite";

const APPWRITE_ENDPOINT: string = import.meta.env.VITE_APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID: string = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID: string = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_SUBJECTS: string = import.meta.env.VITE_APPWRITE_COLLECTION_SUBJECT_ID;
const COLLECTION_BLOGS: string = import.meta.env.VITE_APPWRITE_COLLECTION_BLOGS_ID;
const COLLECTION_ABOUT: string = import.meta.env.VITE_APPWRITE_COLLECTION_ABOUT_ID;

export const client = new Client();

client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

export const database = new Databases(client);

export async function getAllSubjects() {
    const subjects = await database.listDocuments(DATABASE_ID, COLLECTION_SUBJECTS, [Query.orderAsc("name")]);
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
        Query.select(["$createdAt", "$id", "title", "tags", "subject.$id"]),
    ]);
    return blogs;
}

export async function searchBlogByTag(tag: string) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.search("tags", tag)
    ]);
    return blogs;
}

export async function searchBlogsByTitle(title: string) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.search("title", title)
    ]);
    return blogs;
}

export function addViewToBlog(id: string, newViews: number) {
    database.updateDocument(DATABASE_ID, COLLECTION_BLOGS, id, { views: newViews });
}

export async function submitAboutUsForm(name: string, subject: string, whenDoYouNeedIt: string, nameOfCaseWithCitation: string, additionalComments: string) {
    const aboutUs = await database.createDocument(DATABASE_ID, COLLECTION_ABOUT, ID.unique(), {
        name: name,
        subject: subject,
        whenDoYouNeedIt: whenDoYouNeedIt,
        nameOfCaseWithCitation: nameOfCaseWithCitation,
        additionalComments: additionalComments
    });
    return aboutUs;
}