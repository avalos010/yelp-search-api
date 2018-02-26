 const ADD = "ADD";
 const REMOVE = "REMOVE";
 const DATA = 'DATA'

let addItem = (item) => ({
    type: ADD,
    item
})

 let removeItem = (id) => ({
    type: REMOVE,
    id
});

let setData = (data) => ({
    type: DATA,
    data
})
export {ADD,REMOVE,addItem,removeItem,DATA, setData}