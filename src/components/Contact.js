import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="" />

        <div className="">
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <div
              className={this.state.online ? "status-online" : "status-offline"}
              onClick={(event) => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
              }}
            />
            <p className="status-text">
              {this.props.online ? "online" : "offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.string.isRequired,
};

export default Contact;

/*
function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="" />

      <div className="">
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}
*/
