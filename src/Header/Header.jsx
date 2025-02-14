import Navbar from "../Navbar/Navbar"

export default function Header() {
  return (
    <header id="header" className="text-white bg-black/80 z-100 fixed top-0 left-0 right-0 py-4">
      <div className="container flex-between">
        <div className="flex-center">
          <img className="max-h-10 max-w-full" src="./images/logo.png" />
          <h4 className="text-[32px] font-Morabba-Bold">Kasuka</h4>
        </div>
        <Navbar></Navbar>
        <div className="flex-between gap-x-0.5">
          <a href="#" className="border-2 text-sm hover:bg-primary-bold hover:text-black transition-colors duration-300 h-10 w-[85px] flex-center border-primary rounded-sm">شروع</a>
          <div onClick={showMobileMenu} className="cursor-pointer">
            <svg className="size-6 inline-block md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

        </div>
      </div>
    </header>
  )
}

const showMobileMenu = () => {
  let mobileMenuElement = document.querySelector('#mobile-menu');
  let overlayElem = document.querySelector('#overlay')
  mobileMenuElement.classList.remove('hidden');
  overlayElem.classList.add('overlay-visible')
}