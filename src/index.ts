import { newNode, newText } from './utils/dom-utils'
import { userService } from './services/user-service';

(async () => {
    const app = (() => {
        const body = document.querySelector('body');
        const div = newNode({});
        body.appendChild(div);
        return div;
    })()
    
    // TODO: get user ID from path?
    let userId = 1;
    
    app.appendChild(
        newNode({
            node: 'h1',
            childEl: newText(`User ${userId}`)
        })
    );
    
    const user = await userService.getUser(userId);
    console.log(user);
    
    app.appendChild(user.getHtml());
})();