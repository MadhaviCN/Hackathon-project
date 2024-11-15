import * as route from './controllers';
import { postBlog, getBlogs, updateblog } from './controllers/blog';
import * as express from 'express';
import { postcomment, deletecomment } from './controllers/comment';

export class Routes {

    protected basePath: string;

    constructor(NODE_ENV: string) {
    }

    paths(app: express.Application) {
        app.post('/user/auth', route.auth);
        app.post('/user/signup', route.signup);
        app.get('/user', route.listUser);
        app.post('/blog', postBlog);
        app.post('/hacker/invitehacker', route.inviteHacker);
        app.post('/hacker/jointeam', route.acceptTeamInvitation);
        app.get('/hacker/listinvitation', route.listTeamInvitations);
        app.post('/hacker/requestteam', route.requestToJoinTeam);
        app.post('/hacker/addhackertoteam', route.addToTeam);
        app.get('/hacker/listhackerrequest', route.listHackerRequest);
        app.get('/idea/approved', route.getApprovedIdeas);
        app.get('/idea', route.list);
        app.get('/idea/myideas', route.listMyIdea);
        app.post('/idea/save', route.saveIdea);
        app.post('/idea/update', route.ideaUpdate);
        app.post('/idea/deleteidea', route.deleteIdea);
    }
}