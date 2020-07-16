import React from "react";
import { ThemeContext } from "./themes-context";

class ThemedButton extends React.Component {
  render() {
    const { background, fontColor } = this.context;
    const style = {
      backgroundColor: `${background}`,
      color: `${fontColor}`,
    };

    return <button {...this.props} style={style} className="btn"></button>;
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
