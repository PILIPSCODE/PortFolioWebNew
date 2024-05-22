// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import axios from "axios"
// import "swiper/css";
// import "swiper/css/pagination";
// // import { CldUploadButton } from 'next-cloudinary';
// import {BsFillTrashFill} from "react-icons/bs"
// import { Pagination } from "swiper/modules";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// // import Loading from "../loading";
// import Swal from "sweetalert2";


// type bilboard = {
//   Image: string;
//   id:string
// }

// export default function Billboard() {
//   const [upload,setupload] = useState({Image:""})
// const [loading,Setloading] = useState(false)
// const [bilboard,Setbilboard] = useState<bilboard[]>([])

//    useEffect(() => {
//     const getbillboard = async () => {
//       const res = await fetch('/api/Bilboard')
//       Setbilboard(await res.json())
//     }
//     getbillboard()
//    },[])

//   const HandleDelete = async (id:string) => {
//     const Sweetal = await Swal.fire({
//       title: 'Do you want to Delete?',
//       showDenyButton: true,
//       confirmButtonText: 'Delete',
//       confirmButtonColor:"#d33",
//       denyButtonColor:"#3085d6",
//       denyButtonText: `Don't Delete`,
//     })

//     if(Sweetal.isConfirmed){
//       const res = await axios.delete(`/api/Bilboard/${id}`)
//       if(res.status === 200) {
//         toast.success("Succesfuly Deleted")
//       }
//     }else if (Sweetal.isDenied) {
//       Swal.fire('Canceled')
//     }
//   }
  
//   return (
//     <div className="bg-black  rounded-xl p-5">
//       {/* <Loading load={loading} text="lagi upload"/> */}
//       <Swiper
//         breakpoints={{
//           "@0.00": {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           "@0.75": {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           "@1.00": {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//         }}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper h-56"
//       >
//         {bilboard.map((e,index) => (
//           <SwiperSlide key={index}>
//             <div className="relative  h-full">
//               <div onClick={() => {
//                HandleDelete(e.id)
//               }}
//                  className="absolute z-30 top-2 right-2 text-red-600">
//               <BsFillTrashFill  size={25}  />
//               </div>
//               <Image
//                 src={e.Image}
//                 fill
//                 className="object-cover"
//                 alt={`Bilboard ${index}`}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//         {
//             bilboard.length > 2?
//             <div>
                
//             </div>
//             :
//          <SwiperSlide>
//             <div className={`relative flex flex-col gap-3 justify-center bg-white items-center h-full`}>
//                 <h1 className="text-xl text-black">Add Photo</h1>
//                 <h1 className="text-4xl text-black max-md:text-2xl text-center">Landscape Photos</h1>
//                 {/* <CldUploadButton
//               options={{ maxFiles: 1 }}
//               onUpload={(cloud: any) => {
//                 try {
//                   Setloading(true)
//                   axios.post(`/api/Bilboard`,{Image:cloud?.info?.secure_url})
//                   setupload({
//                     Image: cloud?.info?.secure_url
//                   })
//                   if(upload){
//                     toast.success("Upload Successfuly")
//                     Setloading(false)
//                   }
//                 } catch (error) {
//                   console.log(error)
//                 }
//               }
//               }
//               className="p-3 rounded-xl bg-black"
//               uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`}
//             >
//             </CldUploadButton> */}
//             </div>

//           </SwiperSlide>
            
//         }
//       </Swiper>
//     </div>
//   );
// }
