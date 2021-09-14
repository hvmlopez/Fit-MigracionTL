import { Component } from "react";
export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <b>{this.props.value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small">-</button>
          <button className="button is-success is-small">+</button>
        </div>
      </div>
    );
  }
}
