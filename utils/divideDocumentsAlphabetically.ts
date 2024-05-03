import { type Models } from "appwrite";

export default function (allDocuments: Models.DocumentList<Models.Document>) {
    const dividedDocuments: { [key: string]: Models.Document[] } = {};
    allDocuments.documents.forEach(document => {
        // Get the first letter of the title, convert to uppercase
        const firstLetter: string = document.title[0].toUpperCase();

        // Check if there's already an array for this letter, if not, create one
        if (!dividedDocuments[firstLetter]) {
            dividedDocuments[firstLetter] = [];
        }

        // Push the document to the array corresponding to its first letter
        dividedDocuments[firstLetter].push(document);
    });

    const sortedKeys = Object.keys(dividedDocuments).sort();
    const sortedDividedDocuments: { [key: string]: Models.Document[] } = {};
    sortedKeys.forEach(key => {
        sortedDividedDocuments[key] = dividedDocuments[key];
    });
    return sortedDividedDocuments;
}