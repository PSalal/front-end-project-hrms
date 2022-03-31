import { QueryClient, QueryClientProvider } from 'react-query'
// import logo from './logo.svg'
import './App.css'
import Container from './components/Container'
import './css/Container/Wrapper'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Container></Container>
  </QueryClientProvider>
)

export default App
