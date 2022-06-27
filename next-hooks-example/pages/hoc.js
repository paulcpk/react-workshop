import { Component, memo, useCallback, useMemo, useState } from "react";
import styles from "../styles/Home.module.css";
import hookStyles from "../styles/Hooks.module.css";

const getFakeBrowserLocation = () => ({ city: "Paris", country: "FR" });

// We prefer React Hooks over HOCs these days
const withLocation = (WrappedComponent) => {
  class HOC extends Component {
    constructor(props) {
      super(props);
      // could be fetching data, browser location etc.
      const location = getFakeBrowserLocation();
      this.state = { ...props, location };
    }
    render() {
      // return another component
      return <WrappedComponent {...this.state} />;
    }
  }
  return HOC;
};

const Status = ({ name, mood, location }) => {
  const place = location ? location.city : 'the internet';
  return (
    <p>
      Hi, my name is {name} and my mood is {mood}, in {place}.
    </p>
  );
};

const StatusWithLocation = withLocation(Status);

export default function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Higher Order Components()</h1>
        <Status name="John" mood="Mediocre"  />
        <StatusWithLocation name="John" mood="Excellent" />
      </main>
    </div>
  );
}
