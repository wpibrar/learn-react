import './App.css';
import ExpenseItem from "./components/ExpenseItem"

function App() {

  const Expenses = [
    {
      date: new Date('2023-01-05T15:30:00.000Z'),
      amount: '$250',
      title: 'Grosery' 
    },
    {
      date: new Date('2023-01-05T15:30:00.000Z'),
      amount: '$110',
      title: 'Kids' 
    },
    {
      date: new Date('2023-01-05T15:30:00.000Z'),
      amount: '$125',
      title: 'Wife' 
    },
    {
      date: new Date('2023-01-05T15:30:00.000Z'),
      amount: '$90',
      title: 'Mobile' 
    },
    {
      date: new Date('2023-01-05T15:30:00.000Z'),
      amount: '$350',
      title: 'Dad' 
    },
    {
      date: new Date('2023-01-05T15:30:00.000Z'),
      amount: '$200',
      title: 'Guests'
    }
  ];



  return (
    <div className="App">
      <ExpenseItem data={Expenses[0]} />
    </div>      
  );
}

export default App;
