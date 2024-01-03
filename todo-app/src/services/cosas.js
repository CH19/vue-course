const elementos = [
  {
    id: 'ae1845d0-a99d-11ee-9005-6f57b7810d7b',
    task: 'hacer la cama',
    completed: true,
    added: 'Tue Jan 02 2024 14:35:19 GMT-0400 (hora de Venezuela)'
  },
  {
    id: 'cf312c50-a99d-11ee-ba54-a9492aff10c5',
    task: 'terminar todo en vue',
    completed: false,
    added: 'Tue Jan 02 2024 14:36:14 GMT-0400 (hora de Venezuela)'
  },
  {
    id: 'd87ca0f0-a99d-11ee-ba54-a9492aff10c5',
    task: 'hacer portafolio',
    completed: true,
    added: 'Tue Jan 02 2024 14:36:30 GMT-0400 (hora de Venezuela)'
  }
]
const actual = 'active'
const data = elementos.filter(
  (e) =>
    actual == 'all' ||
    (actual == 'completed' && e.completed) ||
    (actual == 'active' && !e.completed)
)
// elementos.forEach(e => console.log(`${actual == 'all' && e.completed}`))
console.log(data)
