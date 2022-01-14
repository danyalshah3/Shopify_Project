import logo from './logo.svg';
import Welcome from './components/Welcome'
import Like from './components/Likes'
import {Component} from "react"
import './App.css';
import { getByPlaceholderText } from '@testing-library/react';



const api_key = "dY3hNPl3aX86gttUWVbYecTkcuqbhZEgzbvtQzCI";
console.log(api_key)

class App extends Component {
  
  
  constructor(props) {
    super(props);
    
    this.state = {
      images: [],
      DataisLoaded: false
    };
  }
  
  componentDidMount() {
        fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-7-28&api_key=${api_key}`)
            .then((res) => res.json())
            .then((json) => {
              console.log(json)
                this.setState({
                    images: json,
                    isLoaded: true
                });
            })
       }

    render () {
      const { isLoaded, images } = this.state;
      if (!isLoaded) return <div>
          <h1> Loading.... </h1> </div>;

      return (
        <div >
              <Welcome />
            <h4>Images</h4>
            <div className="Img">
            {images.photos && images.photos.map(picture =>
              <figure key={picture.id}>
                <img
                  src={picture.img_src}
                  alt="N/A"
                  />
                <div className="description">
                  <h1> <figcaption> {picture.rover.name} - {picture.camera.full_name} </figcaption> </h1>
                      <p style={{}}> Captured on: {picture.earth_date} </p> 
                </div>
                <Like/> <br></br>
              </ figure>
            )
          }
          </div>
          </div>
          
      )
  };
}

export default App;
