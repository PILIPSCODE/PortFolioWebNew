
import { Service } from '@prisma/client';
import { FaCheckCircle } from 'react-icons/fa';


const DumyData: Service[] = [
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
        id: "2",
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

]



export default function Carausel() {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 max-lg:gap-4 lg:h-screen w-full items-center'>


            {
                DumyData.map((e, index) => (

                    <div key={e.id} className={`rounded-lg bg-gradient-to-t my-2 ${(index + 1) % 2 === 0 ? "bg-black shadow shadow-white lg:h-4/6" : "bg-white text-black lg:h-3/6"}  relative   h-96`}>
                        <div className="p-7">
                            <h2 className="text-2xl">
                                {e.title}
                            </h2>
                            <div className='mt-4 text-lg'>
                                {
                                    e.isi.map((el, ind) => (

                                        <div key={ind} className='flex gap-2 items-center my-2'>
                                            <FaCheckCircle />
                                            <h1>{el}</h1>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center absolute left-0 bottom-4'>
                            <h1 className='text-2xl'>{e.price}</h1>
                            <p>Estimated Range</p>
                        </div>
                    </div>
                ))
            }


        </div>


    );
}
