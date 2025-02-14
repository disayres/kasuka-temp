import Header from "./Header/Header";
import MobileMenu from "./MobileMenu/MobileMenu"
import MainSection from "./MainSection/MainSection"
import Overlay from "./Overlay/Overlay"

function App() {
  return (
    <div className="app">
      <Header />
      <MobileMenu />
      <MainSection />
      <Overlay />
    </div>
  );
}

const resetMobileStructure = () => {
  let mobileMenuElement = document.querySelector('#mobile-menu')
  let subMenuElements = document.querySelectorAll('.sub-menu')
  let overlayElem = document.querySelector('#overlay')

  if (window.innerWidth >= 768) {
    mobileMenuElement.classList.add('hidden')
    overlayElem.classList.remove('overlay-visible')
    subMenuElements.forEach(sub => {
      if (!sub.className.includes('sub-menu--open')) {
        sub.classList.add('sub-menu--open')
      }
    })
  }
}
window.addEventListener('resize', resetMobileStructure)

export default App