import HeroCard from "../HeroCard/HeroCard"

export default function HeroSection() {
    let CardsInformation = [
        { id: 1, title: "متن نمایشی", imgUrl: "./images/svgs/chart.svg" },
        { id: 2, title: "نمودار کیفی", imgUrl: "./images/svgs/chart.svg" },
        { id: 3, title: "نمونه کار ها", imgUrl: "./images/svgs/chart.svg" },
        { id: 4, title: "عملکرد های پایانی", imgUrl: "./images/svgs/performance.svg" },
        { id: 4, title: "اطلاعات ذخیره شده", imgUrl: "./images/svgs/database.svg" },
    ]
    return (
        <section id="hero" className="main-hero relative w-full h-screen bg-fixed bg-cover bg-no-repeat bg-[bottom,center] text-white">
            <div className="container">
                <div className="absolute flex-center flex-col inset-0">
                    <div className="flex-center flex-col text-center">
                        <h1 className="text-3xl xs:text-[50px] font-Dana-DemiBold">
                            راه حل های قدرتمند دیجیتال با
                            <br />
                            <span className="text-primary">Kasuka</span>
                        </h1>
                        <p className="mt-2.5 text-xl xs:text-2xl">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
                    </div>
                    <div className="grid grid-cols-5 justify-center gap-6 mt-12">
                        <HeroCard {...CardsInformation[0]} />
                        <HeroCard {...CardsInformation[1]} />
                        <HeroCard {...CardsInformation[2]} />
                        <HeroCard {...CardsInformation[3]} />
                        <HeroCard {...CardsInformation[4]} />
                    </div>
                </div>
            </div>
        </section>
    )
}
