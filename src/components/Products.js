import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                {
                this.props.items.map((product) => (
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
