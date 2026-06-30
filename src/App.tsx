import { PrimeReactProvider } from 'primereact/api'

import Portfolio from "./components/portfolio/Portfolio"

function App() {
  return (
    <PrimeReactProvider>
      <Portfolio />
    </PrimeReactProvider>
  );
}

export default App;
