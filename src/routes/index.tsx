import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button.tsx'


export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <>
      <div>
        Main Page
      </div>
      <Button>Click Me</Button>
    </>
  )
}
