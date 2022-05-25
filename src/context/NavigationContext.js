import { h, createContext } from 'preact';
import { useState, useContext, useMemo } from 'preact/hooks';

const NavigationContext = createContext({ activeView: { title: 'home', id: null }, updateActiveView: null })

const Navigation = ({ children }) => {
  const [activeView, setActiveView] = useState({ title: 'home', id: null })

  const updateActiveView = (title, id) => {
    setActiveView({ title, id })
  }

  return (
    <NavigationContext.Provider value={{ activeView, updateActiveView }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
export default Navigation