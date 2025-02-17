import PropTypes from 'prop-types';

export default function ClientCards({ imgUrl }) {
    return (
        <>
            <div className="swiper-slide">
                <div id="client-card" className="w-29">
                    <img src={imgUrl} alt="client-card-image" />
                </div>
            </div>
        </>
    )
}

ClientCards.propTypes = {
    imgUrl: PropTypes.string.isRequired,
};
