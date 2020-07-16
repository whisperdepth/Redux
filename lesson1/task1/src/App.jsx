import React from "react";
import ThemeButton from "./ThemesButton";
import { themes, ThemeContext } from "./themes-context";

class App extends React.Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    const newTheme =
      this.state.theme === themes.dark
        ? (this.state.theme = themes.light)
        : (this.state.theme = themes.dark);
    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButton onClick={this.toggleTheme}>Dynamic Theme</ThemeButton>
        </ThemeContext.Provider>
        <ThemeButton onClick={this.toggleTheme}>Default Theme</ThemeButton>
      </div>
    );
  }
}

export default App;
