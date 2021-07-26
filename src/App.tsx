import { useState } from 'react';
import './App.css';
import Lists from './components/Lists';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Sakib al hasan",
      url: "https://c.ndtvimg.com/2019-10/kbn7tvqg_shakib-al-hasan_625x300_21_October_19.jpg",
      age: 30,
      note: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quidem."
    },
    {
      name: "Tamim Iqbal",
      url: "https://resources.pulse.icc-cricket.com/ICC/photo/2017/06/02/fb1139b4-6c3b-446c-9cdc-19fc39f3d2c7/Tamim-Iqbal.jpg",
      age: 32,
      note: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quidem."
    }
  ])
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      {/* {
        people.map(pe => <li>{pe.name}</li>)
      } */}
      <Lists people={people}></Lists>
      <AddToList people={people} setPeople={setPeople}></AddToList>
    </div>
  );
}

export default App;
