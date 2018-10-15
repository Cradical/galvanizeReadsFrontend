import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
      <Card>
      <CardImg top width="100%" src="" alt="Card image cap" />
      <CardBody>
      <CardTitle>Author</CardTitle>
      <CardSubtitle>Title</CardSubtitle>
      <CardText>text</CardText>
      {/* <Button onClick={() => props.setAuthorId(element.id)}><Link to="/authorProfile" className="text-white">See More</Link></Button> */}
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </CardBody>
  </Card>
  </React.Fragment>
    );
  }
}