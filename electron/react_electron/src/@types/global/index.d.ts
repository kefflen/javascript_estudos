export {}

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing(): void,
        send(channel: string, args: any[]): void,
        on(channel: string, func: (...args:any[]) => void): void,
        once(channel: string, func: (...args:any[]) => void): void
      },
      store: {
        get(ket: string): any,
        set(key: string, value: any): void
      }
    }
  }
}
