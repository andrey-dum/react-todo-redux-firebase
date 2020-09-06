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



export function getListTodos(listId) {
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

export function createTodo(data) {
    return db.collection('todos').add({
        ...data,
        completed: false
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}


export function deleteTodo(todoId) {
    return db.collection("todos").doc(todoId).delete()
        .then(function() {
       return todoId;
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}


export function updateTodo(todoId, data) {
    return db.collection('todos').doc(todoId).update(data)
    //.then(() => data)
    .then(() => ({
        id: todoId,
        ...data
    }));
}



