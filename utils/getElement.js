// a function to check if an element class or id exist
const getElement = (selection) => {
  // getting the class or id of an element
  const element = document.querySelector(selection);
  //   checking to see if the element does exist
  if (element) {
    //   give back the element if it exist
    return element;
  }
  //   checking to see if the element does not exist
  else {
    //   throw an error so as to know that element class or id does not exist
    throw new Error(`Selection ${selection} does not exist`);
  }
};

export default getElement;
