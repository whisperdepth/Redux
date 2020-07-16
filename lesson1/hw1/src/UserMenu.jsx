import React from "react";
import { UserContext } from "./user-context";

class UserMenu extends React.Component {
  render() {
    console.log(this.context);
    const { name, avatar_url } = this.context;

    return (
      <>
        <span className="menu__greeting">Hello, {name}</span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar"></img>
      </>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
