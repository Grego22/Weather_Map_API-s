

class EventBus{
    static eventEmitter = new.events.EventEmitter()
    static getEventEmitter(){
        return this.eventEmitter
    }
}

export default EventBus