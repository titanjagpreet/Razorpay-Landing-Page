export function FeatureSectionOne() {

    return <>
        <section className="w-full !h-auto !mt-14 pt-[20rem] flex flex-col
        items-center">

            {/* Part1 */}
            <div className="w-full flex flex-col items-center justify-center gap-3 !mt-10 !mb-6">
                <div>
                    <h2 className="text-black !text-[24px] !font-extrabold">
                        Accept Payments with Razorpay Payment Suite
                    </h2>
                </div>

                <div className="w-6 h-1 bg-[#61CEA6]"></div>
            </div>

            {/* Part2 */}
            <div className=" flex flex-row items-center justify-center">

                <div className="w-[71%] flex flex-col items-center justify-center md:flex-row 
                !border border-solid !border-gray-200 rounded-md ">

                    {/* Left Side Content */}
                    <div className="!space-y-14 !py-12 !px-10 md:py-0 md:pl-0 md:w-1/2">
                        <div>
                            <h2 className="text-black !text-[27px] !font-bold leading-10">
                                Supercharge your business with the all‑powerful{' '}
                                <span className="text-blue-500">Payment Gateway</span>
                            </h2>
                        </div>

                        <div className="!space-y-2">

                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                100+ Payment Methods
                            </p>

                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Industry Leading Success Rate
                            </p>

                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Superior Checkout Experience
                            </p>

                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Easy to Integrate
                            </p>

                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Instant Settlements from day 1
                            </p>

                            <p className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 stroke-green-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                In-depth Reporting and Insights
                            </p>

                        </div>

                        <div className="flex items-center gap-5 flex-col md:flex-row">

                            <a href="#" rel="noopener noreferrer" >
                                <button className="!text-white !font-bold cursor-pointer !bg-blue-500 !rounded-md h-[50px] w-[160px] flex items-center justify-center gap-1.5">
                                    Sign Up Now

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </a>

                            <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                Know More {'>'}
                            </a>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="z-0 w-full md:w-[50%]">
                        <img src="./src/assets/payment-suite.png" alt="Payment" className="w-full h-full object-contain" />
                    </div>

                </div>

            </div>


            {/* Another Part */}
            <div className="w-full justify-center !mt-10 !h-auto pt-[20rem] flex flex-col items-center">

                <div className=" w-[71%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {/* Box1 */}
                    <div className="cursor-pointer !p-5 flex flex-col gap-4">

                        <div className="flex items-center justify-between">
                            <h2 className="text-black !text-[22px] !font-bold">
                                Payment Links
                            </h2>

                            <img src="./src/assets/payment-link-icon.svg" alt="" className="bg-[#2B84EA] rounded-4xl w-12 h-12 object-contain" />
                        </div>

                        <div className="flex flex-col gap-11">
                            <p className="!text-[16px] text-[#818597] !leading-6">
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>

                            <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                Know More {'>'}
                            </a>
                        </div>
                    </div>

                    {/* Box2 */}
                    <div className="cursor-pointer !p-5 flex flex-col gap-4">
                        
                        <div className="flex items-center justify-between">
                            <h2 className="text-black !text-[22px] !font-bold">
                                Payment Links
                            </h2>

                            <img src="./src/assets/payment-link-icon.svg" alt="" className="bg-[#2B84EA] rounded-4xl size-12" />
                        </div>

                        <div className="flex flex-col gap-11">
                            <p className="!text-[16px] text-[#818597] !leading-6">
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>

                            <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                Know More {'>'}
                            </a>
                        </div>
                    </div>

                    {/* Box3 */}
                    <div className="cursor-pointer !p-5 flex flex-col gap-4">
                        
                        <div className="flex items-center justify-between">
                            <h2 className="text-black !text-[22px] !font-bold">
                                Payment Links
                            </h2>

                            <img src="./src/assets/payment-link-icon.svg" alt="" className="bg-[#2B84EA] rounded-4xl size-12" />
                        </div>

                        <div className="flex flex-col gap-11">
                            <p className="!text-[16px] text-[#818597] !leading-6">
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>

                            <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                Know More {'>'}
                            </a>
                        </div>
                    </div>

                    {/* Box4 */}
                    <div className="cursor-pointer !p-5 flex flex-col gap-4">
                        
                        <div className="flex items-center justify-between">
                            <h2 className="text-black !text-[22px] !font-bold">
                                Payment Links
                            </h2>

                            <img src="./src/assets/payment-link-icon.svg" alt="" className="bg-[#2B84EA] rounded-4xl size-12" />
                        </div>

                        <div className="flex flex-col gap-11">
                            <p className="!text-[16px] text-[#818597] !leading-6">
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>

                            <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                Know More {'>'}
                            </a>
                        </div>
                    </div>

                    {/* Box5 */}
                    <div className="cursor-pointer !p-5 flex flex-col gap-4">
                        
                        <div className="flex items-center justify-between">
                            <h2 className="text-black !text-[22px] !font-bold">
                                Payment Links
                            </h2>

                            <img src="./src/assets/payment-link-icon.svg" alt="" className="bg-[#2B84EA] rounded-4xl size-12" />
                        </div>

                        <div className="flex flex-col gap-11">
                            <p className="!text-[16px] text-[#818597] !leading-6">
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>

                            <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                Know More {'>'}
                            </a>
                        </div>
                    </div>

                    {/* Box6 */}
                    <div className="cursor-pointer !p-5 flex flex-col gap-4">
                        
                        <div className="flex items-center justify-between">
                            <h2 className="text-black !text-[22px] !font-bold">
                                Payment Links
                            </h2>

                            <img src="./src/assets/payment-link-icon.svg" alt="" className="bg-[#2B84EA] rounded-4xl size-12" />
                        </div>

                        <div className="flex flex-col gap-11">
                            <p className="!text-[16px] text-[#818597] !leading-6">
                                Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more
                            </p>

                            <a href="#" className="text-[16px] font-bold !text-[#0B72E7] hover:text-blue-100 ">
                                Know More {'>'}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}