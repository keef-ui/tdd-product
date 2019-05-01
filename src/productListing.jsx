import React from "react";
import { Link } from 'react-router-dom';
import FetchProductList from './services/fetchProductList'


export default class  ProductListing extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
   this.fetchProducts();
  }

  async fetchProducts() {
     try {
      const response= await FetchProductList();

      this.setState({
      isLoaded: true,
      products: response.data.products});
        console.error(response);
    } catch(error){
        console.error(error);
    }

  }


  render() {
    let products=this.state.products;
    return (
      
      <div className='product-listing'>
      {products.map((product, i) => {return <Product product={product} key={i}/> })}
      </div>
    )
  }

}

export class Product extends React.Component {
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

console.log(this.state.product);
  return <div className='product'><span>{this.state.product.price[0]}</span><span>{this.state.product.title}</span>{this.state.product.productId}</div>
}

  
}