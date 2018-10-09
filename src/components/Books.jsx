import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Books = (props) => {
  return (
    <div>
      <Card className="m-4">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Books</CardTitle>
          <CardSubtitle>The G.Reads Library</CardSubtitle>
          <CardText>Check out the books on our digital shelves. Great for gaining new skills.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Books;