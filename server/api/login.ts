import { db } from "../db/db";

import { users, type User } from "../db/schema";

export default defineEventHandler(async (event) => {
	const method = event.method;
	if (method === "POST") {
		const body = await readBody(event);
		const { email: inputEmail, password } = body;

		if (!inputEmail || !password) {
			throw createError({
				statusCode: 400,
				message: "Email and password are required",
			});
		}

		// Create new user
		const newUser = await db
			.insert(users)
			.values({
				email: inputEmail,
				password,
				createdAt: new Date(),
			})
			.returning();

		return sendRedirect(event, "https://emec.com.eg/");
	}
});
