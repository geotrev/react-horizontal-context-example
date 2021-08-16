import * as actions from "./actions"

const NAME_TYPE_WHITELIST = ["first", "middle", "last"]

const actionCallbacks = {
  [actions.SET_NAME]: (state, { payload }) => {
    if (
      !payload.nameType ||
      NAME_TYPE_WHITELIST.indexOf(payload.nameType) > -1
    ) {
      return {
        ...state,
        name: {
          ...state.name,
          [payload.nameType]: payload.value,
        },
      }
    } else {
      return state
    }
  },

  [actions.SET_IS_ADULT]: (state, { payload }) => {
    return {
      ...state,
      isAdult: payload.value,
    }
  },

  [actions.SET_EMAIL]: (state, { payload }) => {
    return {
      ...state,
      email: payload.value,
    }
  },
}

export function reducer(state, action) {
  if (actionCallbacks.hasOwnProperty(action.type)) {
    return actionCallbacks[action.type](state, action)
  } else {
    console.warn(
      "[CONTEXT]: You tried to update state with an unknown action:",
      action.type
    )
    console.warn("[CONTEXT]: Accepted actions:", Object.values(actions))
    return state
  }
}
