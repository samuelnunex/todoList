import { Home } from './src/screens/Home';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
        />
        
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    </>
  )};