import { db } from './firebase'


/* DB */
// export function get(collection) {
//     return db.collection(collection)
//         .get()
//         .then(snapshot => {
//             const items = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
            
//             return items;
//         })
//         .catch(error => {
//             console.log("Error getting doc: ", error)
//         });     
// }

// export function get(collectionName) {
//  const collection = db.collectionName(collectionName)

//     return (query = () => collection) => {
//         return query(collection)
//         .get()
//         .then(snapshot => {
//             const items = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
            
//             return items;
//         })
//         .catch(error => {
//             console.log("Error getting doc: ", error)
//         });    
//     }
         
// }

export function getLists() {
    return db.collection('lists')
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            return items;
        });        
}


export function getTodos() {
    return db.collection('todos')
       
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            return items;
        });
}



export function getListTodos(listId, func) {
    return db.collection('todos')
        .where('listId', '==', listId)
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            return items;
        });          
}