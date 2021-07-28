
// state = { initialState }, action)
export const debugReducer = (state = {}, action) => {
  if (process.env.NODE_ENV !== 'development') return state;

    switch (action.type) {
      case 'TODO':
        return state;
      default:
        return state;
    }
};
