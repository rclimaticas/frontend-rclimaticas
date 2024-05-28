import React, { createContext, useState } from 'react';

const AccountSettingsContext = createContext();

function AccountSettingsProvider({ children }) {
  const [handleUpdate, setHandleUpdate] = useState(null);
  

  return (
    <AccountSettingsContext.Provider value={{ handleUpdate, setHandleUpdate }}>
      {children}
    </AccountSettingsContext.Provider>
  );
}

export { AccountSettingsContext, AccountSettingsProvider };
