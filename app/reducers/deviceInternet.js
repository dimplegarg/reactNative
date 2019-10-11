export default (state = { internet: true, toast: {} }, action) => {
    switch (action.type) {
        case 'netInfo':
            return {
                ...state,
                internet: action.netInfo
            }
        case 'error':
            return {
                ...state,
                toast: { error: action.error }
            }
        default:
            return state;
    }
}