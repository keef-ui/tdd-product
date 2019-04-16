import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';


export default class  DishwasherListing extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {

    axios.get('/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20')
    .then(response => {
      console.log(response.data.products);
      this.setState({
      isLoaded: true,
      products: response.data.products
    });

    })
    .catch(error => {console.error(error);console.log('dsfsd');})
      

  }

  render() {
    let products=this.state.products;
    return (
      
      <div>
      {products.map((product, i) => {return <Product product={product} key={i}/> })}
      </div>
    )
  }

}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item !== this.props.item)
      this.setState({ ...this.state, value: nextProps.item , checked:false});
    console.log(
      'ToDoList -> componentWillReceiveProps : detected property change..."' +
        nextProps.item +
        "--" +
        this.props.item
    );
  }
render() {


  return <p><Link to={{
      pathname: '/product',
      state: { detail: this.state.product}
    }}> My Link </Link>{this.state.product.productId}</p>
}

  
}