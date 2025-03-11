import './App.css'
import {useState} from "react";
import TodoList from "./TodoList.jsx";

function App() {
    const [completedTodos, setCompletedTodos] = useState([
        {text: 'take out', isCompleted: true},
        {text: 'Make dinner', isCompleted: true}
    ]);

    const [inCompletedTodos, setInCompletedTodos] = useState([
        {text: 'take out', isCompleted: true},
        {text: 'Make dinner', isCompleted: true}
    ]);
    return (
        <>
            <TodoList completedTodos={completedTodos} inCompletedTodos={inCompletedTodos}/>
        </>
    );
}

export default App