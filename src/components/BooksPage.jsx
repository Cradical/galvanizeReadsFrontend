import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const bookData = (books) => {
    return books.map(element => {
        console.log('element: ', element)
        return (
            <Card className="m-4">
                <CardImg top width="100%" src={element.book_cover_url} alt="Card image cap" />
                <CardBody>
                <CardTitle>{element.book_title}</CardTitle>
                <CardSubtitle>{element.book_genre}</CardSubtitle>
                <CardText>{element.book_description}</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        );
      })
}

const BooksPage = (props) => {
  return (
    <div>
        <section>
            <h2 className="m-3">The Books</h2>
            {props.loadBooks.books ? bookData(props.loadBooks.books) : null } 
        </section>
    </div>
  );
};

export default BooksPage;