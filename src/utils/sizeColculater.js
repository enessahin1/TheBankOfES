export function NewSize(fontSize, height, standardScreenHeight = 580) {
  const heightPercent = (fontSize * height) / standardScreenHeight;
  return Math.round(heightPercent)
}