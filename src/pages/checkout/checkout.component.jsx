/**
 * libraries
 */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addCheckoutOrder } from "../../firebase/firebase.utils";
/**
 * componen
 */
import CheckoutItem from "../../componnents/checkout-item/checkout-item.component";
import CustomButton from "../../componnents/custom-button/custom-button.component";
import FormInput from "../../componnents/form-input/form-input.component";
/**
 * css
 */
import "./checkouit.styles.scss";
/**
 * redux
 */
import {
  selectorCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

class CheckoutPage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      direction: "",
      total: 0,
      cartItems: "",
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { total, cartItems } = this.props;
    this.setState({ total: total + 10, cartItems: cartItems });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      addCheckoutOrder("orders", this.state);
      this.setState({ name: "", direction: "", total: 0 });
      alert("Order Added");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    const { cartItems, total } = this.props;
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <span>SUBTOTAL: ${total}</span>
        </div>
        <div className="total">
          <span>DELIVERY: $10</span>
        </div>
        <div className="total">
          <span>SUBTOTAL: ${total + 10}</span>
        </div>

        <div className="checkout-form">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              value={this.state.name}
              name="name"
              type="text"
              label="Name"
              handleChange={this.handleChange}
              required
            />
            <FormInput
              value={this.state.direction}
              name="direction"
              type="text"
              label="Direction"
              handleChange={this.handleChange}
              required
            />
            <div className="buttons">
              <CustomButton type="submit"> Complete Order </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
