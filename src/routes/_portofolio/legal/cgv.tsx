import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_portofolio/legal/cgv')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/legal/cgv"!</div>
}
