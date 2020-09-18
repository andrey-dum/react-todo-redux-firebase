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

        function getTodos() {
            return api.getTodos()
                .then(setTodos)
               
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

        function updateTodo(todoId, data) {
            return api.updateTodo(todoId, data)
        }


        // function updateTodo(todoId, data) {
        //     return api.updateTodo(todoId, data)
        //         .then((todoId, data) => {
        //             setTodos([...todos.map(t => t.id !== todoId ? ({...t, ...data}) : t)])
        //         });
        // }



        return {
            data: {
                lists,
                todos
            },
            actions: {
                getTodos,
                getLists,
                getListTodos,
                createTodo,
                deleteTodo,
                updateTodo
            }
        }

}