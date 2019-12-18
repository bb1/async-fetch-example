import { MessageData, UserData } from '../model/user-model';

export class User {
    constructor(private user: UserData, private messages: MessageData[]) {
    }
}