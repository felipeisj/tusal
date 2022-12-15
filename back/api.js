import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.User.create({
    data: {
      email: 'test2@test.com',
      nombre: 'Negro',
      rut: '123456-7',
      url_img: 'negro.jpg'
    //   servicios: {
    //     create: {
    //       nombre: 'Enfermero',
    //     },
    //   },
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })