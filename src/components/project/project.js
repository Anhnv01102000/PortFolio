import './project.scss'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../projectCard/projectCard";
import coffeeShop from "../../assets/img/coffee-shop.png";
import restaurantMenu from "../../assets/img/restaurant-menu.png";
import film from "../../assets/img/film.png";
import portfolio from "../../assets/img/portfolio.png";
import todoList from "../../assets/img/todo-list.png";

import colorSharp2 from "../../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            link: 'https://cineflex-1102.netlify.app',
            title: "Film with API",
            description: "Design & Development",
            imgUrl: film,
        },
        {
            link: 'https://coffee-shop-1102.netlify.app',
            title: "Coffee Shop",
            description: "Design & Development",
            imgUrl: coffeeShop,
        },
        {
            link: 'https://taste-retaurant-1102.netlify.app',
            title: "Restaurant Menu",
            description: "Design & Development",
            imgUrl: restaurantMenu,
        },
        {
            link: 'https://portfolio-1102.netlify.app',
            title: "Portfolio",
            description: "Design & Development",
            imgUrl: portfolio,
        },
        {
            title: "Todo List",
            description: "Design & Development",
            imgUrl: todoList,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>A few of my projects that I did while studying.</p>
                                    <div className='proj-item'>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}