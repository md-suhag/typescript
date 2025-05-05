const products: {
  productName: string;
  price: number;
  details: string;
  color: string;
  weight: string;
  meta: {
    warrenty: boolean;
    ispopular: boolean;
  };
} = {
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

const {
  productName,
  price,
  details,
  color,
  weight,
  meta: { warrenty, ispopular },
} = products;

console.log(productName, price, details, color, weight, warrenty, ispopular);
