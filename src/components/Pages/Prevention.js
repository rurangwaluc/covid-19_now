import React, { Component } from 'react';
import Navbar from '../Layout/Navbar'

export default class Prevention extends Component {
  render() {
    return (
      <div>
          <Navbar />
        <div className="container">
          <h1 className='sh text-center p-5'>Prevent COVID-19</h1>
          <div className='text'>   
          
          <p>Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest news.</p>
          
          <span>You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:</span>
          <ul>
            <li> <strong> Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</strong>
            <br/>

              Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.</li>

            <li><strong>Avoid touching eyes, nose and mouth.</strong>
            <br/>

                      Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.</li>

            <li><strong>Make sure you, and the people around you, follow good respiratory hygiene.</strong> This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</li>

            <li><strong>Stay home if you feel unwell.</strong> If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.
            <br/>
              Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.</li>

            <li><strong>Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely).</strong> If possible, avoid traveling to places  – especially if you are an older person or have diabetes, heart or lung disease.
                          <br/>
          Why? You have a higher chance of catching COVID-19 in one of these areas.</li>
          </ul>
          </div>

        </div>
      </div>
    )
  }
}
