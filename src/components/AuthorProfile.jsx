//This component is to display one author and the books associated with that author.

import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  const AuthorProfile = (props) => {
    console.log(props.booksAuthors)

    const filterAuthorById = props.loadAuthors.authors.filter(auth => {
      return auth.id === props.authorId
    })

    const filterBooks = props.booksAuthors.filter(book => {
      return book.portrait_url === filterAuthorById[0].portrait_url
    })
    console.log('filterbooks: ', filterBooks)
    
    const createAuthorCard = (author) => {
      return (
      <Card className="mx-3 mt-4">
            <CardImg top width="100%" src={author[0].portrait_url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{author[0].first_name} {author[0].last_name}</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>{author[0].author_bio}</CardText>
            </CardBody>
          </Card>
      )
    }

    const createBookCard = (books) => {
      return books.map(element => {
        return (
          <Card className="mx-3 mt-4">
            <CardImg top width="100%" src={element.book_cover_url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{element.book_title}</CardTitle>
              <CardSubtitle>{element.book_genre}</CardSubtitle>
              <CardText>{}</CardText>
            </CardBody>
          </Card>
        )
      })
    }

  return (
    <div>
      <h3 className="ml-3 mt-3">Author's Profile</h3>
      {props.loadAuthors.authors ? createAuthorCard(filterAuthorById) : null } 
      {props.loadAuthors.authors ? createBookCard(filterBooks) : null } 
    </div>
  );
  
};

export default AuthorProfile;