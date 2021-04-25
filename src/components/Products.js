import { useSelector } from "react-redux";

const Products = (props) => {
  const products = useSelector((state) => state.products);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {products.length > 0 &&
        products.map((product, ndx) => {
          return (
            <div
              key={ndx}
              onClick={() => props.history.push(`/product/${product.sku}`)}
              style={{
                margin: 4,
                border: "1px solid black",
                borderRadius: 8,
                flex: "0 1 calc(18% - 8px)",
                height: 75,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {product.name}
            </div>
          );
        })}
    </div>
  );
};

export default Products;
