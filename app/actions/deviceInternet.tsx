import { Toast } from 'native-base';

export const handleInternet = netInfo => dispatch => {
    dispatch({ type: "netInfo", netInfo })
}

export const toastHandler = (type, text) => {
    return Toast.show({
        text,
        type,
        position: "top"
    })
}