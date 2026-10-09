import {Route, Routes} from "react-router"
import { AppLayout } from "./layouts/AppLayout"

import { TicketPage } from "./pages/TicketPage"
import { HomePage } from "./pages/HomePage"
import { NewTicketPage } from "./pages/NewTicketPage"
import { TicketDetailsPage } from "./pages/TicketDetailsPage"

function App() {

  return(   
    <Routes>

      <Route element = {<AppLayout />} >

        <Route
          index
          element={<HomePage />}
        />

        <Route 
          path="chamados"
          element={<TicketPage />}
        />

        <Route 
          path="chamado/novo"
          element={<NewTicketPage />}
        />

        <Route
          path="chamado/:id"
          element={<TicketDetailsPage />}
        />
        
      </Route>

    </Routes>
  )
  
}

export default App
