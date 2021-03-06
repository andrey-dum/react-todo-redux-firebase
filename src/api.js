import { db, auth } from './firebase';

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


/* Auth */
export function logInUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function signOutUser() {
    return auth.signOut();
}

export function registerUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}


export function initAuth(onAuth) {
    auth.onAuthStateChanged(onAuth);
}


// export function onAuth(handleAuth) {
//     auth.onAuthStateChanged(handleAuth);
// }




export function getLists(userId) {
    return db.collection('lists')
        .where('userId', '==', userId)
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            return items;
        });        
}


export function getTodos(userId = '') {
    return db.collection('todos')
        // .where('listId', '==', '')
        .where('userId', '==', userId)
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

export function createList(data) {
    return db.collection('lists').add({
        icon: '',
        sort: '',
        todos: [],
        ...data,
        
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}

export function updateList(listId, data) {
    return db.collection('lists').doc(listId).update(data)
    //.then(() => data)
    .then(() => ({
        id: listId,
        ...data
    }));
}

export function deleteList(listId) {
    return db.collection("lists").doc(listId).delete()
        .then(() => listId)
            .catch(function(error) {
        console.error("Error removing document: ", error);
    });
}


export function createTodo(data) {
    return db.collection('todos').add({
        ...data,
        completed: false,
        important: false,
        notes: '',
        dueDate: null,
        steps: [],
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}


export function deleteTodo(todoId) {
    return db.collection("todos").doc(todoId).delete()
        .then(() => todoId)
            .catch(function(error) {
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



