import { prisma } from "#/lib/prisma";
import { authSeeder } from "./seeders/auth.seeder";
import { skillSeeder } from "./seeders/skill.seeder";

async function main() {
   await authSeeder()
   await skillSeeder()
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
