export const getDataForm = (e) => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let description = target.description.value;
    alert(titulo + description)
}

export const t = () => {

}

