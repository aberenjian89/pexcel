export const MODAL_SHOW = "MODAL_SHOW";
export const MODAL_HIDE = "MODAL_HIDE";


export const ModalShow = (type) =>({
    type: MODAL_SHOW,
    data: {
        status: true,
        type: type
    }
})

export const ModalHide = () =>({
    type: MODAL_HIDE,
    data: {
        status: false,
    }
})


