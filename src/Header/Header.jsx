import Navbar from "../Navbar/Navbar"

export default function Header() {
  return (
    <header className="text-white bg-black/80 z-1000 fixed top-0 left-0 right-0 py-4">
      <div className="container flex-between">
        <div className="flex-center">
          <img className="max-h-10 max-w-full" src="./images/logo.png" />
          <h4 className="text-[32px] font-Morabba-Bold">Kasuka</h4>
        </div>
        <Navbar></Navbar>
        <div className="flex items-center justify-between gap-x-0.5">
          <a href="#" className="border-2 text-sm hover:bg-primary hover:text-black transition-colors duration-300 h-10 w-[85px] flex-center border-primary rounded-sm">شروع</a>
          <img src="./images/svgs/bars.svg" alt="mobile-menu-icon" className="size-6 inline-block md:hidden" />
        </div>
      </div>
    </header>
  )
}
