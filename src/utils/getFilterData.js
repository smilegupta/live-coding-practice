

function getArraysIntersection(a1, a2) {
  return a1.filter(function (n) {
    return a2.indexOf(n) !== -1;
  });
}

export const getFilteredData = (flitersValues, arr ) => { 
  if(flitersValues.length===0) return arr
  let filteredIds = []

arr.forEach(item => {
    if (flitersValues.includes(item.brand)){
      filteredIds.push(+item.itemId)
    } if(flitersValues.includes(item.gender)){
        filteredIds.push(+item.itemId)
    } if(getArraysIntersection(item.size, flitersValues).length){
        filteredIds.push(+item.itemId)
    }
  })

 filteredIds =[...new Set(filteredIds)]
 
let tmp = arr.filter(item => filteredIds.includes(item.itemId))
  

  return tmp;
}