import React, { useEffect, useState } from 'react';
import Header from './UI/Header/Header';
import Draggable from 'react-draggable';
import Footer from './UI/Footer/Footer';
import { v4 } from 'uuid';
import { randomColor } from 'randomcolor';
import { useTheme } from '../hooks/useTheme';

const Dashboard = () => {
  const [card, setCard] = useState('');
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem('cards')) || []
  );
  const { isWhiteTheme, handleToggleTheme } = useTheme(false);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const addCard = () => {
    if (card.trim() !== '') {
      const newItem = {
        id: v4(),
        item: card,
        color: randomColor({
          luminosity: 'light'
        }),
        defaultPosition: {
          x: 650,
          y: -350
        }
      };
      setCards(items => [...items, newItem]);
      setCard('');
    } else {
      alert('Enter your task');
      setCard('');
    }
  };

  const deleteCard = id => {
    setCards(cards.filter(item => item.id !== id));
  };

  const updatePosition = (data, id) => {
    setCards(items =>
      items.map(item =>
        item.id === id
          ? { ...item, defaultPosition: { x: data.x, y: data.y } }
          : item
      )
    );
  };

  const keyPress = e => {
    if (e.which === 13) addCard();
  };

  const switchButton = (
    <button
      className={`px-3 py-2 rounded-md 
      transition-all duration-500 ease-in-out shadow-md transform hover:scale-105
      ${isWhiteTheme ? 'bg-zinc-200 text-zinc-900' : 'bg-zinc-800 text-white'}`}
      onClick={handleToggleTheme}
    >
      Switch theme
    </button>
  );

  return (
    <div className="flex flex-col h-screen">
      <Header isWhiteTheme={isWhiteTheme} switchButton={switchButton} />
      <div
        className={`flex flex-grow items-center justify-center ${
          isWhiteTheme ? 'bg-zinc-200' : 'bg-zinc-800'
        }`}
      >
        <p className="text-center opacity-30 select-none">BOARD</p>
      </div>
      <div
        className={`flex flex-end justify-center gap-4 pb-2 ${
          isWhiteTheme ? 'bg-zinc-200' : 'bg-zinc-800'
        }`}
      >
        <input
          value={card}
          type="text"
          className={`border-b outline-none
          ${
            isWhiteTheme
              ? 'bg-zinc-200 border-zinc-400 text-zinc-600'
              : 'bg-zinc-800 border-zinc-600 text-zinc-400'
          }`}
          placeholder="Enter your task..."
          onChange={e => setCard(e.target.value)}
          onKeyPress={e => keyPress(e)}
        />
        <button
          className={`font-bold py-2 px-4 rounded 
          transition-all duration-500 ease-in-out shadow-md
          ${
            isWhiteTheme
              ? 'bg-zinc-900 hover:bg-zinc-700 text-white'
              : 'bg-zinc-100 hover:bg-zinc-400 text-black'
          }`}
          onClick={addCard}
        >
          Enter
        </button>
      </div>
      <div>
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
                className="absolute overflow-hidden cursor-move w-[215px]
                text-black p-4 rounded-md shadow-md"
                style={{ backgroundColor: item.color }}
              >
                {`${item.item}`}
                <button
                  className="absolute text-black font-bold py-1 px-2 rounded right-1 top-1"
                  onClick={() => deleteCard(item.id)}
                >
                  X
                </button>
              </div>
            </Draggable>
          );
        })}
      </div>
      <Footer isWhiteTheme={isWhiteTheme} />
    </div>
  );
};

export default Dashboard;
