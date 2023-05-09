import React from "react";

const AddForm = ({ isSwitchTheme, card, setCard, addCard }) => {
  const keyPress = e => {
    if (e.which === 13) addCard();
  };

  return (
    <div
      className={`flex flex-end justify-center gap-4 pt-5 ${
        isSwitchTheme ? "bg-zinc-200" : "bg-zinc-800"
      }`}
    >
      <input
        value={card}
        type="text"
        className={`border-b outline-none 
          ${
            isSwitchTheme
              ? "bg-zinc-200 border-zinc-400 text-zinc-600"
              : "bg-zinc-800 border-zinc-600 text-zinc-400"
          }`}
        placeholder="Enter your task..."
        onChange={e => setCard(e.target.value)}
        onKeyDown={e => keyPress(e)}
      />
      <button
        className={`font-bold py-2 px-4 rounded 
          transition-all duration-500 ease-in-out shadow-md
          ${
            isSwitchTheme
              ? "bg-zinc-900 hover:bg-zinc-700 text-white"
              : "bg-zinc-100 hover:bg-zinc-400 text-black"
          }`}
        onClick={addCard}
      >
        Enter
      </button>
    </div>
  );
};

export default AddForm;
