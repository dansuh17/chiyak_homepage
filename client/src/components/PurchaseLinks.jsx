import React, { PropTypes } from 'react';
import './PurchaseLinks.css';

const PurchaseLinks = props => (
  <div className="pl-box">
    {
      props.stores.map((store, idx) => (
        <a className="purchaselink-item" href={store.url} key={idx}>
          {store.name}
        </a>
      ))
    }
  </div>
);

PurchaseLinks.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

export default PurchaseLinks;

