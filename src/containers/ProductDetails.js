import React from "react";
import { connect } from "react-redux";
import {getProducts} from "../actions/products.action";
import '../ProductDetails.css';

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
    }

    componentDidMount() {
        !this.props.products && this.props.getProducts();
    }

    static getDerivedStateFromProps(props, currentState) {
        if (props.products && !currentState.product) {
            const id = props.match.params.productId; //match - ReactRouterDom function to look at url params (:id:name, etc)
            const product = props.products.find(p => p.productId === id);
            return {
                product: product
            }
        } else {
            return null;
        }
    }

    render(){
        const product = this.state.product;
        return(
            <div>
                {/*{this.state.product && Object.keys(this.state.product).map(*/}
                    {/*key => (*/}
                        {/*<div key={key}>*/}
                            {/*<h2>{this.state.product[key]}</h2>*/}
                        {/*</div>*/}
                    {/*)*/}
                {/*)}*/}
                {
                    product &&
                    <div className="flex_div">
                        <div style={{width: '50%'}}>
                            <img src={`https://mobile-tha-server.firebaseapp.com/${product.productImage}`} className="product-img" alt={product.productName}/>
                            <p dangerouslySetInnerHTML={{ __html: product.longDescription }}/> {/*dangerous html, beware XSS*/}
                        </div>
                        <div style={{width: '50%'}}>
                            <h2>{product.productName}</h2>
                            <p dangerouslySetInnerHTML={{ __html: product.shortDescription }}/> {/*dangerous html, beware XSS*/}
                            <strong> Rating: {product.reviewRating} out of 5 with {product.reviewCount} reviews</strong>
                            <p>{product.inStock? 'In Stock': 'Out of Stock'}</p>
                            <i style={{fontSize: '30px'}}>{product.price}</i>
                            <br/>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {products: state.products};
};

export default connect(mapStateToProps, {getProducts})(ProductDetails);
