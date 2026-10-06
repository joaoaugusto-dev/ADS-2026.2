import {Route, Routes} from "react-router"
import { TicketPage } from "./pages/TicketPage"
import { HomePage } from "./pages/HomePage"

function App() {

  return(
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route 
        path="/chamados"
        element={<TicketPage />}
      />

    </Routes>
  )
  
}

export default App
