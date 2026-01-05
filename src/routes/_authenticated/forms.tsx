import { createFileRoute } from '@tanstack/react-router'
import { Form } from '@/features/forms/form'
export const Route = createFileRoute('/_authenticated/forms')({
  component: Form,
})

