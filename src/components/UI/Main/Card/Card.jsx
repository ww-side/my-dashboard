import React from "react";
import Draggable from "react-draggable";

const Card = ({ isWhiteTheme, cards, setCards, deleteCard }) => {
  const updatePosition = (data, id) => {
    setCards(items =>
      items.map(item =>
        item.id === id
          ? { ...item, defaultPosition: { x: data.x, y: data.y } }
          : item
      )
    );
  };

  return (
    <div className={`relative ${isWhiteTheme ? "bg-zinc-200" : "bg-zinc-800"}`}>
      {cards.map(item => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPosition}
            onStop={(e, data) => {
              updatePosition(data, item.id);
            }}
          >
            <div
              className="absolute cursor-move w-[215px]
                text-black p-4 rounded-md shadow-md"
              style={{ backgroundColor: item.color }}
            >
              {`${item.item}`}
              <button
                className="absolute text-black font-bold py-1 px-2 rounded right-1 top-1"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                }}
                onClick={() => deleteCard(item.id)}
                onTouchStart={() => deleteCard(item.id)}
              >
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default Card;
