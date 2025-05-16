export function FeatureSectionTwo() {

    return <>
        <section className="relative bg-[url('./assets/feature-section2-bg.svg')] bg-no-repeat bg-[length:205%]
            w-full !mt-10 flex flex-col items-center !pb-150 bg-[left_40%_top_10%_right_30%]">

            <div className="!mt-42 mx-auto my-auto relative ">

                {/* Heading */}
                <div className="w-full flex flex-col items-center justify-center gap-3 !mt-40 !mb-6">
                    <div>
                        <h2 className="text-white !text-[24px] !font-bold">
                            Explore Razorpay Business Banking
                        </h2>
                    </div>

                    <div className="w-6 h-1 bg-[#61CEA6]"></div>
                </div>

                {/* Feature Section */}
                <div className=" flex flex-row items-center justify-center !mt-7">

                    <div className="w-[98%] flex flex-col items-center justify-center md:flex-row 
                    !border border-solid !border-[#4B5563] rounded-md ">

                        {/* Left Side Content */}
                        <div className="!space-y-12 !py-12 !px-10 md:py-0 md:pl-0 md:w-1/2">
                            <div>
                                <h2 className="text-white !text-[27px] !font-bold leading-10 flex flex-wrap items-center gap-2">
                                    Manage your company’s finances
                                </h2>

                                <h2 className="flex flex-row text-white !text-[27px] !font-bold leading-10 flex-wrap items-center gap-2">
                                    with
                                    <img src="./src/assets/razorpayX-logo.svg" alt="" className="!h-8 inline-block !mt-1" />
                                    <span className="text-[#61CEA6]">Business Banking</span>
                                </h2>
                            </div>

                            {/* Features */}
                            <div className="!space-y-2">
                                <p className="flex items-center gap-2  text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Open a fully digital current account
                                </p>

                                <p className="flex items-center gap-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Automate payables & compliment payments
                                </p>

                                <p className="flex items-center gap-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Simplify and track spends with Corporate cards
                                </p>

                                <p className="flex items-center gap-2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    View financial insights at a glance
                                </p>

                            </div>

                            <div className="flex items-center gap-5 flex-col md:flex-row">

                                <a href="#" rel="noopener noreferrer" >
                                    <button className="!text-white !font-bold cursor-pointer !bg-blue-500 !rounded-md h-[50px] w-[160px] flex items-center justify-center gap-3.5">
                                        Sign Up

                                        <div className="w-12 h-[60px] bg-[#61CEA6] flex items-center justify-center !skew-x-15">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 -skew-x-15">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>

                                    </button>
                                </a>

                                <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                    Know More {'>'}
                                </a>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="z-0 w-full md:w-[50%] hidden md:block">
                            <img src="./src/assets/business-banking.png" alt="Payment" className="w-full h-full !object-contain" />
                        </div>

                    </div>

                </div>

                {/* Nav */}
                <div className="w-[98%] !mx-auto flex flex-col items-center justify-center md:flex-row 
                    !border border-solid !border-[#4B5563] rounded-md !mt-25 gap-4 !p-7">

                    <h2 className="text-white font-bold !text-xl !text-center">
                        Check out the live demo to learn how RazorpayX works.
                    </h2>

                    <h2 className="text-white !font-extrabold">
                        No sign-up required!
                    </h2>

                    <a href="#" rel="noopener noreferrer" >
                        <button className="!text-white !font-bold cursor-pointer !bg-blue-500 !rounded-md h-[50px] w-[250px] flex items-center justify-center gap-3.5">
                            Check out the demo

                            <div className="w-12 h-[60px] bg-[#61CEA6] flex items-center justify-center !skew-x-15">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 -skew-x-15">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                        </button>
                    </a>
                </div>

            </div>
        </section>

        <section>
            
        </section>
    </>
}