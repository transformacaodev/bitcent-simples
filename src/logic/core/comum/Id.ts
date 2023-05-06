import { v4 as uuidv4 } from 'uuid'

export default class Id {
    static novo(): string {
        return uuidv4()
    }
}
