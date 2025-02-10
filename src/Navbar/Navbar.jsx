export default function Navbar() {
    return (
        <nav>
            <ul className="hidden md:flex gap-x-4 lg:gap-x-[30px] *:text-sm lg:*:text-base *:text-white *:hover:text-primary *:transition-colors *:duration-500">
                <li><a href="#" className="text-primary">خانه</a></li>
                <li><a href="#">درباره ی ماه</a></li>
                <li><a href="#">خدمات</a></li>
                <li><a href="#">نمونه کارها</a></li>
                <li><a href="#">تیم</a></li>
                <li className="relative group">
                    <a href="#" className="flex items-center gap-0.5">
                        <span>لیست کشویی</span>
                        <img src="./images/svgs/arrow-down.svg" alt="arrow-down" className="w-4 h-4" />
                    </a>
                    <div className="drop-down-list right-3.5 mt-2.5">
                        <a href="#">لیست کشویی 1</a>
                        <div className="relative group">
                            <a href="#">
                                لیست کشویی عمیق
                                <div className="drop-down-list left-50">
                                    <a href="#">لیست کشویی عمیق 1</a>
                                    <a href="#">لیست کشویی عمیق 2</a>
                                    <a href="#">لیست کشویی عمیق 3</a>
                                    <a href="#">لیست کشویی عمیق 4</a>
                                    <a href="#">لیست کشویی عمیق 5</a>
                                </div>
                            </a>
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
