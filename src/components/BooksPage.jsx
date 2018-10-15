import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardColumns, Button } from 'reactstrap';
import { Link } from '@reach/router'

const bookData = (books) => {
    return books.map(element => {
        return (
            <Card>
                <CardImg top width="100%" src={element.book_cover_url} alt="Card image cap" />
                <CardBody>
                <CardTitle>{element.book_title}</CardTitle>
                <CardSubtitle>{element.book_genre}</CardSubtitle>
                <CardText>{element.book_description}</CardText>
                <Button><Link to="/bookauthors" className="text-white">See Authors</Link></Button>
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
            <CardColumns className="mx-2">
                {props.loadBooks.books ? bookData(props.loadBooks.books) : null } 
            </CardColumns>
        </section>
    </div>
  );
};

export default BooksPage;