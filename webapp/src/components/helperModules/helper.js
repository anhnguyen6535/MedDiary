//filterObjList converts an object to 2 arrays called headers and values
export const filterObjList = (obj) =>{
    const headers = firstLetterUpper(Object.keys(obj[0]))
    const values = obj.map((med) => Object.values(med))
    return {headers, values}
}

export const getHeadersValues = (obj) => {
    const headers = firstLetterUpper(Object.keys(obj))
    const values = Object.values(obj)

    return {headers, values}
}

export const firstLetterUpper = (list) => {
    const res = list.map(h => h.charAt(0).toUpperCase() + h.slice(1))
    return res
}

//converts list to object
export const createObjFromList = (list, preValue, isDoctor) => {
    let temp = []
    let tempObj = {...preValue}         //copy whatever data needed 
    tempObj.isDoctor = isDoctor

    // create object with list properties
    list.value.map(obj => {
        obj.map(ele => temp.push(ele.controlId))})
    
    temp.map(e => tempObj[e] = '')

    return tempObj
}

export function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }