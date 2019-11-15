import React from 'react';
import tw from 'tailwind.macro';
import './styles/build.css';
import HeaderLeft from './components/Header/HeaderLeft';
import HeaderRight from './components/Header/HeaderRight';

export default function App() {
  return (
    <div>
      <header class="flex">
        <HeaderLeft />
        <HeaderRight />
      </header>
      <div></div>
      <main>
        <div></div>
        <div></div>
      </main>
    </div>
  );
}
