import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      {darkMode ? (
        <div className="dark">
        </div>
      ) : (
        <div className="light">
        </div>
      )}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const toDarkMode = () => {
//     setDarkMode(!darkMode);
//   }

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = darkMode ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={toDarkMode}>
//           {darkMode ? "To lightMode" : "To darkMode"}
//         </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;


