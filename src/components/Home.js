import React from 'react'
import logo from '../img/logo.png'
import hero from '../img/hero.jpg'
import Vector from '../img/Vector.png'
import first from '../img/first.jpeg'
import second from '../img/second.jpeg'
import thrid from '../img/thrid.jpeg'

const Home = () => {
    return (
        <>
            {/* header */}
            <section className='tw-flex tw-items-center tw-px-24 tw-pt-5 tw-pb-2'>
                <main className='tw-w-[50%]'>
                    <img src={logo} alt="" className='tw-w-40' />
                </main>
                <main className='tw-w-[50%] tw-flex tw-items-center tw-gap-x-24 tw-text-[#63a731]'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p className='tw-text-black tw-bg-[#63a731] tw-border-4 tw-border-black tw-px-10 tw-font-medium tw-py-1 tw-rounded-full'>Add Members</p>
                </main>
            </section>

            {/* hero section */}
            <section className='tw-flex tw-items-center tw-bg-[#f9f9f9]'>

                <main className='tw-w-[70%] tw-pl-28'>

                    <p className='tw-text-[#e25953] tw-text-5xl tw-font-medium'>
                        Discover Your Roots, <br />
                        Connect with Your Legacy
                    </p>

                    <p className='tw-text-[#63a731] tw-font-medium tw-text-2xl tw-mt-7'>
                        Explore your family tree, preserve your history, and connect with
                        loved ones across generations.
                    </p>


                    <div className='tw-flex tw-gap-x-40'>
                        <button className='tw-mt-14 tw-flex tw-items-center tw-text-white tw-bg-[#63a731] tw-rounded-xl tw-py-4 tw-px-7  tw-text-sm tw-font-medium tw-gap-x-9'>
                            Start Your Journey
                            <img src={Vector} alt="" />
                        </button>

                        <button className='tw-mt-14 tw-flex tw-items-center tw-text-white tw-bg-[#e25953] tw-rounded-xl tw-py-4 tw-px-7  tw-text-sm tw-font-medium tw-gap-x-9'>
                            Create Your Family Tree
                            <img src={Vector} alt="" />
                        </button>
                    </div>

                </main>
                <main className=''>
                    <img src={hero} alt="" className='' />
                </main>
            </section>

            {/* 2nd section */}
            <section className='tw-px-20'>
                <p className='tw-text-center tw-font-medium tw-text-4xl tw-py-5'>Why Choose Our Family Tree Platform?</p>
                <main className=' tw-grid tw-grid-cols-3 tw-gap-x-28'>

                    <div className='tw-border tw-rounded-xl tw-pt-5 tw-shadow-md'>
                        <h1 className='tw-text-center tw-font-medium tw-text-xl'>Build & Expand Your Tree</h1>
                        <p className='tw-px-14 tw-pt-4'>Easily add family members, photos, and milestones</p>
                        <img src={first} alt="" />
                    </div>

                    <div className='tw-border tw-rounded-xl tw-pt-5 tw-shadow-md'>
                        <h1 className='tw-text-center tw-font-medium tw-text-xl'>Discover Hidden Stories</h1>
                        <p className='tw-px-14 tw-pt-4'>Uncover fascinating details with our historical records database.</p>
                        <img src={second} alt="" />
                    </div>

                    <div className='tw-border tw-rounded-xl tw-pt-5 tw-shadow-md'>
                        <h1 className='tw-text-center tw-font-medium tw-text-xl'>Collaborate with Family</h1>
                        <p className='tw-px-14 tw-pt-4'>Invite family members to contribute and share memories.</p>
                        <img src={thrid} alt="" className='tw-w-[70%] tw-mx-auto tw-mt-10'/>
                    </div>
                    
                    


                </main>

            </section>
        </>
    )
}

export default Home