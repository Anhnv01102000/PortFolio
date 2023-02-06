import './skill.scss'
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTML from '../../assets/img/html5.png'
import CSS from '../../assets/img/css.png'
import JS from '../../assets/img/js.png'
import bootstrap from '../../assets/img/bootstrap.png'
import react from '../../assets/img/react.png'
import sass from '../../assets/img/sass.png'
import colorSharp from "../../assets/img/color-sharp.png"

const Skill = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                My Skills
                            </h2>
                            <p>
                                Some of my skills in programming.
                                <br />
                                The assessment is only subjective by myself, thank you
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={HTML} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={CSS} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={JS} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={sass} alt="Image" />
                                    <h5>Sass</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default Skill