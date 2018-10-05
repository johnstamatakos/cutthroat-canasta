const ACTION_HANDLERS = {};

const initialState = {
    userId: null
};

const authReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
};

export default authReducer;
