import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      comments: [],
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
      <div>
        <Card
          style={{
            width: '50%',
            border: selected ? '3px solid red' : 'none',
          }}
          onClick={this.toggle}
        >
          <Card.Img src={img} alt={title} style={{ maxWidth: '50%' }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>

        {selected && <CommentArea selectedBook={this.props} />}
      </div>
    );
  }
}

export default SingleBook;
