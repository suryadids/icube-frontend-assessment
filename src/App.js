import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Center from "./components/Center";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import { putProducts } from "./redux/redux";

const client = new ApolloClient({
  uri: "https://b2cdemo.getswift.asia/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await client.query({
        query: gql`
          query products {
            products(search: "") {
              items {
                name
                sku
                price_range {
                  minimum_price {
                    regular_price {
                      value
                      currency
                    }
                  }
                }
              }
            }
          }
        `,
      });

      return {
        products: data.products.items,
      };
    };

    getProducts().then((res) => {
      console.log(res.products);
      dispatch(putProducts(res.products));
    });
  }, []);

  return (
    <Center>
      <Router>
        <Route
          exact
          path="/"
          render={({ history }) => <Products history={history} />}
        />
        <Route
          path="/product/:sku"
          render={({ match }) => (
            <ProductDetail
              product={products.find((p) => p.sku === match.params.sku)}
            />
          )}
        />
      </Router>
    </Center>
  );
}

export default App;
