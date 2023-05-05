import React, { useEffect, useState } from 'react'
import CardCarousel from "../../components/CardCarousel";
import ListingcardDetails from '../../components/Listing/ListingcardDetails'
import { GrPersonalComputer } from "react-icons/gr";
import Services from '../../components/Services';
// import Review from '../../components/Review';
// import ServiceProvider from '../../components/ServiceProvider'
import { useRouter } from 'next/router';
import Servicedata from '../../indus.json';
import Head from "next/head";


const Company = () => {
  const router = useRouter();
  const [oneDetail, setOneDetail] = useState({});
  const [allData, setAllData] = useState([]);
  const servicedetail = Servicedata.details
  // console.log(router.query.company)


  // console.log(allData);
  useEffect(() => {
    const companyData = function () {
      if (router.query.company) {
        fetch(
          `http://209.38.244.1:3000/api/company?title=${router.query.company}
          `
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setOneDetail(data);
          });
      }
    };
    companyData();
  }, [router.query.company]);

  useEffect(() => {
    const allCompanyData = function () {
      fetch("http://209.38.244.1:3000/api/staticdata")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data)
          const filterData = [];
          data.forEach((element) => {
            if (element.company_title != oneDetail.company_title) {
              if (element.locality.includes(oneDetail.locality)) {
                filterData.push(element);

                setAllData(prevState => [...prevState, element]);
                // console.log(allData)
              }
            }
          });
        });
    };
    allCompanyData();
  }, [oneDetail.locality]);



  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      {/********** Listingcard Details ***********/}
      <div className='p-5 md:p-10 lg:p-20 '>
        <ListingcardDetails detail={oneDetail} />
      </div>



      {/********** Services ***********/}
      <div className='px-5 md:px-10 lg:px-20 text-2xl font-bold'>More Services</div>
      {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-5 md:px-10 lg:px-20'> */}
      {
        servicedetail.map((e) => {
          return (
            <>
              <div>
                {e.company_title === router.query.company &&
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 md:px-10 lg:px-20'>
                    {e.industry_Serving.split(",").map((element, i) => {
                      return (
                        <div key={i}>
                          <Services title={element}>
                            <GrPersonalComputer size={50} />
                          </Services>
                        </div>)
                    })}
                  </div>}
              </div>
            </>
          )
        })
      }
      {/* </div> */}


      {/********** Review ***********/}
      {/* <div className='px-5 md:px-10 lg:px-20 '>
        <Review />
        <Review />
      </div> */}

      {/********** ServiceProvider ***********/}

      {/* <div className='px-5 md:px-10 lg:px-20 text-2xl font-semibold pt-7'>More Service Providers in California</div>
      <div className='px-28 pt-3 mb-3'>
        <ServiceProvider />
      </div> */}


      {/********** Card Carousel ***********/}

      <div className='md:px-20 p-5 '>
        <div className='text-2xl font-bold'>More Agenices</div>
        <div className=''>
          {allData.slice(0, 6).map((element) => {
            return (
              <>
                <CardCarousel detail={element} />

              </>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Company

