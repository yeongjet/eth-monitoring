export const sleep = (seconds: number) =>
    new Promise<void>((resolve, reject) => {
        setTimeout(() => resolve(), seconds * 1000)
    })
