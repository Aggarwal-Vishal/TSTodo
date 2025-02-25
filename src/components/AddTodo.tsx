import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    onAddTodo(text);
    setText("");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-5 items-center mt-8 mx-5"
    >
      <Input
        onChange={changeEventHandler}
        value={text}
        className="w-fit"
        type="text"
        placeholder="Enter your task"
      />
      <Button variant="ghost">Add To-Do</Button>
    </form>
  );
};

export default AddTodo;
