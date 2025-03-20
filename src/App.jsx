import './App.css'
import {useState} from "react";
import TodoList from "./TodoList.jsx";

function App() {
    const [completedTodos, setCompletedTodos] = useState([
        {text: 'take out', isCompleted: true},
        {text: 'Make dinner', isCompleted: true}
    ]);

    const [inCompletedTodos, setInCompletedTodos] = useState([
        {text: 'paint the house', isCompleted: false},
    ]);

    function markTodoAsComplete(text) {
        setInCompletedTodos(inCompletedTodos.filter(t => t.text !== text))
        setCompletedTodos([...completedTodos, inCompletedTodos.find(t => t.text)])
    }

    function deleteTodo(text) {
        setCompletedTodos(completedTodos.filter(t => t.text !== text))
    }

    function createTodo(text) {
        setInCompletedTodos([...completedTodos, {text, isCompleted: false}]);
    }

    return (
        <>
            <TodoList
                completedTodos={completedTodos}
                inCompletedTodos={inCompletedTodos}
                onCompletedClicked={markTodoAsComplete}
                onDeleteClicked={deleteTodo}
                onCreateClicked={createTodo}
            />
        </>
    );
}

export default App