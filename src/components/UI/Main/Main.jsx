import React, { useEffect, useState } from "react";
import AddForm from "./AddForm/AddForm";
import Card from "./Card/Card";
import { v4 as id } from "uuid";
import { randomColor } from "randomcolor";
import Chance from "chance";

const Main = ({ isWhiteTheme }) => {
  const [card, setCard] = useState("");
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const randomPosition = (min, max) => {
    return new Chance().integer({ min: min, max: max });
  };

  const addCard = () => {
    if (card.trim() === "") {
      return;
    }

    const newItem = {
      id: id(),
      item: card,
      color: randomColor({
        luminosity: "light",
      }),
      defaultPosition: {
        x: randomPosition(0, 180),
        y: randomPosition(-500, -100),
      },
    };
    setCards(items => [...items, newItem]);
    setCard("");
  };

  const deleteCard = id => {
    setCards(cards.filter(item => item.id !== id));
  };

  return (
    <div className="relative h-full overflow-hidden">
      <AddForm
        isWhiteTheme={isWhiteTheme}
        card={card}
        setCard={setCard}
        addCard={addCard}
      />
      <div
        className={`flex flex-grow items-center h-full justify-center ${
          isWhiteTheme ? "bg-zinc-200" : "bg-zinc-800"
        }`}
      >
        <p className="text-center opacity-30 select-none">BOARD</p>
      </div>
      <Card cards={cards} setCards={setCards} deleteCard={deleteCard} />
    </div>
  );
};

export default Main;
