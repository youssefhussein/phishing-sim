import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer().primaryKey({ autoIncrement: true }),
    email: text().notNull().unique(),
    password: text().notNull(),
    createdAt: integer({ mode: 'timestamp' }).notNull(),
})
