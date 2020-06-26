type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly

const todo: Readonly<Todo> = {
  title: 'Watching Dark again',
  description: 'Remember details',
  completed: false
}

console.log(todo);

// todo.completed = true;

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate
  }
}

const todo2 = updateTodo(todo, { completed: true });

console.log(todo2);

//// Pick

type TodoPreviewPick = Pick<Todo, 'title' | 'completed'>;

const todo3: TodoPreviewPick = {
  title: 'Close Ghost of Tsushima',
  completed: false
}

//// Omit

type TodoPreviewOmit = Omit<Todo, 'description'>;

const todo4: TodoPreviewOmit = {
  title: 'Close Ghost of Tsushima',
  completed: false
}