import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  prompt: text("prompt").notNull(),
  code: text("code").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type ProjectRow = typeof projects.$inferSelect;
export type InsertProjectRow = typeof projects.$inferInsert;
