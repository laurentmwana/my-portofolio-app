import { auth } from "#/lib/auth";
import { prisma } from "#/lib/prisma";

const DEFAULT_EMAIl = "laurentmwn@gmail.com"
const DEFAULT_PASSWORD = "changeme123"

export async function authSeeder() {
  const result = await auth.api.signUpEmail({
    body: {
      name: "Labeya",
      email: DEFAULT_EMAIl,
      password: DEFAULT_PASSWORD,
    },
  });

  await prisma.user.update({
    where: { id: result.user.id },
    data: { emailVerified: true },
  });
}
