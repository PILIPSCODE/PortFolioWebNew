import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaHeart } from 'react-icons/fa'




// export const FavSet = (id:string,liked:boolean) => {
//     const getcookie = getCookie("FavBstd");
//     getcookie ? "" : setCookie("FavBstd", []);
//     const favorite = getcookie ? JSON.parse(String(getcookie)) : [];
//     const deliffav = favorite.find((e: any) => e.product.id === id);
//     if (deliffav) {
//       const newdata = favorite.filter((e: any) => e.product.id !== id);
//       setCookie("Favorite", JSON.stringify(newdata));
//       return newdata;
//     } else {
//       favorite.push({ id: id, liked: true });
//       setCookie("Favorite", JSON.stringify(favorite));
//       return favorite;
//     }
//   };


const Like = (props:{id:string,liked:boolean}) => {
    const [like,setlike] = useState(false)
    useEffect(() => {
        setlike(props.liked)
    },[props.liked])
    

    


    const handleFav = async() => {
        setlike(!like)
        try {
          const res = await axios.put(`/api/Blog/${props.id}`,{isLiked:!props.liked})
          
        } catch (error) {
          toast.error("To Many Request Dont Spam!!")
        }
      }
    
  return (
    <h1 className={`${like?"text-red-600":""}`} onClick={handleFav}>
            <FaHeart size={25}/>
            </h1>
  )
}

export default Like