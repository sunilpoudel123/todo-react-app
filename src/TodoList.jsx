import TodoListItem from "./TodoListItem"

export default function TodoList({completedTodos, inCompletedTodos}) {
    return (
        <div>
            <h1> My Todos
            </h1>
            <p> New Todo form will go here...</p>
            <h3>Completed:</h3>
            {completedTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index}/>
            ))}
            <h3>Incomplete: </h3>
            {inCompletedTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index}/>
            ))}
        </div>
    )
}
