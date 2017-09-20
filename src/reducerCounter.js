export default (state = { version: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      let { version } = state;
      version = version + 1;
      state.version = version;
      return state;
    default:
      return state
  }
}