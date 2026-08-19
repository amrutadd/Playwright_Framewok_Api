export default class BaseClient
{
    constructor(request)
    {
        this.request=request;
    }
    async post(endpoint, payload, optionalParameter = {})
    {
        return this.request.post(endpoint , { data : payload , ...optionalParameter});
    }

    async get(endpoint , optionalParameter={})
    {
        return this.request.get(endpoint , {...optionalParameter});
    }
    async put(endpoint , payload, optionalParameter={})
    {
        return this.request.put(endpoint,{data : payload , ...optionalParameter});
    }
    async delete(endpoint, optionalParameter={})
    {
        return this.request.delete(endpoint, {...optionalParameter});
    }





}   