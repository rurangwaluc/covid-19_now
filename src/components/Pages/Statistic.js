import React from 'react';

import { Cards, CountryPicker, Chart } from '../../components';
import { fetchData } from '../../api/';
import styles from './statistics.module.css';

import image from '../../images/image.png';
import Navbar from '../Layout/Navbar'

class Statistic extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div>
      <Navbar />

      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <div className='mb-4'>

        <Cards data={data} />
        </div>

        <Chart data={data} country={country} /> 
      
      </div>
      </div>
    );
  }
}

export default Statistic;