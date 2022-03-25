import React, { Component } from 'react';

import './common.css';
import './daily-picture.css';

const API_KEY = 'MEoO7YylHDB6roN3JwzJjdGi7axaUEAVcaF0mYLC';

async function fetchPictureUrl(key = API_KEY) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

  // fetches the json from the api and turns it into a format that javascript can understand
  const response = await fetch(url);

  const data = await response.json();

  return data.url;
}

export default class DailyPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgPath: null,
    };
  }

  // when the component is create, fetch the image
  componentDidMount() {
    fetchPictureUrl().then((imgPath) => {
      this.setState({ imgPath: imgPath });
    });
  }

  render() {
    return (
      <div className="card dark daily-picture">
        <h2>Astronomy Picture of the Day</h2>

        <img className='picture' src={this.state.imgPath} alt="NASA Astronomy Picture of the Day" width="100%" height="auto" />
      </div>
    );
  }
}
