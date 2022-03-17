import React from 'react';


export default class FetchAPOD extends React.Component {
  async componentDidMount() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=MEoO7YylHDB6roN3JwzJjdGi7axaUEAVcaF0mYLC';
    //fetches the json from the api and turns it into a format that javascript can understand
    const response = await fetch(url);
    this.data = await response.json();
    console.log(this.data.url)
    this.img = this.data.url
    var image = document.getElementById("APOD")
    image.src = this.img
    }

  render() {
    return (
    <div>
        <img id="APOD" src={this.img} alt="NASA Astronomy Picture of the Day" width="100%" height="100%"/>
    </div>
    );
  }

}