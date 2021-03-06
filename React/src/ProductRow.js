import React from 'react'

class ProductRow extends React.Component{
   // console.log()
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }
    destroy()
    {
        this.props.onDestroy(this.props.product.id);
    }
    render() {

    return (
        <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.category}</td>
            <td>${this.props.product.price}</td>
            
            <td><input type="button" class="btn btn-primary" value="Delete" onClick={this.destroy}/></td>
        </tr>
    );
}
}

export default ProductRow