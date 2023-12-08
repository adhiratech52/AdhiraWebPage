import Image from 'next/image';

const Banner = () => {

    return (
        <div className='bg-header'>
            <div className="mx-auto max-w-7xl md:pt-5 pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12'>


                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        <Image src="/assets/banner/star.svg" alt="star-image" width={95} height={97} className='absolute top-[-74px] right-[51px] pl-50 pr-50' />
                        <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[-74px] right-[51px] pl-50 pr-50' />
                        <h1 className='text-midnightblue  md:text-5xl text-2xl w-100 text-center lg:text-start font-semibold lh-133 pt-5'>Social Tech, Shared Moments: Explore the Magic Together with Adhira.</h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Our cutting-edge Social Tech solutions redefine how you connect. Seamlessly blending innovation with intimacy, we empower you to strengthen bonds, forge new connections, and create lasting memories. Experience the magic of togetherness with our curated range of products. Elevate your social moments – explore with us at Adhira</h3>
                        <div className='pt-8 mx-auto lg:mx-0'>
                            <button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue">
                                Get started
                            </button>
                        </div>
                    </div>

                    <div className='col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image src="/assets/banner/banner.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Banner;
