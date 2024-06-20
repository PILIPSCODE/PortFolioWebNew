import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const data = [
        {
            id: "1",
            isi: [
                "Fast Work",
                "Not include hosting",
                "Free Revisi 3x",
            ],
            price: "Rp.400k - Rp.600k",
            createdAt: new Date(),
            updatedAt: new Date(),
            title: "Slicing design"
        },
        {
            id: "2",
            isi: [
                "Fast Work",
                "Not include hosting",
                "Free Revisi 3x",
                "Responsive Design"
            ],
            price: "Rp.400k - Rp.1200k",
            createdAt: new Date(),
            updatedAt: new Date(),
            title: "Landing Page"
        },
        {
            id: "3", // Perhatikan bahwa id harus unik, jadi saya mengubahnya menjadi '3'
            isi: [
                "Fast Work",
                "Not include hosting",
                "Free Revisi 3x",
                "Responsive Design",
            ],
            price: "Rp.1000k - Rp.2500k",
            createdAt: new Date(),
            updatedAt: new Date(),
            title: "Ecommerce Website"
        },
    ];

    for (const item of data) {
        await prisma.service.create({
            data: item,
        });
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });