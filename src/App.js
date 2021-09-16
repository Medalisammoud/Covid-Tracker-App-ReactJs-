import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetcheddata = await fetchData();

    this.setState({ data: fetcheddata });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default React.memo(App);