import { z } from 'zod'

const requiredString = (fieldName: string) => z
  .string({required_error: `${fieldName} is required`})
  .min(1, `${fieldName} is required.`)

export const eventFormSchema = z.object({
  title: requiredString('Title'),
  category: requiredString('Category'),
  description: requiredString('Description'),
  date: requiredString('Date'),
  city: requiredString('City'),
  venue: requiredString('Venue'),
})

export type EventFormSchema = z.infer<typeof eventFormSchema>