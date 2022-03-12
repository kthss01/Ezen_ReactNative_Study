import { CountLabel } from "./Components/CountLabel"
import { PlusButton } from "./Components/PlusButton"
import { CountProvider } from "./Contexts/Count"

export default function App() {
  return (
    <CountProvider>
      <CountLabel />
      <PlusButton />
    </CountProvider>
  )
}
