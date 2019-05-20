import {store} from "./index";

export const todo=()=>{
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      store.dispatch({
        type:'R2_CHANGEDEFAULT',
        data:json
      })
    });
};
