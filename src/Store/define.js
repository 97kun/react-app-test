const reducer1 = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.value;
    case 'RED':
      return state - action.value;
    default :
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case 'R2_CHANGEDEFAULT':
      return action.data;
    case 'R2_ADD':
      return [...state, {
        userId: state.length + 1,
        id: state.length + 1,
        title: action.data,
        completed: false
      }];
    default:
      return [
        {
          completed: false,
          id: 1,
          title: 'default',
          UserId: 1
        }
      ]
  }
};

export {
  reducer1,
  reducer2
}
