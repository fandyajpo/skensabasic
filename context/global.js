// import * as SecureStore from "expo-secure-store";
// async function setSession(key, value) {
//   await SecureStore.setItemAsync(key, value);
// }

// async function getSession(key) {
//   let result = await SecureStore.getItemAsync(key);
//   if (result) {
//     console.log("🔐 : " + result);
//   } else {
//     console.log("No values stored under that key.");
//   }
// }

import { useState, createContext } from "react";

export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [modal, setModal] = useState("");
//   const [sign, setSign] = useState(false);

//   const contextValue = {
//     globalCtx: {
//       sign,
//       modal,
//     },
//     globalAct: {
//       setSign,
//       setModal,
//     },
//   };

//   return (
//     <GlobalContext.Provider value={contextValue}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
