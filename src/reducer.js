const initialState = {
    chat: []
}

/**
 * 'comp' = partner, 'user' = you, 'system' = system events
 */
function chatApp(state = initialState, action) {
    switch (action.type) {
        case 'COMP_ADD_MESSAGE':
            return {
                ...state,
                chat: [ ...state.chat, {
                    person: 'comp',
                    text: action.message
                }]
            }
            break;
        case 'USER_ADD_MESSAGE':
            return {
                ...state,
                chat: [ ...state.chat, {
                    person: 'user',
                    text: action.message
                }]
            }
            break;
        case 'SYSTEM_MESSAGE':
            return {
                ...state,
                chat: [ ...state.chat, {
                    person: 'system',
                    text: action.message
                }]
            }
        case 'CLEAR_MESSAGES':
            return {
                chat: []
            };
        default:
            return state
    }
}

export default chatApp