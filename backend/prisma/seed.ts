// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function createUser(email: string, password: string, name: string) {
//   const user = await prisma.user.create({
//     data: {
//       email,
//       password,
//       name,
//     },
//   });

//   console.log('Created user:', user);
// }

// // Пример использования
// createUser('test@example.com', 'securepassword', 'John Doe');

// // Не забудьте закрыть соединение с базой данных после использования
// prisma.$disconnect();