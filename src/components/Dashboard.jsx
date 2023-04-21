import React, {useEffect, useState} from 'react';
import Header from './UI/Header/Header';
import Draggable from 'react-draggable';
import Footer from './UI/Footer/Footer';
import {v4} from 'uuid';
import {randomColor} from 'randomcolor';

const Dashboard = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items]);

  const addItem = () => {
    if (item.trim() !== '') {
      const newItem = {
        id: v4(),
        item,
        color: randomColor({
          luminosity: 'light'
        }),
        defaultPos: {
          x: 650,
          y: -350
        }
      }
      setItems(items => [...items, newItem]);
      setItem('');
    } else {
      alert('Enter your task');
      setItem('');
    }
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
    console.log(items);
  }

  const updatePos = (data, index) => {
    let newArray = [...items];
    newArray[index].defaultPos = {
      x: data.x,
      y: data.y
    };
    setItems(newArray);
  }

  const keyPress = e => {
    if (e.which === 13) addItem();
  }

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-grow items-center justify-center bg-zinc-800'>
        <p className='text-center opacity-30 select-none'>BOARD</p>
      </div>
      <div className='bg-zinc-800 flex flex-end justify-center gap-4 pb-2'>
        <input
          value={item}
          type='text'
          className='bg-zinc-800 border-b border-zinc-600 outline-none text-zinc-400'
          placeholder='Enter your task...'
          onChange={e => setItem(e.target.value)}
          onKeyPress={e => keyPress(e)}
        />
        <button className='bg-zinc-100 hover:bg-zinc-400 text-black font-bold py-2 px-4 rounded'
                onClick={addItem}>Enter</button>
      </div>
      <div>
        {
          items.map((item, index) => {
            return (
              <Draggable
                key={index}
                defaultPosition={item.defaultPos}
                onStop={(e, data) => {
                  updatePos(data, index)
                }}
              >
                <div
                  className='absolute overflow-hidden cursor-move w-[215px] text-black p-4 rounded-md'
                  style={{backgroundColor: item.color}}
                >
                  {`${item.item}`}
                  <button
                    className='absolute text-black font-bold py-1 px-2 rounded right-1 top-1'
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </button>
                </div>
              </Draggable>
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;