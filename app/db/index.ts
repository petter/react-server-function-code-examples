import { promises as fs } from "fs";
import path from "path";

interface Post {
  id: string;
  title: string;
  content: string;
}

const DB_PATH = path.join(process.cwd(), "data", "db.json");

// Initialize the database file if it doesn't exist
async function initDb() {
  try {
    await fs.access(DB_PATH);
  } catch {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify({}));
  }
}

// Read the database
async function readDb(): Promise<Record<string, Post>> {
  await initDb();
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

// Write to the database
async function writeDb(data: Record<string, Post>) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

export const db = {
  async insert(title: string, content: string): Promise<Post["id"]> {
    const data = await readDb();
    const id = Math.random().toString(36).substring(2, 15);
    data[id] = { id, title, content };
    await writeDb(data);
    return id;
  },
  async find(id: Post["id"]): Promise<Post | undefined> {
    const data = await readDb();
    return data[id];
  },
  async findAll(): Promise<Post[]> {
    const data = await readDb();
    return Object.values(data);
  },
};
