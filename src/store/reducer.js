export default function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload.user
            };

        case 'LOGOUT_USER':
            return {
                ...state,
                user: null
            };

        case 'GET_LISTS':
            return {
                ...state,
                lists: action.payload.lists
            };

        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload.todos
            };

        case 'GET_LIST_TODOS':
            return {
                ...state,
                todos: action.payload.todos
            }

        case 'CREATE_LIST':
            return {
                ...state,
                lists: state.lists.concat(action.payload.list)
            }
            case 'UPDATE_LIST':
                return {
                    ...state,
                    lists: state.lists.map(list => {
                        if (list.id === action.payload.list.id) {
                            return {
                                ...list,
                                ...action.payload.list
                            }
                        }
    
                        return list
                    })
                }
        case 'DELETE_LIST':
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload.listId)
            }

        case 'CREATE_TODO':
            return {
                ...state,
                todos: state.todos.concat(action.payload.todo)
            }

        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.todo.id) {
                        return {
                            ...todo,
                            ...action.payload.todo
                        }
                    }

                    return todo
                })
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.todoId)
            }

        default:
            return state;
    }
}