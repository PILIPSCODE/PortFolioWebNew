
import { Service } from '@prisma/client';
import { FaCheckCircle } from 'react-icons/fa';


type props = {
    getService : Service[]
}


export default function Carausel(props:props) {

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 max-lg:gap-4 p-5 lg:h-screen w-full items-center'>


            {
                props.getService.map((e, index) => (

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
