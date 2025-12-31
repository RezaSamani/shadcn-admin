import { createFileRoute } from '@tanstack/react-router'
import { Dashboard2 } from '@/features/dashboard/index2'
export const Route = createFileRoute('/_authenticated/rs')({
  component: RsdPage,
})

function RsdPage() {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <h1 className='text-2xl font-bold'>RS Dashboard</h1>
      <p>Your RS content goes here</p>
      <Dashboard2 />
    </div>
  )
}