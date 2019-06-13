import React from 'react';
import { getProducts } from "../actions/products.action";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { pageNumber, pageSize} from "../actions/products.action";

class Products extends React.Component {

    componentDidMount() {
        !this.props.products && this.props.getProducts();
    }

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th># of Ratings</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.products && this.props.products.map(p=>{
                        return (
                            <tr key={p.productId}>
                                <td><Link to={`/product/${p.productId}`}>{p.productName}</Link></td>
                                <td><img src={`https://mobile-tha-server.firebaseapp.com/${p.productImage}`} className="product-img" alt={p.productName}/></td>
                                <td dangerouslySetInnerHTML={{ __html: p.shortDescription }}/> {/*dangerous html, beware XSS*/}
                                <td>{p.reviewRating}</td>
                                <td>{p.reviewCount}</td>
                                <td>{p.price}</td>
                                <td>{p.inStock? 'In Stock': 'Out of Stock'}</td>
                            </tr>

                        );
                    })
                }
                </tbody>
            </table>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        products:state.products,
    }
};

// const initIntersectionObserver = () => {
//     const options = {
//         root: document.querySelector("#root")
//     };
//
//     const callback = entries => {
//         entries.forEach(entry => {
//             if (entry.target.id === 'tr') {
//             } else if (entry.target.id === `tr-${pageSize - 1}`) {
//             }
//         });
//     };
//
//     var observer = new IntersectionObserver(callback, options);
//     observer.observe(document.querySelector("tr"));
//     observer.observe(document.querySelector(`#tr-${pageSize - 1}`));
// };

export default connect(mapStateToProps, {getProducts})(Products);
