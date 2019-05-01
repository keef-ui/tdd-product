import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      productId: props.location.state.detail.productId,
      product:[]
    };
  }
  componentDidMount() {

    axios.get(`/v1/products/${this.state.productId}?key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb`)
    .then(response => {
      console.log(response.data);
      const {title,media,price,displaySpecialOffer,code,additionalServices,promotionalFeatures}={...response.data}
      this.setState({
      isLoaded: true,
      product: {title,media,price,displaySpecialOffer,code,additionalServices,code,promotionalFeatures}
    });

    })
    .catch(error => {console.error(error);console.log('dsfsd');})
      

  }
render() {

  return <p><Link to={{
      pathname: '/',
      state: { detail: this.state.product}
    }}> Home</Link>{this.state.isLoaded ? this.state.product.price.now : 'Loading'}</p>
}

  
}