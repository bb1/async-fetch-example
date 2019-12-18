import { UserData, MessageData } from 'model/user-model';
import { User } from 'user/user';

class UserService {
    private readonly USER_API_PATH = '//jsonplaceholder.typicode.com/users/'
    private readonly USER_COMMENTS_API_PATH = '//jsonplaceholder.typicode.com/posts?userId='

    async getUser(userId: number): Promise<User> {
        // Paralell Requests
        return Promise.all([
            fetch(this.USER_API_PATH + userId).then((resp: any) => {
                return resp.json();
            }),
            fetch(this.USER_COMMENTS_API_PATH + userId).then((resp: any) => {
                return resp.json();
            })
        ]).then((respArr: any[]) => {
            const userData = respArr[0] as UserData;
            const userMsg = respArr[1] as MessageData[];
            return new User(userData, userMsg);
        });
    }
}

// Singleton
export const userService = new UserService();