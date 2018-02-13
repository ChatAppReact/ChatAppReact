export function sendUserMessage(message) {
    return (dispatch, getState) => {
        console.log(getState());
        dispatch({ type: 'USER_ADD_MESSAGE', message: message });
    }
}

export function sendCompMessage(message) {
    return (dispatch, getState) => {
        dispatch({ type: 'COMP_ADD_MESSAGE', message: message });
    }
}

export function clearChat() {
    return (dispath, getState) => {
        dispath({ type: 'CLEAR_MESSAGES' });
    }
}

export function sendSystemMessage(message) {
    return (dispatch, getState) => {
        dispatch({ type: 'SYSTEM_MESSAGE', message: message });
    }
}