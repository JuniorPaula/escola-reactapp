import * as types from '../types';

const intialState = {
  botaoClicado: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso = )');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu error = (');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo o request');
      return state;
    }

    default:
      return state;
  }
}
