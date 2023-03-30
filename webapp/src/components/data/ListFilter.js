//filterObjList converts an object to 2 arrays called headers and values
export const filterObjList = (obj) =>{
    const headers = Object.keys(obj[0]).map(h => h.charAt(0).toUpperCase() + h.slice(1));
    const values = obj.map((med) => Object.values(med))
    return {headers, values}
}