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

const data={
  name:'zk',
  age:22
};

const reducer2=(state=data,action)=>{
  switch (action.type) {
    case 'SHOW':
      return {
        name:'change',
        age:100
      };
    default:
      return state
  }
};

export {
  reducer1,
  reducer2
}
