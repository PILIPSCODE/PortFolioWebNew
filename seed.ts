// seed.ts
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  // Membaca data dari file project.json
  const dataProject = fs.readFileSync('project.json', 'utf-8');
  const project = JSON.parse(dataProject);

  for (const service of project) {
    await prisma.project.create({
      data: service,
    });
  }

  const dataservice = fs.readFileSync('Service.json', 'utf-8');
  const services = JSON.parse(dataservice);

  for (const service of services) {
    await prisma.service.create({
      data: service,
    });
  }
  const dataUser = fs.readFileSync('User.json', 'utf-8');
  const User = JSON.parse(dataUser);

  for (const service of User) {
    await prisma.user.create({
      data: service,
    });
  }

  console.log("Seeding completed.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });