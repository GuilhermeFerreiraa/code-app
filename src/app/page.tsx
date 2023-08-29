import Steps from "./components/Steps";
import ProductDetails from "./components/product-details";
import AccountDetails from "./components/user-account";

export default function Home() {

 return (
  <main>
   <div style={{ display: 'flex', alignItems: 'start', gap: '30px', justifyContent: 'space-between' }}>
    <AccountDetails />
    <ProductDetails /> 
   </div>
  </main>
 )
}