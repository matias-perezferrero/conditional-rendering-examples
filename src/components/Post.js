import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      message: props.message,
    };
  }

  toggleEditing = (e) => {
    // console.log(e);
    this.setState({
      editing: !this.state.editing,
    });
  };

  render() {
    return (
      <div>
        <h1>I am a post, this is my message:</h1>
        {this.state.editing ? (
            <input value={this.state.message} placeholder="insert message" />
        ) : (
          <p>{this.props.message}</p>
        )}
        <button
          onClick={(e) => {
            this.toggleEditing(e);
          }}
        >
          {this.state.editing ? "Cancel" : "Edit"}
        </button>
        {this.state.editing ? <button>Save</button> : null}

        {/* <button onClick={this.toggleEditing}>Edit</button> */}
      </div>
    );
  }
}
