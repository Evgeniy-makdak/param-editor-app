import React from 'react';
import './App.css';
import ParamEditor from './ParamEditor';

const params = [
  {
    id: 1,
    name: 'Назначение',
  },
  {
    id: 2,
    name: 'Длина',
  },
];

const model = {
  paramValues: [
    {
      paramId: 1,
      value: '',
    },
    {
      paramId: 2,
      value: '',
    },
  ],
};

function App() {
  return (
    <div className="App">
      <ParamEditor params={params} model={model} />
    </div>
  );
}

export default App;
