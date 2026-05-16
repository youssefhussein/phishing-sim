import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

const config = useRuntimeConfig();

// In production (Netlify), we use the Turso URL & Auth Token.
// For local dev, you can use a local SQLite file or a Turso dev token.
const client = createClient({
	url: config.tursoUrl || process.env.TURSO_DATABASE_URL!,
	authToken: config.tursoToken || process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });
