import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class ProductList extends Component {
  state = { products: [], loading: true, error: false };

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      this.setState({ products: data, loading: false });
    } catch {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    if (this.state.loading) return <h3 className="text-center">Loading...</h3>;
    if (this.state.error) return <h3>Error loading products</h3>;

    return (
      <div className="container mt-4">
        <div className="row g-4">
          {this.state.products.map(p => (
            <div className="col-md-4" key={p._id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
