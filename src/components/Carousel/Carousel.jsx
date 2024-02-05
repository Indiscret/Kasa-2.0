import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Carousel(slides) {

    const [current, setCurrent] = useState(0);
    const length = slides.pictures.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const previous = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    return (
        <div className="Carousel">
            {length > 1 && (
                <>
                    <div onClick={previous}>
                        <FontAwesomeIcon className="Left_arrow" icon={faChevronLeft} />
                    </div>
                    <div onClick={next}>
                        <FontAwesomeIcon className="Right_arrow" icon={faChevronRight} />
                    </div>
                    <p className="Carousel_number">{current + 1}/{slides.pictures.length}</p>
                </>
            )}
            {slides.pictures.map((image, index) => (
                <figure className="Lodging_slide" key={index}>
                    {index === current && (
                        <img className="Carousel_img" src={image} alt="Exemple du logement" />)}
                </figure>
            ))}
        </div>
    )
}

export default Carousel