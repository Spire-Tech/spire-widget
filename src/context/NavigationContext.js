import { h, createContext } from 'preact';
import { useState, useContext, useMemo } from 'preact/hooks';

const NavigationContext = createContext({ activeView: 'home', updateActiveView: null })

const Navigation = ({ children }) => {
  const [activeView, setActiveView] = useState('home')

  const updateActiveView = (view) => {
    setActiveView(view)
  }

  return (
    <NavigationContext.Provider value={{ activeView, updateActiveView }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
export default Navigation