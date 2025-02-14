export default function Navbar() {
    return (
        <nav id="navigation">
            <ul className="hidden md:flex gap-x-4 lg:gap-x-[30px] *:text-sm lg:*:text-base *:text-white *:hover:text-primary *:transition-colors *:duration-500">
                <li><a href="#" className="text-primary">خانه</a></li>
                <li><a href="#">درباره ی ماه</a></li>
                <li><a href="#">خدمات</a></li>
                <li><a href="#">نمونه کارها</a></li>
                <li><a href="#">تیم</a></li>
                <li className="relative group">
                    <a href="#" className="flex items-center gap-0.5">
                        <span>لیست کشویی</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                    <div className="drop-down-menu group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2.5 right-3.5 mt-2.5">
                        <a href="#">لیست کشویی 1</a>
                        <div className="hover:*:opacity-100 hover:*:visible hover:*:translate-x-0">
                            <div>
                                <a href="#" className="flex items-center gap-x-0.5">
                                    <span>لیست کشویی عمیق</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </a>
                            </div>
                            <div className="drop-down-menu -translate-x-2.5 left-50 delay-200">
                                <a href="#">لیست کشویی عمیق 1</a>
                                <a href="#">لیست کشویی عمیق 2</a>
                                <a href="#">لیست کشویی عمیق 3</a>
                                <a href="#">لیست کشویی عمیق 4</a>
                                <a href="#">لیست کشویی عمیق 5</a>
                            </div>
                        </div>
                        <a href="#">لیست کشویی 2</a>
                        <a href="#">لیست کشویی 3</a>
                        <a href="#">لیست کشویی 4</a>
                    </div>
                </li>
                <li><a href="#">تماس باما</a></li>
            </ul>
        </nav>
    )
}
