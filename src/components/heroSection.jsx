export function HeroSection() {
    return <>
        <section className="required bg-[#02042A] w-full flex justify-center">

            <div className="w-[71%] flex flex-col justify-between items-center mx-auto md:flex-row gap-5">
                {/* left part */}
                <div className="!space-y-7">

                    <h1 className="text-white !text-[38px] !font-bold !leading-[1.3] tracking-wide">
                        Power your finance, grow your business
                    </h1>

                    <div className="w-6 h-1 bg-[#61CEA6]"></div>

                    <p className="text-[#B4B4C0] font-sans text-[18px] leading-7">
                        Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.
                    </p>

                    <button className="!bg-[#3395FF] !text-white !rounded-md !font-bold w-34 h-[50px] cursor-pointer
                     hover:bg-[#2B84EA] transition-all duration-200 ">
                        Sign Up Now
                    </button>

                </div>

                {/* right part */}
                <div>
                    <img src="./src/assets/hero-illustration.jpg" alt="" className="w-full"/>
                </div>
            </div>

        </section>

        {/* Hero Shape */}
            <div >
                <img src="./src/assets/hero-shape.svg" alt="hero-shape" className="bg-white w-full"/>
            </div>
    </>
}