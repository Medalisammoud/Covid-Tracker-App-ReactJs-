import React from "react";
import styles from "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from "./api";
import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetcheddata = await fetchData();

    this.setState({ data: fetcheddata });
  }

  handleCountryChange = async (country) => {
    const fetcheddata = await fetchData(country);
    this.setState({ data: fetcheddata, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default React.memo(App);
