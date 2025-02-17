import HeroSection from "../HeroSection/HeroSection"
import AboutSection from "../AboutSection/AboutSection"
import ClientSection from "../ClientSection/ClientSection"
import Features from "../Features/Features"

export default function Main() {
    return (
        <main id="main" className="mb-50">
            <HeroSection />
            <AboutSection />
            <ClientSection />
            <Features />
        </main>
    )
}
