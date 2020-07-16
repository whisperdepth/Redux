import React from "react";
import ThemeButton from "./ThemesButton";
import { themes, ThemeContext } from "./themes-context";

const { dark, light } = themes;

class App extends React.Component {
  state = {
    theme: light,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === dark
        ? (this.state.theme = light)
        : (this.state.theme = dark);
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButton onClick={this.toggleTheme}>Dynamic theme</ThemeButton>
        </ThemeContext.Provider>
        <ThemeButton onClick={this.toggleTheme}>Default theme</ThemeButton>
      </div>
    );
  }
}

export default App;
