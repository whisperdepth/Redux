import React from "react";
import { ThemeContext } from "./themes-context";

class ThemeButton extends React.Component {
  render() {
    const { background, fontColor } = this.context;
    const style = {
      backgroundColor: `${background}`,
      color: `${fontColor}`,
    };

    return <button {...this.props} style={style} className="btn"></button>;
  }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;
