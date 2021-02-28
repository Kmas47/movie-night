export const movieYear = (model) => {
    if(!model) return "";
    return model.substring(0,4);
}