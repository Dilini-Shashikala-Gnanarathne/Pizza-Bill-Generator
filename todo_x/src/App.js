import React, { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-x`,
  heading:'text-3xl font-bold text-center text-gray-800 p-2',

  header: `bg-red-500 text-white p-4 text-center`,
  footer: `bg-green-500 text-white p-4 text-center fixed bottom-0 w-full`
}

function App() {
  const [todos, setTodos] = useState(['Check Email', 'Get Breakfast']);

  return (
    <div className={style.bg}>
      <div className={style.container}>
          <h1 className={style.heading}>Todo App</h1>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Todo" />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>You have {todos.length} todos</p>
        </div>

      <div className={style.footer}>
        <p>Footer Content</p>
      </div>
    </div>
  );
}

export default App;
