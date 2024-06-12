import Dexie, { type EntityTable } from "dexie";

interface Blog {
  title: string;
  id: string;
  slug: string;
  subject: string;
}

const db = new Dexie("BlogsDatabase") as Dexie & {
  blogs: EntityTable<
    Blog,
    "id" // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  blogs: "++id, title, slug, subject", // primary key "id" (for the runtime!)
});

export type { Blog };
export { db };
