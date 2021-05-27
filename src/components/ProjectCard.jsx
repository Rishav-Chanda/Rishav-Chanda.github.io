import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, Row, Col, Container,
  CardSubtitle, CardBody
} from 'reactstrap';

const ProjectCards = () => {
  return (
    <>
      <Card className="shadow mb-5">
        <CardImg top width="100%" src="https://firebasestorage.googleapis.com/v0/b/login-ea5e2.appspot.com/o/20210524_214345.jpg?alt=media&token=6ba7aa59-aeb3-4352-bef6-98bdb1cd4157" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button className="btn btn-card text-center ">View Project</Button>
        </CardBody>
      </Card>

    </>

  );
};

export default ProjectCards;