import React from "react";
import { Helmet } from "react-helmet";

class Title extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Email Auto Sender</title>
        </Helmet>
      </div>
    );
  }
}
export default Title;
