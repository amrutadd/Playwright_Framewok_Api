import BaseClient from "../client/BaseClient.js";

export default class EmployeeService extends BaseClient{
constructor(request)
{
    super(request);
}
async createEmployee(payload)
{
    return await this.post("http://localhost:9196/api/employees",payload);
}
async getEmployee(id, optionalParameter={})
{
    return await this.get(`http://localhost:9196/api/employees/${id}`,{...optionalParameter});
}
async updateEmployee(id, payload,optionalParameter={})
{
    return await this.put(`http://localhost:9196/api/employees/${id}`,payload,{...optionalParameter});
}
async deleteEmployee(id)
{
    return await this.delete(`http://localhost:9196/api/employees/${id}`);
}




}