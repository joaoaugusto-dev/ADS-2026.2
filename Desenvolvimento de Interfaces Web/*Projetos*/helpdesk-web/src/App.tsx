import { Header } from "./components/Header"
import { Panel } from "./components/Panel"
import { TicketCard } from "./components/TicketCard"
import { initialTickets } from "./data/ticket"

function App() {

  return (
    <>
      <div className='min-h-screen bg-slate-100'>
        <Header
          title="HelpDesk Lite"
          subtitle="Gerenciamento de chamados"
        />

        <main className="mx-auto max-w-6xl p-6 mt-2">
          <Panel title="Chamados recentes">
            <div className="grid gap-4 md:grid-cols-2">
              {initialTickets.map((t) => (
                <TicketCard
                  key={t.id}
                  title={t.title}
                  description={t.description}
                  status={t.status}
                  priority={t.priority}
                />
              ))}

            </div>
          </Panel>
        </main>
      </div>
    </>
  )
}

export default App
