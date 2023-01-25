import prisma from "../src/database/database.js";

async function main() {
  await prisma.users.createMany({
    data: [
      {
        id: 1,
        name: "joao",
        email: "joao@gmail.com",
        password: "123",
      },
      {
        id: 2,
        name: "marcello",
        email: "marcello@gmail.com",
        password: "123",
      },
    ],
  });

  await prisma.spending.createMany({
    data:[
        {
            idUser: 1,
            name: "gastos",
            price: 1000,
        },
        {
            idUser: 1,
            name: "lucro",
            price: 10000,
        },
        {
            idUser: 2,
            name: "gastos",
            price: 1000,
        },
        {
            idUser: 2,
            name: "lucro",
            price: 1000,
        },
        {
            idUser: 1,
            name: "gato",
            price: 500,
        },
    ]
  })
}

main()
  .then(() => {
    console.log("Success");
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })
