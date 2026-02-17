import React, { useState} from "react";
import { Carousel } from "react-bootstrap";
import { ImageList } from "../../data/herodata.js";
import './hero.css'

function Hero() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="hero-container">
                <Carousel activeIndex={index} onSelect={handleSelect}
                          indicators={true}     // dots
                          controls={true}      // no arrows
                          interval={4000}       // autoplay speed
                          pause={false}         // don't pause on hover
                          wrap={true}           // infinite loop
                >
                    {ImageList.map(({ id, img, title,textspan, description, buttons }) => (
                        <Carousel.Item key={id}>
                            <img src={img} className="d-block w-100" alt={`Slide ${id}`} />
                            <Carousel.Caption>
                                <div className="slider_des">
                                    <h5 className="heading">
                                        {title} <span> {textspan} </span>
                                    </h5>
                                    <p className="sub_text">
                                        {description}
                                    </p>
                                    {buttons && buttons.length > 0 && (
                                        <div className="button-group mt-3">
                                            {buttons.map(({ text, link }, index) => (
                                                <a
                                                    key={index}
                                                    href={link}
                                                    className="btn btn-light me-2"
                                                >
                                                    {text}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                </div>


                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}

                </Carousel>
            </div>
        </>
    )
}

export default Hero;