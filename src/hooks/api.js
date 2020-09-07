import {useState, useEffect} from 'react'
import * as api from '../api'

export default function useApi() {
    const [lists, setLists] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        api.getLists().then(setLists)
         //getTodos().then(setTodos)
      
        }, []);


        function getLists() {
            return api.getLists()
                .then(setLists)
        }

        function getListTodos(listId) {
            return api.getListTodos(listId)
                .then(setTodos)
        }

        function createTodo(data) {
            return api.createTodo(data)
                .then(todo => {
                    setTodos([...todos, todo])
                });
        }

        function deleteTodo(todoId) {
            return api.deleteTodo(todoId)
                .then(todoId => {
                    setTodos([...todos.filter(t => t.id !== todoId)])
                });
        }


        return {
            data: {
                lists,
                todos
            },
            actions: {
                getLists,
                getListTodos,
                createTodo,
                deleteTodo
            }
        }

}