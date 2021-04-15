// Local Import
import { RowWithTextFirst, RowWithImageFirst, Navbar } from "./components";

function App() {
  const cardConfig1 = {
    title: "Todo App",
    image: "todo.svg",
    height: "14rem",    
    onClick: () => window.open("http://indexeddb.asdethprime.surge.sh"),
    description: [
      "Uses Indexed DB so achieves data persistence with purely client side ",
      "Allows you to add todo, and toggle or remove them in bulk",
      "Doubleclick the column to resize the column",
      "Doubleclick cell item to edit inline",
    ],
  };

  const cardConfig2 = {
    title: 'Ticket Manager',
    image: 'ticket.svg',
    height: '20rem',
    onClick: () => window.open('http://ticket-manager.asdethprime.surge.sh/'),
    description: [
      'Uses IndexedDB so achieves data persistence with purely client side ',
      'Home Page has links to all other pages : User, Engineer and Ticket ',
      'User page allows you to perform CRUD on user data',
      'Engineer page allows you to perform CRUD on engineer data',
      'Ticket page allows you to add tickets',
      'Add an engineer on Engineer page and select on ticket page. ',
      'Add a user on user page and select on ticket page'

    ]
  }

  return (
    <>
      <Navbar />
      <RowWithTextFirst cardConfig={cardConfig1} />
      <RowWithImageFirst cardConfig={cardConfig2} />
    </>
  );
}

export default App;
