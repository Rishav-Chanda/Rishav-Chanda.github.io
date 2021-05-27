import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, Row, Col, Container,
    CardSubtitle, CardBody
} from 'reactstrap';

const TutorialCards = () => {
    return (
        <>
            <div className="project-card mb-5 shadow">
                <img  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="80" height="80" />
                <h2>FIGMA</h2>
                <p>I use this tool very less , basically I use this for creating animations in the android app</p>
            </div>

        </>

    );
};

export default TutorialCards;