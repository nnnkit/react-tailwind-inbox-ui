import React from 'react';
import tw from 'tailwind.macro';
import './styles/build.css';
import HeaderLeft from './components/Header/HeaderLeft';

export default function App() {
  return (
    <div>
      <header class="flex">
        <HeaderLeft />
        <div className="bg-gray-700 flex-1">
          <div></div>
          <div></div>
        </div>
      </header>
      <div></div>
      <main>
        <div></div>
        <div></div>
      </main>
    </div>
  );
}
