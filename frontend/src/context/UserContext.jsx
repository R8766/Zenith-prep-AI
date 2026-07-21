import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {

  const [user, setUser] = useState({
    level: 1,
    xp: 150,
    coins: 240,
    streak: 7,
  });

  const addReward = (xpEarned) => {

    setUser(prev => {

      let newXP = prev.xp + xpEarned;

      let newCoins = prev.coins + Math.floor(xpEarned / 2);

      let level = prev.level;

      while (newXP >= level * 500) {
        newXP -= level * 500;
        level++;
      }

      return {
        ...prev,
        xp: newXP,
        coins: newCoins,
        level,
      };

    });

  };

  return (

    <UserContext.Provider
      value={{
        user,
        addReward,
      }}
    >

      {children}

    </UserContext.Provider>

  );

}

export const useUser = () => useContext(UserContext);