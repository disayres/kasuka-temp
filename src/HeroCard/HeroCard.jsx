import PropTypes from "prop-types";
export default function HeroCard({ title, imgUrl }) {
    return (
        <div id="hero-card" className="flex-center flex-col border border-white/30 rounded-sm py-7.5 px-5 transition-colors cursor-pointer hover:border-primary">
            <img className="size-8" src={imgUrl} alt="hero-card-image" />
            <h4 className="font-Dana-Medium mt-2.5 text-lg xs:text-xl"> {title} </h4>
        </div>
    );
}

HeroCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};