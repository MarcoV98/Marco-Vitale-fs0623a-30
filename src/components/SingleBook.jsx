import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { img, title } = this.props;
    const { selected } = this.state;

    return (
      <Card
        style={{
          width: '50%',
          border: selected ? '3px solid red' : 'none',
        }}
        onClick={this.toggle}
      >
        <Card.Img
          src={img}
          alt={title}
          style={{ maxWidth: '50%' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
