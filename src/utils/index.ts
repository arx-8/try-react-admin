export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    console.log(`sleeping ${ms} ms ...`)
    setTimeout(() => {
      console.log("sleep end")
      resolve()
    }, ms)
  })
}
