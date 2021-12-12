function dailyTemperatures(temperatures: number[]): number[] {
  const temps = new Array(temperatures.length).fill(0)

  for (let i = temperatures.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        temps[i] = j - i
        break
      }
    }
  }

  return temps
}

let temperatures = [73,74,75,71,69,72,76,73]

console.log(dailyTemperatures(temperatures))

temperatures = [30,40,50,60]

console.log(dailyTemperatures(temperatures))

export { dailyTemperatures }