export default function MobileMenu() {
    return (
        <div id="mobile-menu" className="Mobile-menu w-9/10 mx-auto z-200 fixed inset-0 mt-8 hidden">
            <div className="inline-block mb-4 cursor-pointer" onClick={closeMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <ul className="bg-white py-2.5 px-5 font-bold space-y-5 h-9/10">
                <li><a href="#">خانه</a></li>
                <li><a href="#">درباره ی ما</a></li>
                <li><a href="#">خدمات</a></li>
                <li><a href="#">نمونه کارها</a></li>
                <li><a href="#">تیم</a></li>
                <li>
                    <div className="flex-between" onClick={openSubMenu}>
                        <a href="#">لیست کشویی</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    <ul id="mobile-submenu-1" className="sub-menu sub-menu--open bg-white shadow-md mt-2.5 py-2.5 px-5 font-bold space-y-5 h-9/10">
                        <li><a href="#">لیست کشویی 1</a></li>
                        <li>
                            <div onClick={openSubMenu2} className="flex-between">
                                <a href="#">لیست کشویی عمیق</a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                        </li>
                        <ul id="mobile-submenu-2" className="sub-menu sub-menu--open bg-white shadow-md mt-2.5 py-2.5 px-5 font-bold space-y-5 h-9/10">
                            <li><a href="#">لیست کشویی عمیق 1</a></li>
                            <li><a href="#">لیست کشویی عیمق 2</a></li>
                            <li><a href="#">لیست کشویی عمیق 3</a></li>
                            <li><a href="#">لیسست کشویی عمیق 4</a></li>
                            <li><a href="#">لیست کشویی عمیق 5</a></li>
                        </ul>
                        <li><a href="#">لیست کشویی 2</a></li>
                        <li><a href="#">لیست کشویی 3</a></li>
                        <li><a href="#">لیست کشویی 4</a></li>
                    </ul>
                </li>
                <li><a href="#">تماس باما</a></li>
            </ul>
        </div>
    );
}

let $ = document

const closeMobileMenu = () => {
    let mobileMenuElement = $.querySelector('#mobile-menu');
    let overlayElem = $.querySelector('#overlay')
    let subMenuElements = $.querySelectorAll('.mobile-submenu')

    mobileMenuElement.classList.add('hidden');
    overlayElem.classList.remove('overlay-visible')
    subMenuElements.forEach(sub => {
        sub.classList.add('hidden')
    })

}

const openSubMenu = () => {
    let subMenuElement1 = $.querySelector('#mobile-submenu-1')
    subMenuElement1.classList.toggle('sub-menu--open')
}
const openSubMenu2 = () => {
    let subMenuElement2 = $.querySelector('#mobile-submenu-2')
    subMenuElement2.classList.toggle('sub-menu--open')
}