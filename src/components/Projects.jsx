import React from 'react';
import Card from "./Card"


const Projects = () => {
    return (
        <>
            <section id="services" class="services">
                <div class="container">
                    <h1 class="section-heading"><strong>Projects Source Codes</strong></h1>
                    <p className="section-heading-p">Gel all my Projects Tutorials with source codes here</p>
                    <div class="card-wrapper">

                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;