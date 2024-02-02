"use client";
import { SetStateAction, useState } from 'react';
import Image from 'next/image';

const names = [
    {
        name: "Nitesh Saini",
        imgSrc: '/assets/people/Nitesh.png',
        domain: 'Android & FrontEnd Systems', 
        description:''
    },
    {
        name: "Pallav Semwal",
        imgSrc: '/assets/people/Pallav.jpg',
        domain: 'Backend Systems',
        description:'I majorly look into the Backend Development , meanwhile with involvement in Machine Learning , Frontend Technology to understand the Requriments for the Backend Server form the POV of FrontEnd System as Well as Machine Learning System '
    },
    {
        name: "Ankit Bharti",
        imgSrc: '/assets/people/Ankit.png',
        domain: 'Machine Learning Systems',
        description:''
    }
]


const Pricing = () => {


    // const handleCategoryChange = (category: SetStateAction<string>) => {
    //     setSelectedCategory(category);
    // };

    const filteredData = names;

    return (
        <div id="pricing" className='pricing-bg relative py-10'>
            {/* <Image src="/assets/pricing/upperline.png" alt="upperline-image" width={280} height={219} className='absolute top-[160px] left-[90px] hidden sm:block' />
            <Image src="/assets/pricing/lowerline.png" alt="lowerline-image" width={180} height={100} className='absolute bottom-[0px] right-[90px]' /> */}
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Our Team! Who Are We??</h3>

                <p className='text-lg font-normal text-center text-black opacity-60 pt-5'>We are a group of 3 Prople All Highly Enthusiastic about Software Development , Machine Learning. <br /></p>
                <p className='text-lg font-normal text-center text-black opacity-60 pt-5'>All of us are invoved in the Ideation, Planning And Execution and Expansion of Adhira for About a year now. Before Adhira , we were constantly involved in <a href='/projects' style={{fontWeight:'600'}}>Multiple Projects </a> with the same team during our 4 years of College Together</p>
                <p className='text-lg font-normal text-center text-black opacity-60 pt-5'>Now all of us are trying to expand our reach in different technologies Meanwhile bringing Some Specialization to<b> Adhira</b><br /></p>
                <p className='text-lg font-normal text-center text-black opacity-60 pt-5'>All Of Us are B.Tech Graduates from IIT Delhi ( 2023 Batch ) - Industrial And Production Branch <br /></p>
                {/* <div className='mt-6 relative'>
                    <div className='flex justify-center'>
                        <div className='bg-cornflowerblue flex py-1 px-1 rounded-full '>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'yearly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('yearly')}
                            >
                                Yearly
                            </h3>
                            <h3
                                className={`text-xl font-medium cursor-pointer ${selectedCategory === 'monthly' ? 'text-electricblue bg-white rounded-full py-2 px-4 sm:py-4 sm:px-16' : 'text-white py-2 px-4 sm:py-4 sm:px-16'
                                    }`}
                                onClick={() => handleCategoryChange('monthly')}
                            >
                                Monthly
                            </h3>
                        </div>
                    </div>
                </div> */}


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-6'>
                    {
                        filteredData.map((item, index) => {
                            return(
                                <div className='pt-10 pb-28 pl-10 pr-10 bg-white rounded-3xl bxshd relative cursor-pointer hover:bg-dodgerblue group' key={index}>
                                <img src={item.imgSrc} style={{ borderRadius: '10px' , height:'400px' , objectFit:'cover', width:'100%'}} />
                                {/* <Image src={item.imgSrc} alt="star-image" width={154} height={154}  /> */}
                                <h4 className='text-4xl sm:text-3xl  mb-2 text-midnightblue group-hover:text-white'>{item.name}</h4>
                                {/* <p className='text-lg font-normal text-black group-hover:text-white'>${item.subscriber}<span>/ Subscriber</span></p>
                                <p className='text-lg font-normal text-black opacity-40 mb-6 group-hover:text-white'>(per subscriber per month)</p> */}

                                <div className='flex text-xl mb-2' >
                                    {item.domain}  
                                </div>
                                <div className='flex text-medium' >
                                    {item.description}  
                                </div>
                                {/* <button className='text-xl font-medium text-white w-full bg-blue hover:text-white group-hover:bg-cornflowerblue group-hover:border-cornflowerblue border-2 border-blue rounded-full py-4 px-12 mb-8'>{item.button}</button> */}
                            </div>
                            ) 
                            })

                    }
                </div>

            </div>
        </div>
    );  
}

// XMLDocument.map((item, index) => {
//     return ()
// })

export default Pricing;
