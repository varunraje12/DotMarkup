import React, { useEffect, useState } from "react";
import SearchMenu from "../../components/Search";
import { useRouter } from "next/router";
import ListingCard from "../../components/Listing/ListingCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Head from "next/head";

function Index() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [schema3, setschema3] = useState();
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
          setschema3({
            "@context": "https://schema.org/",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": data[0].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[0].company_title
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": data[1].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[1].company_title
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": data[2].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[2].company_title
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": data[3].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[3].company_title
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": data[4].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[4].company_title
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": data[5].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[5].company_title
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": data[6].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[6].company_title
              },
              {
                "@type": "ListItem",
                "position": 8,
                "name": data[7].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[7].company_title
              },
              {
                "@type": "ListItem",
                "position": 9,
                "name": data[8].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[8].company_title
              },
              {
                "@type": "ListItem",
                "position": 10,
                "name": data[9].company_title,
                "url": "https://www.dotmarkup.com/biz/" + data[9].company_title
              }
            ]
          });
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
  const schema1 = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Dotmarkup.com",
    "url": "https://dotmarkup.com/agencies",
    "logo": "https://dotmarkup.com/wp-content/uploads/2021/02/cropped-Blue-and-Green-Consultancy-Logo-1-149x49.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "areaServed": ["IN", "US"],
      "availableLanguage": "en"
    }
  }
  const schema2 = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dotmarkup.com/agency"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "seo",
      "item": "https://dotmarkup.com/agency/seo"
    }]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
      />
      <Head>
        <title>DotMarkup - Leading Marketplace for Finding Business Services</title>
        <meta name='description' content='DotMarkup is your one-stop-shop to search, find, and decide on business service providers. Read verified reviews from 260K+ global providers to find the right fit.'></meta>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <div className='px-5 md:px-10 lg:px-20'>
        <div>
          <h2 className='text-4xl font-poppins font-bold py-5'>Best SEO Agencies{router.query.state ? ` ${`In\xa0${router.query.state}`}` : ''}</h2>
          <p>We&apos;ve collected the data of over 7,840 seo companies to help you find the best seo company for your needs. Use DotMarkup to create a shortlist of your top seo contenders, and select best of them. </p>
        </div>
        {/*------ BreadCumb ---------*/}
        <div className='flex gap-0 pt-2'>
          <button
            className="font-semibold capitalize"
            onClick={() => {
              router.push("/");
            }}
          >Home</button>
          <MdKeyboardArrowRight size={20} className="mt-1" />

          {router.asPath.split("/").map((element) => {
            return (
              <>
                <div className="font-semibold capitalize text-blue-600">{element}</div>
              </>
            );
          })}
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
        </div>
        <div className='flex justify-center pt-8 overflow-hidden'>
          {/* pagination */}
          <div className='flex justify-center py-8'>
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
