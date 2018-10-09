import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const authorData = (data) => {
    return data.map(element => {
        console.log('element: ', element)
        return (
            <Card className="m-4">
                <CardImg top width="100%" src={element.portrait_url} alt="Card image cap" />
                <CardBody>
                <CardTitle>Author</CardTitle>
                <CardSubtitle>{element.first_name} {element.last_name}</CardSubtitle>
                <CardText>{element.author_bio}</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        );
      })
}

const AuthorsPage = (props) => {
  return (
    <div>
        <section>
            <h2 className="m-3">Authors</h2>
            {props.loadAuthors.authors ? authorData(props.loadAuthors.authors) : null } 
        </section>
    </div>
  );
};

export default AuthorsPage;