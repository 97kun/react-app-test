const reducer1=(state=0,action)=>{
  switch (action.type) {
    case 'ADD':
      return state + action.value;
    case 'RED':
      return state - action.value;
    default :
      return state;
  }
};

const reducer2=(state,action)=>{
  return {
    name:'zk',
    // eslint-disable-next-line no-undef
    age:99999
  }
};

export {
  reducer1,
  reducer2
}
