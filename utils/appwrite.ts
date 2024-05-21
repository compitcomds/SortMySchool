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
    const subjects = await database.listDocuments(DATABASE_ID, COLLECTION_SUBJECTS, [Query.orderAsc("name"), Query.limit(5000)]);
    return subjects;
}

export async function getSubjectById(id: string) {
    const subject = await database.getDocument(DATABASE_ID, COLLECTION_SUBJECTS, id)
    return subject
}

export async function getAllBlogs() {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [Query.limit(5000)]);
    return blogs;
}

export async function getBlogById(id: string) {
    const blog = await database.getDocument(DATABASE_ID, COLLECTION_BLOGS, id);
    return blog;
}

export async function getBlogBySlug(slug: string) {
    const blog = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.search("slug", slug),
        Query.limit(1),
    ]);
    return blog.documents[0];
}

export async function getBlogByTitle(title: string) {
    const blog = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.search("title", title),
        Query.limit(1),
    ]);
    return blog.documents[0];
}

export async function getBlogsBySubjectId(id: string) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.equal("subject", id),
        Query.select(["$createdAt", "$id", "title", "tags", "slug", "subject.$id"]),
        Query.limit(5000)
    ]);
    return blogs;
}

export async function searchBlogByTag(tag: string) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.search("tags", tag),
        Query.limit(5000),
        Query.select(["$createdAt", "$id", "title", "tags", "slug", "subject.$id"]),
    ]);
    return blogs;
}

export async function searchBlogsByTitle(title: string) {
    const blogs = await database.listDocuments(DATABASE_ID, COLLECTION_BLOGS, [
        Query.search("title", title), Query.limit(5000), Query.select(["$createdAt", "$id", "title", "tags", "slug", "subject.$id"]),
    ]);
    return blogs;
}

export function addViewToBlog(id: string, newViews: number) {
    database.updateDocument(DATABASE_ID, COLLECTION_BLOGS, id, { views: newViews });
}

export async function submitAboutUsForm(name: string, collegeName: string, yourEmail: string, nameOfCaseWithCitation: string, additionalComments: string) {
    const aboutUs = await database.createDocument(DATABASE_ID, COLLECTION_ABOUT, ID.unique(), {
        name: name,
        collegeName: collegeName,
        yourEmail: yourEmail,
        nameOfCaseWithCitation: nameOfCaseWithCitation,
        additionalComments: additionalComments
    });
    return aboutUs;
}