import FeatureItems from "../FeatureItems/FeatureItems"

export default function Features() {
    return (
        <>
            <section id="features">
                <div className="container">
                    <div className="flex-between gap-x-4">
                        <div className="rounded-xl overflow-hidden">
                            <img src="./images/features.jpg" alt="features-bg" className="max-w-[660px] w-full" />
                        </div>
                        <div className="space-y-8">
                            <FeatureItems title="تبلیغ سختی است" text="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شو" />
                            <FeatureItems title="کدام یک از اینهاست" text="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند" />
                            <FeatureItems title="یا کور شده است" text="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند" />
                            <FeatureItems title="حقیقت مبارک" text="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
