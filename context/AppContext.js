import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false);
  const [ viewportWidth, setViewportWidth ] = useState(undefined);

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  }

  const handleWindowResize = () => {
    setViewportWidth(window.innerWidth);
  }

  let sharedState = { toggleMobileMenu, viewportWidth };

  useEffect(() => {
    if ( viewportWidth == undefined) {
      setViewportWidth(window.innerWidth);
    }
    
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
