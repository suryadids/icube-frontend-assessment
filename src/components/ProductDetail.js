const ProductDetail = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1619037961390-f2047d89bc55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
        alt="Image"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <h3 style={{ fontWeight: "600" }}>{product.name}</h3>
        <h3>
          {product.price_range.minimum_price.regular_price.currency}{" "}
          {product.price_range.minimum_price.regular_price.value}
        </h3>
      </div>
    </div>
  );
};

export default ProductDetail;
