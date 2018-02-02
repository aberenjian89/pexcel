export const notifyOnErrorInput= (input)=>{
    let message = input.data('validateHint');
    $.Notify({
        caption: 'Error',
        content: message,
        type: 'alert'
    });
}