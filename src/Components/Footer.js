import React, { Component } from 'react';

class Footer extends Component {

  render() {

    const footerStyle = {
      textAlign: "center",
    }

    return (
      <footer style={footerStyle}>
        <div>
        <h5><b>@chnselim</b></h5>
        <a href="http://cihanselim.me" target="_blank"><h5><b>www.cihanselim.me</b></h5></a>
        </div>

        <div>
          <a href="https://github.com/chnselim" target="_blank"><img alt="" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_square_black-128.png" height="40px" width="40px"></img></a>
          <a href="https://linkedin.com/in/chnselim/" target="_blank"><img alt="" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_color-128.png" height="40px" width="40px"></img></a>
          <a href="https://twitter.com/chnselim" target="_blank"><img alt="" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_square-128.png" height="40px" width="40px"></img></a>
        </div>
      </footer>
    );
  }
}


export default Footer;
