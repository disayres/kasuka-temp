import HeroCard from "../HeroCard/HeroCard"

export default function HeroSection() {
    return (
        <section id="hero" className="main-hero relative w-full h-screen bg-fixed bg-cover bg-no-repeat bg-[bottomx,center] text-white bgatta">
            <div className="container">
                <div className="absolute flex-center flex-col inset-0">
                    <div className="flex-center flex-col text-center">
                        <h1 className="text-[50px] font-Dana-DemiBold">
                            راه حل های قدرتمند دیجیتال با
                            <br />
                            <span className="text-primary">Kasuka</span>
                        </h1>
                        <p className="mt-2.5 text-2xl">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <HeroCard />
                        <HeroCard />
                        <HeroCard />
                        <HeroCard />
                        <HeroCard />
                    </div>
                </div>
            </div>
        </section>
    )
}
