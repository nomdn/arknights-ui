type EventMap = Record<string, unknown[]>

export class Emitter<Events extends EventMap> {
  private events = new Map<keyof Events, Set<Function>>()

  on<K extends keyof Events>(event: K, handler: (...args: Events[K]) => void) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set())
    }
    this.events.get(event)!.add(handler)
  }

  off<K extends keyof Events>(event: K, handler: (...args: Events[K]) => void) {
    this.events.get(event)?.delete(handler)
  }

  emit<K extends keyof Events>(event: K, ...args: Events[K]) {
    this.events.get(event)?.forEach((handler) => handler(...args))
  }
}
