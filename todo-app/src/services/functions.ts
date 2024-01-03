import { type Ref, ref } from 'vue'
import todos from './todos.json'
import type { MouseThings, Options } from '../types'
interface MouseOver extends MouseThings {
  widthScreen: string
}
export function useOver(event: MouseEvent, thing: Ref<MouseOver>): void {
  const target = event.target as HTMLElement
  const elements = target.getClientRects()
  console.log(elements.item(0))
  thing.value.x = `${elements.item(0)?.x}px`
  thing.value.y = `${0})?.top}px`
  thing.value.width = `${elements.item(0)?.width}px`
}
export const filterThings = (option: Options, completed: boolean) => {
  if (option == 'all') {
    return true
  } else if (option == 'active' && completed) {
    return true
  } else if (option == 'completed' && !completed) {
    return true
  }
  return false
}

export const todosTasks = ref(new Map())
todos.forEach((e) => todosTasks.value.set(e.id, e))
