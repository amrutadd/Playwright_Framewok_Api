import {request} from '@playwright/test';

export default class BasicAuth
{
    static async addBasicAuth(username, password)
    {
        return request.newContext({
            httpCredentials :
            {
                "username" : username,
                "password" : password
            }
        });
    }
}