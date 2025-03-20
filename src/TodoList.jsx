import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm.jsx";

export default function TodoList({
                                     completedTodos, inCompletedTodos,
                                     onCompletedClicked, onDeleteClicked,
                                     onCreateClicked
                                 }) {
    return (<div>
        <h1> My Todos
        </h1>
        <NewTodoForm onCreateClicked={onCreateClicked}/>
        <h3>Completed: </h3>
        {completedTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} onDeleteClicked={onDeleteClicked}/>))}
        <h3>Incomplete: </h3>
        {inCompletedTodos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked}/>))}
    </div>)
}
