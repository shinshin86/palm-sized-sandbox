import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions } from 'material-ui/Card';

export default class CommentModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const styles = {
      card: {
        margin: "0 auto",
        padding: "20px",
      },
      userImage: {
        borderRadius: "50%",
        height: "50px",
        width: "50px",
      },
      userName: {
        display: "inline",
        margin: "2%",
      }
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const CardContent = () => (
      <Card style={styles.card}>
        <div className="card-content">
          <img className="user-image" src="http://placehold.it/50x50/007bff/fff.jpg" alt="user profile" style={styles.userImage} />
          <h3 className="user-name" style={styles.userName}>User Name</h3>
          <span className="card-title">Modal Example</span>
        </div>
        <div className="card-content">
          <p>
            XXXX: XXXX XXXX
          </p>
          <p>
            My favorite thing: Lorem Ipsum is simply dummy text.
          </p>
          <p>
            Sample1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <CardActions>
          <RaisedButton label="Comment" onClick={this.handleOpen} />
        </CardActions>
      </Card>
    );

    return (
      <div>
        {CardContent()}
        <Dialog
          title="Thank you! Comment!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Your Name"
            className="user-name"
          /><br />
          <TextField
            hintText="Your Comment"
            className="comment-text"
          /><br />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </Dialog>
      </div>
    );
  }
}

