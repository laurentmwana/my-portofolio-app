import { auth } from "#/lib/auth";
import { prisma } from "#/lib/prisma";

export async function authSeeder() {
  const email = "laurentmwn@gmail.com";

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    console.log("User already exists, skipping:", existing.email);
    return;
  }

  const result = await auth.api.signUpEmail({
    body: {
      name: "Labeya",
      email,
      password: "changeme123",
    },
  });

  await prisma.user.update({
    where: { id: result.user.id },
    data: { emailVerified: true },
  });

  console.log("Created user:", result.user);
}
