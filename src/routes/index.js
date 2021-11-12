import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import User from '../pages/User';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Rotas() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} isClosed={false} />
      <MyRoute exact path="/users" component={User} isClosed />
      <MyRoute exact path="/alunos" component={Alunos} isClosed />
      <MyRoute exact path="/alunos/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
