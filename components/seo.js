// import React, { useEffect, useState } from "react";
// import Head from "next/head";
// import ListingCard from "../components/Listing/ListingCard";
// import SearchMenu from "../components/Search";
// import Pagination from "../components/Pagination";
// import { useRouter } from "next/router";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
// // import Faq from '../components/Faq'

// const Seo = () => {
//   const [data, setData] = useState();
//   const router = useRouter();
//   const { cities, city, page } = router.query;
//   const [searchData, setSearchData] = useState([]);

//   useEffect(() => {
//     function ListingCardDetail() {
//       fetch(`http://209.38.244.1:3000/api/staticdata?page=${page ? page : 1}`)
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => setData(data?.data));
//     }
//     // In pagination data fetching
//     ListingCardDetail();
//   }, [page]);

//   useEffect(() => {
//     // In search data fetching
//     const search = function () {
//       if (cities) {
//         fetch(
//           `http://209.38.244.1:3000/api/cities?states=${cities}&page=1
//           `
//         )
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => setSearchData(data?.data));
//       }
//       if (cities && city) {
//         fetch(
//           `http://209.38.244.1:3000/api/cities?states=${cities}&city=${city}&page=${page ? page : 1
//           }`
//         )
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             setSearchData(data?.data);
//           });
//       }
//     };
//     search();
//   }, [cities, city]);

//   function nextPage() {
//     fetch(
//       `http://209.38.244.1:3000/api/cities?state=${cities}&page=${page ? page * 1 + 1 : 2
//       }`
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setSearchData(data?.data);
//       });
//   }

//   function prevPage() {
//     fetch(
//       `http://209.38.244.1:3000/api/cities?state=${cities}&page=${page * 1 - 1}`
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setSearchData([]), setSearchData(data?.data);
//       });
//   }
//   return (
//     <>
//       <Head>
//         <title>DotMarkup - Leading Marketplace for Finding Business Services</title>
//         <meta name='description' content='DotMarkup is your one-stop-shop to search, find, and decide on business service providers. Read verified reviews from 260K+ global providers to find the right fit.'></meta>
//       </Head>

//       <div className='px-5 md:px-10 lg:px-20 '>
//         <div>
//           <h1 className='text-4xl font-poppins font-bold py-5'>Best SEO Agencies{cities ? ` ${`In\xa0${cities}`}` : ''}</h1>
//           <p>We've collected the data of over 7,840 seo companies to help you find the best seo company for your needs. Use DotMarkup to create a shortlist of your top seo contenders, and select best of them. </p>
//         </div>
//         <SearchMenu />
//       </div>
//       <div className="px-5 md:px-10 lg:px-20 text-2xl font-semibold pb-1">List of Top {cities} SEO Agencies</div>
//       <div>
//         {searchData?.length > 0 ? (
//           <>
//             <div className='px-5 md:px-10 lg:px-20 space-y-7 mb-11'>
//               {searchData?.map((element) => {
//                 return (
//                   <>
//                     <ListingCard detail={element} />
//                   </>
//                 );
//               })}
//             </div>
//             {/* pagination */}
//             <div className='flex justify-center pt-8'>
//               <div className='flex gap-5'>
//                 <button
//                   onClick={prevPage}
//                   disabled={
//                     router.query.page == "NaN" ||
//                       router.query.page == "1" ||
//                       (router.query &&
//                         Object.keys(router.query).length === 0 &&
//                         router.query.constructor === Object)
//                       ? true
//                       : false
//                   }
//                   className={
//                     router.query.page == "NaN" ||
//                       router.query.page == "1" ||
//                       (router.query &&
//                         Object.keys(router.query).length === 0 &&
//                         router.query.constructor === Object)
//                       ? "flex items-center cursor-not-allowed"
//                       : "flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-gray-200 gap-0 hover:border-black"
//                   }
//                 >
//                   <BiChevronLeft />
//                   Prev
//                 </button>
//                 <button
//                   onClick={() => {
//                     fetch(
//                       `http://209.38.244.1:3000/api/cities?state=${cities}&page=1`
//                     )
//                       .then((res) => {
//                         return res.json();
//                       })
//                       .then((data) => {
//                         setSearchData([]), setSearchData(data?.data);
//                       });
//                   }}
//                   className='border-2 p-1 px-3 rounded-lg'
//                 >
//                   1
//                 </button>
//                 <button
//                   onClick={() => {
//                     fetch(
//                       `http://209.38.244.1:3000/api/cities?state=${cities}&page=2`
//                     )
//                       .then((res) => {
//                         return res.json();
//                       })
//                       .then((data) => {
//                         setSearchData([]), setSearchData(data?.data);
//                       });
//                   }}
//                   className='border-2 p-1 px-3 rounded-lg'
//                 >
//                   2
//                 </button>
//                 <button
//                   onClick={() => {
//                     fetch(
//                       `http://209.38.244.1:3000/api/cities?state=${cities}&page=3`
//                     )
//                       .then((res) => {
//                         return res.json();
//                       })
//                       .then((data) => {
//                         setSearchData([]), setSearchData(data?.data);
//                       });
//                   }}
//                   className='border-2 p-1 px-3 rounded-lg'
//                 >
//                   3
//                 </button>
//                 <button
//                   onClick={nextPage}
//                   className='flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-green-500 text-white gap-0 hover:border-black'
//                 >
//                   Next
//                   <BiChevronRight />
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className='px-5 md:px-10 lg:px-20 space-y-7 mb-11'>
//               {data?.map((element) => {
//                 return (
//                   <>
//                     <ListingCard detail={element} />
//                   </>
//                 );
//               })}
//             </div>
//             <div className='flex justify-center p-6'>
//               <Pagination />
//             </div>

//             {/*-------------------------*/}

//             {/* <div className='mb-6'>
//               <p className="text-4xl font-bold text-center p-6">Frequently Asked Question</p>
//               <Faq />
//               <Faq />
//               <Faq />
//               <Faq />
//             </div> */}
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Seo;



