import React from 'react';
import Button from './Button';
import FormControl from './FormControl';
import FormLabel from './FormLabel';

export default function App() {
  return (
    <div className="App">
      <header>
      </header>
      <main className="flex flex-col">
        <div className="p-3">
          <Button>Primary</Button>
        </div>
        <div className="p-3">
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="p-3">
          <FormControl placeholder="placeholder text only" />
        </div>
        <div className="p-3">
          <FormLabel htmlFor="exampleTextId">Example text label:</FormLabel>
          {" "}
          <FormControl id="exampleTextId" value="example text" />
        </div>
      </main>
    </div >
  );
}