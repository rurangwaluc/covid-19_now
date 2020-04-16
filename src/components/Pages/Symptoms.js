import React, { Component } from 'react';
import Navbar from '../Layout/Navbar'

export default class Symptoms extends Component {
  render() {
    return (
      <div>
          <Navbar />
        <div className="container">
          <h1 className='sh text-center p-5'>Symptoms of COVID-19</h1>
          <div className='text'>   
          
          <p>People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.</p>
          <p>More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.</p>
          <span>People may experience:</span>
          <ul>
            <li><strong>Cough.</strong></li>
            <li><strong>Fever.</strong></li>
            <li><strong>Tiredness.</strong></li>
            <li><strong>Difficulty breathing (severe cases).</strong></li>
          </ul>
          </div>

        </div>
      </div>
    )
  }
}
