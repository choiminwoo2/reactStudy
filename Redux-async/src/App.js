import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
let notSendData = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCartData = async () => {
      if (notSendData) {
        notSendData = false;
        return;
      }

      dispatch(uiActions.showNotification({
        status : 'pending',
        title: 'Sending...',
        message : 'Sending Data...'
      }))
      const response = await fetch("https://valid-song-248113-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if(!response.ok){
        throw new Error('Faild Send Data');
      }

      dispatch(
        uiActions.showNotification({
          status: "successs",
          title: "Successs...",
          message: "데이터 보내기 성공",
        })
      );
    };
    sendCartData()
    .catch( (err) =>{
      dispatch(
        uiActions.showNotification({
          status: "successs",
          title: "Successs...",
          message: "데이터 보내기 성공",
        })
      )
    });
  }, [cart, dispatch]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
