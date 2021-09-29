import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";


import ProductsContextProvider from "./../contexts/ProductsContext";
import CartContextProvider from "./../contexts/CartContext";



const Layout = ({ title, description, children }) => {
  return (
    <>
      
        <title>
          {title ? title + " - React Boilerplate" : "React.js Boilerplate"}
        </title>
        <meta
          name="description"
          content={description || "React.js Boilerplate"}
        />
      
      <ProductsContextProvider>
        <CartContextProvider>
          <Header />
          <main className="container">{children}</main>
        </CartContextProvider>
      </ProductsContextProvider>
      <Footer />
    </>
  );
};

export default Layout;
