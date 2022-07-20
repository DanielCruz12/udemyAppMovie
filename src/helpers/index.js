

  /* save state */
  export const saveAtStorage = (key, element) => {
    /* find elements that we have at localStorage */
    let items = JSON.parse(localStorage.getItem(key));

    /* test if it is an array */
    Array.isArray(element) ? items.push(element) : (items = [element]);

    /* save at localStorage */
    localStorage.setItem(key, JSON.stringify(element));
    console.log(items);

    /* return object */
    return element;
  };
