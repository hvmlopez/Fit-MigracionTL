import "./App.css";

import { Component } from "react";
import Counter from "./components/Counter";
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <section className="section">
          <h1 className="title">ReactJS</h1>
          <h2 className="subtitle">Interview Exercise</h2>
          <p>
            <strong>Instructions:</strong> Fork this codepen and modify it per
            the instructions below within 30-40 minutes. The tasks are presented
            in priority order.
          </p>
          <p>
            There are 2 components in this application: <strong>Counter</strong>{" "}
            and <strong>App</strong>. The steps below will take you through
            modifying and adding components to change functionality and
            implementation.
          </p>
          <ol className="instructions">
            <li>
              Update the Counter component to take <code>onIncrement</code> and{" "}
              <code>onDecrement</code> callbacks as props and ensure they update
              the counter's values independently. note: forzallooo{" "}
            </li>
            <li>
              Move the global lo mismo pero con component state <code>data</code> array to the component state for
              the <code>App</code> component.
            </li>
            <li>
              Render a fourth <code>Counter</code> component and ensure it's
              value is updated independently from the others.
            </li>
            <li>
              <strong>Extra Credit: </strong>Create a <code>Total</code>{" "}
              component, which should display below the <code>Counter</code>{" "}
              components and always display the running total of all the{" "}
              <code>Counter</code> values.
            </li>
          </ol>
        </section>
        <section className="section">
          {data.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
            />
          ))}
        </section>
      </div>
    );
  }
}
