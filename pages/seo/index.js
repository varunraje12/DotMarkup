import React, { useEffect, useState } from "react";
import SearchMenu from "../../components/Search";
import { useRouter } from "next/router";
import ListingCard from "../../components/Listing/ListingCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Head from "next/head";

function Index() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    function defaultData() {
      fetch(
        `http://209.38.244.1:3000/api/staticdata?page=${router.query.page ? router.query.page : 1
        }`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    }
    defaultData();
  }, [router.query.page]);

  function nextPage() {
    router.push(
      `http://209.38.244.1:3000?page=${router.query.page ? router.query.page * 1 + 1 : 2
      }`
    );
  }

  function prevPage() {
    router.push(`http://209.38.244.1:3000?page=${router.query.page * 1 - 1}`);
  }
  useEffect(() => {
    function name() {
      !router.query.page
        ? (router.query.page = 1)
        : (router.query.page = router.query.page);
    }
    name();
  }, []);
  return (
    <>
      <Head>
        <title>DotMarkup - Leading Marketplace for Finding Business Services</title>
        <meta name='description' content='DotMarkup is your one-stop-shop to search, find, and decide on business service providers. Read verified reviews from 260K+ global providers to find the right fit.'></meta>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <div className='px-5 md:px-10 lg:px-20'>
        <div>
          <h1 className='text-4xl font-poppins font-bold py-5'>Best SEO Agencies{router.query.state ? ` ${`In\xa0${router.query.state}`}` : ''}</h1>
          <p>We&apos;ve collected the data of over 7,840 seo companies to help you find the best seo company for your needs. Use DotMarkup to create a shortlist of your top seo contenders, and select best of them. </p>
        </div>
        <SearchMenu />
      </div>
      <div className='px-5 md:px-10 lg:px-20 font-semibold'>Total Record: {data.totalPages * 10}</div>
      <div className="px-5 md:px-10 lg:px-20 text-2xl font-semibold pb-1">List of Top {router.query.state} SEO Agencies</div>
      <div>
        <div className='px-5 md:px-10 lg:px-20 space-y-7 mb-11'>
          {data?.data?.map((element) => {
            return (
              <>
                <ListingCard detail={element} />
              </>
            );
          })}
        </div >
        <div className='flex justify-center pt-8'>
          {/* pagination */}
          <div className='flex justify-center p-8'>
            <div className='flex gap-5'>
              <button
                onClick={prevPage}
                disabled={
                  router.query.page == "NaN" ||
                    router.query.page == "1" ||
                    (router.query &&
                      Object.keys(router.query).length === 0 &&
                      router.query.constructor === Object)
                    ? true
                    : false
                }
                className={
                  router.query.page == "NaN" ||
                    router.query.page == "1" ||
                    (router.query &&
                      Object.keys(router.query).length === 0 &&
                      router.query.constructor === Object)
                    ? "flex items-center cursor-not-allowed"
                    : "flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-gray-200 gap-0 hover:border-black"
                }
              >
                <BiChevronLeft />
                Prev
              </button>

              <div className='flex gap-2'>
                {router.query.page != 1 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    onClick={() => router.push(`/seo?page=1`)}
                  >
                    1
                  </button>
                )}
                {router.query.page > 2 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    disabled={router.query.page - 1 > 2}
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page - 1}`)
                    }
                  >
                    {router.query.page - 1 > 2 ? "..." : router.query.page - 1}
                  </button>
                )}
                {router.query.page > 3 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page - 1}`)
                    }
                  >
                    {router.query.page - 1}
                  </button>
                )}
                {
                  <button className='border-2 p-1 px-3 rounded-lg bg-green-400'>
                    {router.query.page}
                  </button>
                }
                {router.query.page < data?.totalPages - 1 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page * 1 + 1}`)
                    }
                  >
                    {router.query.page * 1 + 1}
                  </button>
                )}
                {router.query.page < data?.totalPages - 2 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    disabled={router.query.page - 1 < data?.totalPages - 2}
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page - 1}`)
                    }
                  >
                    {router.query.page - 1 < data?.totalPages - 2
                      ? "..."
                      : router.query.page - 1}
                  </button>
                )}
                {router.query.page != data?.totalPages && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    onClick={() => router.push(`/seo?page=${data?.totalPages}`)}
                  >
                    {data?.totalPages}
                  </button>
                )}
              </div>
              <button
                onClick={nextPage}
                disabled={router.query.page == data?.totalPages ? true : false}
                className={
                  router.query.page == data?.totalPages
                    ? "flex items-center cursor-not-allowed"
                    : "flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-gray-200 gap-0 hover:border-black"
                }
              >
                Next
                <BiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Index;
