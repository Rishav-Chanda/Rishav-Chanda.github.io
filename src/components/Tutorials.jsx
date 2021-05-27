import React from 'react';
import Card from "./TutorialsCards"


const Tutorials = () => {
    return (
        <>
            <section id="services" class="tutorials section">
                <div class="container">
                    <h1 class="section-heading"><strong>Coding Courses</strong></h1>
                    <p className="section-heading-p">Gel all Coding Tutorials of different Programming languages and frame work tap to watch</p>
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

export default Tutorials;