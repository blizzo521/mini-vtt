export function d20() {
  return roll(20)
}
export function d12() {
  return roll(12)
}
export function d10() {
  return roll(10)
}
export function d8() {
  return roll(8)
}
export function d6() {
  return roll(6)
}
export function d4() {
  return roll(4)
}

function roll(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}
