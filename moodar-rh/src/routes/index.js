import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories';
import Home from '../pages/Home';
import Solicitations from '../pages/Solicitations';
export default function Routes() {
  return (
    <Switch>
      {/* <> */}
      <Route path="/" exact component={Home} />
      <Route path="/solicitacoes" exact component={Solicitations} />
      <Route path="/categorias" exact component={Categories} />
    </Switch>
    // </>
  );
}