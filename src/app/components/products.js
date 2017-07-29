import React from "react";
import '../containers/styles.css';

export const Products = (props) => {
    console.log("------props in products-----",props)
    var items = props.items.likedItems ? props.items.likedItems :[]
    var products = (items).map(function (item) {
        return (
            <div key={item._id} className="productList">
                <figure >
                    <img  src={item.imagesSmall[0].src} />
                </figure>
                <figcaption >
                    <p >{item.brand.name}<span >{item.size[0].itemName}</span></p>
                    <p >{item.name}</p>
                </figcaption>
            </div>


        );
    });
    return (
        <div>
            <div  className="col-md-4">
                <div  className="panel panel-default productWidget">
                    <div  className="panel-heading">
                        <div  className="row">
                            <div  className="col-md-9">
                                <p >{props.title}<strong >{props.items.likedItemsCount}</strong></p>
                            </div>
                            <div  className="col-md-3 text-right">
                                <a  href="javascript:;">View All</a>
                            </div>
                        </div>
                    </div>
                    <div  className="panel-body">
                        { products }
                    </div>
                </div>
            </div>
        </div>
    );
};