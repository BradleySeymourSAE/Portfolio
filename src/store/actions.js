
export const getDispatcher = (dispatch) => (type, payload) => {
  dispatch({ type, payload });
};

//  export const getNavigator = dispatch => path => {
//    const action = push(path);
//    dispatch(action);
//  }

// For use with higher order components ->
export const connectDispatcher = (dispatch) => ({
  dispatcher: getDispatcher(dispatch),
  // navigator: getNavigator(dispatch),
});
