import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductLeft = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=> res.json())
        .then(data =>{
            const uniqueCategories = [...new Set(data.products.map(p=>p.category))]
            setCategories(uniqueCategories)
           
        })
    },[])


    return (
        <div >
            <h1 className='font-primary text-[#262626] text-xl font-bold '>Shop by Category</h1>
            {
                categories.map((shop,idx) =>(
                   <div key={idx}  className=''>
                    
                   <Link to={`/products/${shop}`}> <p className='py-3'>{shop}</p></Link>
                   </div>

               )) 
            }
            <h1 className='font-primary text-[#262626] text-xl pt-10  font-bold'>Shop by Color</h1>
            <div>
               <div>
               <div className='flex gap-[10px] items-center'>
                <div className='w-[11px] h-[11px] bg-black rounded-full flex justify-between gap-[10px]'> </div>
                <p className='text-base font-primary py-4 text-[#767676] '>Color 1</p>
               </div>
               <div className='flex gap-[10px] items-center'>
                <div className='w-[11px] h-[11px] bg-red-600 rounded-full flex justify-between gap-[10px]'> </div>
                <p className='text-base font-primary text-[#767676] '>Color 1</p>
               </div>
               <div className='flex gap-[10px] items-center'>
                <div className='w-[11px] h-[11px] bg-[#00FF38] rounded-full flex justify-between gap-[10px]'> </div>
                <p className='text-base font-primary text-[#767676] py-4 '>Color 1</p>
               </div>
             
            
               </div>
            </div>
        </div>
    );
};

export default ProductLeft;

// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products);
//         setFiltered(data.products); // default all
//         const uniqueCategories = [...new Set(data.products.map((p) => p.category))];
//         setCategories(uniqueCategories);
//       });
//   }, []);

//   const filterByCategory = (cat) => {
//     if (cat === "all") {
//       setFiltered(products);
//     } else {
//       setFiltered(products.filter((item) => item.category === cat));
//     }
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
//         {/* Sidebar */}
//         <div className="col-span-1">
//           <h2 className="font-bold mb-4">Shop by Category</h2>
//           <ul className="space-y-2">
//             <li
//               onClick={() => filterByCategory("all")}
//               className="cursor-pointer hover:underline"
//             >
//               All
//             </li>
//             {categories.map((cat) => (
//               <li
//                 key={cat}
//                 onClick={() => filterByCategory(cat)}
//                 className="cursor-pointer hover:underline capitalize"
//               >
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Product Grid */}
//         <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filtered.map((p) => (
//             <div key={p.id} className="border rounded-lg p-3 hover:shadow-md">
//               <img
//                 src={p.thumbnail}
//                 alt={p.title}
//                 className="w-full h-40 object-cover rounded"
//               />
//               <h3 className="mt-2 font-semibold">{p.title}</h3>
//               <p className="text-red-500 font-bold">${p.price}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Products;
