export type Options = 'all' | 'active' | 'completed'
export interface option {
  value: string
  selected: boolean
}
export interface Todo {
  id: string
  task: string
  completed: boolean
  added: string
}
export interface MouseThings {
  x: string
  y: string
  width: string
}
