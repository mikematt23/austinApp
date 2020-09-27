import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   }
  
//   render(props) {
//     console.log(props)
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '50vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys= 'key: AIzaSyCGK-b1c-qbiR6-9Jo9VkYUbokXfNinxUQ'
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

const SimpleMap = (props)=>{
  let defaultProps = {
    center: {
      lat: 30.30,
      lng: -97.69
    },
    zoom: 11
  }

    console.log(props)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys= 'key: AIzaSyCGK-b1c-qbiR6-9Jo9VkYUbokXfNinxUQ'
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          
        >
          
        </GoogleMapReact>
      </div>
    );

}
 
export default SimpleMap;