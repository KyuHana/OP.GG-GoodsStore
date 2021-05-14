import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import { Switch, Route } from 'react-router-dom'
import './commoncss/font/font.css';
//component
import Home from './Page/home/Home';
import SoonGoods from './Page/soon/SoonGoods';
import PopupBuyContainer from './Components/popupBuy/PopupBuyContainer'
import SaleGoodsContainer from './Components/saleGoods/SaleGoodsContainer'

function App() {
  const client = new ApolloClient({ //connect to end point
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  })
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/saleGoods" render={() => <SaleGoodsContainer />} />
        <Route exact path="/asd" render={() => <PopupBuyContainer />} />
        <Route exact path="/soon" render={() => <SoonGoods />} />
      </Switch>
    </>
  );
}

export default App;
