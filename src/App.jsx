import "./App.css";
import "./index.css";
import { useState } from "react";
export default function App() {
  const [key, setKey] = useState("");
  const [text, setText] = useState("");

  const [result, setResult] = useState("");
  const [resultTwo, setResultTwo] = useState("");

  const changeTextHandler = (value) => {
    setText(value.target.value);
  };

  const changeKeyHandler = (value) => {
    setKey(value.target.value);
  };

  const calculateResultHandler = async () => {
    const res = fetch(
      `http://localhost:3000/encrypt?key=${key}&message=${text}`
    )
      .then((response) => response.json())
      .then((res) => {
        setResult(res.encrypt);
        setResultTwo(res.decrypt);
      });
  };

  return (
    <>
      <main className="w-screen h-screen bg-gray-800 p-5">
        <div className="container mx-auto px-4 text-white bg-gray-600 min-h-full rounded-md ">
          <div
            className="flex flex-col items-center "
            style={{ height: "80vh" }}
          >
            <div className="text-5xl text-center mt-3">
              Защита информации. Лабораторная работа №2
            </div>
            <div className="text-4xl mb-3 mt-1">
              Выполнил Киселев Арсений. Разработано на React.js
            </div>
            <div className="flex ">
              <div className="flex flex-col border-4 border-gray-800 p-3 rounded-md h-full mt-10">
                <div className="text-3xl text-center mb-5 mt-1">
                  Шифрование сообщения шифром DES в режиме ECB
                </div>
                <input
                  onChange={changeKeyHandler}
                  value={key}
                  type="text"
                  style={{ outline: "none" }}
                  placeholder="Введите ключ"
                  className="rounded text-black p-4 border-4 border-gray-800 my-5"
                />
                <input
                  type="text"
                  style={{ outline: "none" }}
                  onChange={changeTextHandler}
                  value={text}
                  placeholder="Введите текст"
                  className="rounded border-4 border-gray-800 text-black p-4"
                />
                <button
                  className="w-full p-3 bg-white text-black border-4 border-gray-800 mt-5 hover:text-white hover:bg-black"
                  onClick={calculateResultHandler}
                >
                  Рассчитать
                </button>
                <div className="text-center mt-4 text-3xl">{result}</div>
                <div className="text-center mt-4 text-3xl">{resultTwo}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
