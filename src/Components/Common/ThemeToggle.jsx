import React from "react";
import { connect } from "react-redux";

import { toggleTheme } from "../../actions/themeActions";
import "../../styling/themeToggle.css";
import "../../styling/header.css";

class ThemeToggle extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  handleThemeToggle = () => {
    if (this.props.theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      localStorage.setItem("themeIcon", "sun");
      this.props.toggleTheme("dark", "sun");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      localStorage.setItem("themeIcon", "moon");
      this.props.toggleTheme("light", "moon");
    }
  };

  render() {
    return (
      <div className="theme-toggle-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div
            className={this.props.themeIcon}
            onClick={(e) => this.handleThemeToggle(e)}
          ></div>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    themeIcon: state.themeIcon,
  };
};

export default connect(mapStateToProps, { toggleTheme })(ThemeToggle);
