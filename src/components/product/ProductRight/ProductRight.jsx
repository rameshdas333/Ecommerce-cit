



import React, { useEffect, useState } from 'react';
import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { TiStarFullOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const ProductRight = () => {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then(res => res.json())
      .then(data => setProductData(data.products));
  }, []);
//  console.log(productData)
  // Calculate page data
  const totalPages = Math.ceil(productData.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = productData.slice(indexOfFirst, indexOfLast);

  return (
    <div className=''>
    <div className='pb-4'>
       <input className='py-2 px-5 border w-[400px]  rounded-2xl' type="text" placeholder='search' />
    </div>
 

  
      <div className="grid grid-cols-3 gap-[30px]">
        {currentProducts.map((product, idx) => (
          <Link to={`/product/${product.id}`} key={idx}>
            <div className="bg-[#F5F5F5] group rounded relative flex items-center justify-center w-[270px] h-[250px]">
              <img className="w-[200px] h-[150px]" src={product.thumbnail} alt="" />
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <div className="flex items-center justify-center h-[34px] w-[34px] bg-white rounded-full">
                  <GoHeart />
                </div>
                <div className="flex items-center justify-center h-[34px] w-[34px] bg-white rounded-full">
                  <IoEyeOutline />
                </div>
              </div>
              <button  className="absolute bottom-0 left-0 w-full py-1 rounded-[4px] bg-black hidden group-hover:block text-white duration-100">
                Add to cart
              </button>
            </div>
            <p className="pt-4 pb-2 font-primary font-medium text-base">{product.title}</p>
            <div>
              <p className="font-primary font-medium text-base text-primary1">${product.price}</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, starIdx) => (
                  <TiStarFullOutline
                    key={starIdx}
                    className={`text-2xl ${
                      starIdx < Math.round(product.rating) ? 'text-[#FFAD33]' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center  mt-8 mb-8 t space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductRight;
