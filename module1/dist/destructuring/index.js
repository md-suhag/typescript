"use strict";
var products = {
    productName: "laptop",
    price: 40000,
    details: "modern laptop of all purpose",
    color: "black",
    weight: "5kg",
    meta: {
        warrenty: true,
        ispopular: true,
    },
};
var productName = products.productName, price = products.price, details = products.details, color = products.color, weight = products.weight, _a = products.meta, warrenty = _a.warrenty, ispopular = _a.ispopular;
console.log(productName, price, details, color, weight, warrenty, ispopular);
