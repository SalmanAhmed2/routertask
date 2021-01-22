// import React from 'react';

// class ImageViewer extends React.Component {
//   constructor() {
//       super();
//       this.state = {file: '',img: ''};
//     }

//     handleSubmit(e) {

//       e.preventDefault();
//       let reader = new FileReader();
//       let file = e.target.files[0];
      
//       reader.onloadend = () => {
//         this.setState({
//           file: file,
//           img: reader.result
//         });
//       }
//       reader.readAsDataURL(file)
//     }
//     render() {
//       let {img} = this.state;
    
//       return (
//         <div>
//             <input type="file" 
//               onChange={(e)=>this.handleSubmit(e)} />
//           <div>
//             <img src={img} height="550"/>
//           </div>
//         </div>
//       )
//     }
//   }
// export default  ImageViewer;


import React, { Component } from "react";

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null
    };

  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let image = event.target.files[0];
      this.setState({
        img: URL.createObjectURL(image)
      });
    }
  };
  
  render() {
    return (
          <div>
            <input type="file" name="myImage" onChange={this.onImageChange} />
            <img src={this.state.img} />
          </div>
         );
  }
}
export default ImageViewer;