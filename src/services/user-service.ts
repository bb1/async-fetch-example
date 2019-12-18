
class UserService {
    private readonly USER_API_PATH = '//jsonplaceholder.typicode.com/users/'
    private readonly USER_COMMENTS_API_PATH = '//jsonplaceholder.typicode.com/posts?userId='

    async getUser(userId: number) {
        
    }
}

// Singleton
export const userService = new UserService();