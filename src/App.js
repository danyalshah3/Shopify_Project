import logo from './logo.svg';
import Welcome from './components/Welcome'
import './App.css';

import {Component} from "react"


const apiKey = process.env.NASA_API_KEY;
// console.log(apiKey)

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
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-7-28&api_key=${apiKey}`)
            .then((res) => res.json())
            .then((json) => {
              console.log(json)
                this.setState({
                    images: json,
                    DataisLoaded: true
                });
            })
       }

    render () {
      const { DataisLoaded, images } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div>;

      return (
          <div className="App">
            <Welcome />
          <h4>Pictures</h4>
          {images && images.map(picture =>
            <figure key={picture.id}>
              <img
                src={picture.img_src}
                alt="N/A"
              />
             <figcaption> {picture.rover.name} - {picture.camera.full_name} </figcaption>
                    <p> {picture.earth_date} </p>
                    {/* <LikeButton/> */}
            </ figure>)}


          </div>
          
      )
  };
}

export default App;
