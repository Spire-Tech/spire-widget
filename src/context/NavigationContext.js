import { h, createContext } from 'preact';
import { useState, useContext, useMemo } from 'preact/hooks';

const NavigationContext = createContext({ activeView: { title: 'home', id: null, businessId: null, widgetId: null }, updateActiveView: null })

const Navigation = ({ children }) => {
  const [activeView, setActiveView] = useState({ title: 'home', id: null, businessId: null, widgetId: null })

  const updateActiveView = (title, id, businessId, widgetId) => {
    setActiveView({ title, id, businessId, widgetId })
  }

  return (
    <NavigationContext.Provider value={{ activeView, updateActiveView }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
export default Navigation