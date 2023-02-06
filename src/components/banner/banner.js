import './banner.scss'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../../assets/img/header-img.svg'
import { useEffect, useState } from 'react'

const Banner = () => {
    return (
        <div className='banner' id='home'>
            <Container>
                <Row className='align-item-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Việt Anh"}<br /><span className='wrap'>Intern ReactJS</span></h1>
                        <p>I like simplicity and novelty so I always try to make myself more valuable day by day. Currently I'm a Intern ReactJs. I can work with ReactJs and Javascript at a basic level. I'm trying to learn more day by day to become more proficient. Good communication and always listen to people. Proficiency in HTML, CSS, JavaScript, React.js</p>
                        <button onClick={() => console.log('connect')}>This is my CV</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner