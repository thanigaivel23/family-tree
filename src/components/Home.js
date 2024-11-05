import React from 'react'
import familyTree from '../img/familytree.jpeg'

const Home = () => {
    return (
        <>
            <main className='tw-bg-[#f5f7f5] tw-px-20 poppins'>
                <section className='tw-py-10'>
                    <h1 className='tw-text-[#90ee91] tw-text-2xl tw-py-2 tw-font-medium'> Discover Your Roots, Connect with Your Legacy </h1>
                    <p className='tw-pb-5 tw-pl-5'> Explore your family tree, preserve your history, and connect with loved ones across generations </p>
                    <button className='tw-mx-5 tw-bg-[#90ee91] tw-text-white tw-px-3 tw-py-2 tw-rounded-md hover:tw-bg-[#78e67a] tw-duration-200'>Start Your Journey</button>
                    <button className='tw-mx-5 tw-bg-[#90ee91] tw-text-white tw-px-3 tw-py-2 tw-rounded-md hover:tw-bg-[#78e67a] tw-duration-200'>Create Your Family Tree</button>
                </section>

                <div className='tw-flex tw-justify-center'>
                    <img src={familyTree} width={600} className='tw-rounded-md ' alt="" />

                </div>

                <section className='tw-pt-10'>
                    <h1 className='tw-text-[#90ee91] tw-text-2xl tw-py-2 tw-font-medium'> Why Choose Our Family Tree Platform? </h1>
                    <p className='tw-pb-5 tw-pl-5'><span className='tw-font-medium tw-text-[#522420] tw-text-lg '>Build & Expand Your Tree :</span> Easily add family members, photos, and milestones.</p>
                    <p className='tw-pb-5 tw-pl-5'><span className='tw-font-medium tw-text-[#522420] tw-text-lg '>Discover Hidden Stories :</span> Uncover fascinating details with our historical records database.</p>
                    <p className='tw-pb-5 tw-pl-5'><span className='tw-font-medium tw-text-[#522420] tw-text-lg '>Collaborate with Family :</span> Invite family members to contribute and share memories.</p>
                </section>

                <section className='tw-pt-10'>
                    <h1 className='tw-text-[#90ee91] tw-text-2xl tw-py-2 tw-font-medium'> How It Works </h1>
                    <p className='tw-pb-5 tw-pl-5'><span className='tw-font-medium tw-text-[#522420] tw-text-lg '>Create an Account :</span> Sign up and start building your family tree in minutes.</p>
                    <p className='tw-pb-5 tw-pl-5'><span className='tw-font-medium tw-text-[#522420] tw-text-lg '>Add Family Members :</span> Add relatives, photos, and key moments to enrich your tree.</p>
                    <p className='tw-pb-5 tw-pl-5'><span className='tw-font-medium tw-text-[#522420] tw-text-lg '>Explore & Share :</span> Trace your lineage and share your tree with others.</p>
                </section>

                <section className='tw-py-16 '>
                    <h1 className='tw-text-black tw-text-2xl tw-py-2 tw-font-medium tw-text-center tw-pb-10'> What Our Users Say </h1>
                    <main className='tw-flex tw-justify-center tw-gap-x-10'>
                        <div className='tw-shadow-md tw-border tw-w-[30%] tw-rounded-lg tw-p-5'>
                            <p class="tw-font-bold tw-text-[#333] tw-text-lg">Prakash</p>
                            <p class="tw-text-[#777]"> discovered family connections I never knew existed!</p>
                        </div> <div className='tw-shadow-md tw-border tw-w-[30%] tw-rounded-lg tw-p-5'>
                            <p class="tw-font-bold tw-text-[#333] tw-text-lg">Thanigaivel</p>
                            <p class="tw-text-[#777]">The perfect tool to preserve our family legacy for future generations</p>
                        </div>
                    </main>
                </section>

                <section className='tw-py-10'>
                    <h1 className='tw-text-[#90ee91] tw-text-4xl tw-py-2 tw-font-medium tw-text-center'> Start Building Your Family’s Legacy Today </h1>
                    <div className=' tw-flex tw-justify-center tw-mt-10 tw-gap-x-20'>
                        <button className=' tw-bg-[#90ee91] tw-text-white tw-px-3 tw-py-2 tw-rounded-md hover:tw-bg-[#78e67a] tw-duration-200'>Get Started Now</button>
                        <button className=' tw-bg-[#90ee91] tw-text-white tw-px-3 tw-py-2 tw-rounded-md hover:tw-bg-[#78e67a] tw-duration-200'>Join the Community</button>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home