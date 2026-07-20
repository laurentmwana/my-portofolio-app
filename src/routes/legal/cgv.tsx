import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/cgv')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/legal/cgv"!</div>
}
