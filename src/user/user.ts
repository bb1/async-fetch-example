import { MessageData, UserData } from '../model/user-model';
import { newNode, newText } from '../utils/dom-utils'
import './user.scss';

export class User {
    constructor(private user: UserData, private messages: MessageData[]) {
    }

    getHtml() {
        return newNode({
            cssClasses: ['user'],
            childEl: newText(`${this.user.name} wrote ${this.messages.length} messages`),
        });
    }
}