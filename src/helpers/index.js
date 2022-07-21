
  /* save state */
  export const saveAtStorage = (key, element) => {
    /* find elements that we have at localStorage */
    let items = JSON.parse(localStorage.getItem(key));

    /* test if it is an array */
    Array.isArray(element) ? items.push(element) : (items = [element]);

    /* save at localStorage */
    localStorage.setItem(key, JSON.stringify(element));

    /* return object */
    return element;
  };
 

    /* save at localStorage */
    export const saveAtLocalStorage = (key, element) => {

      //get elements that we have at localStorage
      let items = JSON.parse(localStorage.getItem(key));
  
      //check if is an array
      if(Array.isArray(items)){
        items.push(element);
      }else{
        items = [element]
      }
      /* Array.isArray(items) ? items.push(movie) : items = [movie];
   */
      //save at LocalStorage
      localStorage.setItem(key, JSON.stringify(items));
  
      //return object
      return element;
    }