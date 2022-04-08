export default {
  namespace: 'common',
  state: {
    name: '',
  },

  reducers: {
    setState(state, action) {
      const { payload } = action;
      return Object.assign({}, state, payload);
    },
    clearState(state) {
      return {
        ...state,
      };
    },
  },

  effects: {
    *save({ payload }: any, { put }: any) {
      yield put({
        type: 'setState',
        payload: { name: payload.name },
      });
    },
  },
};
