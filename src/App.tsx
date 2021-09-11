import Layout from './components/Layout/index';
import { Home } from './pages/Home';
import {ThemeContextProvider} from './contexts/ThemeContext';

function App() {

  return (
    <ThemeContextProvider>
        <Layout>
          <Home />
        </Layout>
    </ThemeContextProvider>

  );
}

export default App;
