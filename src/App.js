import React, { Component } from 'react'
import Header from './components/Header'
import './App.css';

class App extends Component {

  state = {
    statetitle : 'This is state title',
    products : [
      {
        id: 10,
        name: 'product name 1',
        desc: 'This is product name'
      },
      {
        id: 20,
        name: 'product name 2',
        desc: 'This is product name'
      },
      {
        id: 30,
        name: 'product name 3',
        desc: 'This is product name'
      },
      {
        id: 40,
        name: 'product name 4',
        desc: 'This is product name'
      },
      {
        id: 50,
        name: 'product name 5',
        desc: 'This is product name'
      },
    ]
  }

  render() {
    return (
      <div>
        <Header/>
        <h2>{ this.state.statetitle }</h2>
        <h3>Products</h3>
        {
          this.state.products.map((product) => (
            <li key={product.id}>
              ID: {product.id}<br/>
              Name: {product.name} <br/>
            </li>
          ))
        }
      </div>
    )
  }
}
export default App;
