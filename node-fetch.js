import fetch from 'node-fetch';

async function createTodo() {
    const todo = {
        title: 'Buy milk',
        completed: false,
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        options
    );
    const data = await response.json();
    console.log(data);
}

createTodo();
