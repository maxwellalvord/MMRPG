
export const storeState = initialValue => {
  let currentState = initialValue;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const setState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : value
    });
  };
};


export const stateControl = storeState();
export const setName = setState("name");
export const setHealth = setState("health");