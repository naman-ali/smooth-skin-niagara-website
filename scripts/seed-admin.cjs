const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const userId = process.argv[2];
  const email = process.argv[3];
  if (!userId || !email) {
    console.error("Usage: node seed-admin.cjs <clerkUserId> <email>");
    process.exit(1);
  }

  await prisma.profile.upsert({
    where: { userId },
    update: { role: "admin" },
    create: { userId, email, role: "admin" },
  });

  console.log(`Admin role set for ${email} (${userId})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
