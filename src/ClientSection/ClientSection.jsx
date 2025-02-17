import React, { useEffect } from "react";
import ClientCards from "../ClientCards/ClientCards"
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function ClientSection() {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 50,
            loop: true,
            breakpoints: {
                640: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                }
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }, []);
    return (
        <section id="Client" className="my-15">
            <div className="container">
                <div className="swiper">
                    <div className="swiper-wrapper cursor-pointer mb-10">
                        <ClientCards imgUrl={'./images/Client/client-1.png'} />
                        <ClientCards imgUrl={'./images/Client/client-2.png'} />
                        <ClientCards imgUrl={'./images/Client/client-3.png'} />
                        <ClientCards imgUrl={'./images/Client/client-4.png'} />
                        <ClientCards imgUrl={'./images/Client/client-5.png'} />
                        <ClientCards imgUrl={'./images/Client/client-6.png'} />
                        <ClientCards imgUrl={'./images/Client/client-7.png'} />
                        <ClientCards imgUrl={'./images/Client/client-8.png'} />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}