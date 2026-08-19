import {test, request} from '@playwright/test';
import BasicAuth from '../auth/BasicAuth.js';
import EmployeeService from '../service/EmployeeService.js';
import postPayload from '../testdata/CreatedEmployeeTestData.json';
import putPayload from '../testdata/UpdateEmployeeTestData.json'

let apiContext;
let id; 
test("Created new Employee Test Case", async()=>{
    apiContext =await BasicAuth.addBasicAuth("Admin", "admin123");
    const employeeServices = new EmployeeService(apiContext);
    const response = await employeeServices.createEmployee(postPayload);
    console.log(await response.status());

    console.log(await response.statusText());
    console.log(await response.headers());

    const responsePayload = await response.json();
    id = await responsePayload.id;
    console.log(responsePayload);
});

test("Get Employee Test Case", async()=>{
const employeeServices= new EmployeeService(apiContext);
const response = await employeeServices.getEmployee(id);
console.log(await response.status());
console.log(await response.statusText());
console.log(await response.headers());
const responsePayload = await response.json();
console.log(responsePayload);
});

test("Update Employee Test Case", async()=>{

    const employeeServices=new EmployeeService(apiContext);
    const response = await employeeServices.updateEmployee(id , putPayload);
    console.log(await response.status());
    console.log(await response.statusText());
    console.log(await response.headers());
   const responsePayload = await response.json();
   console.log(responsePayload);

});

test("Delete Employee Test Cases", async()=>{

    const employeeServices=new EmployeeService(apiContext);
    const response = await employeeServices.deleteEmployee(id);
    console.log(await response.status());
    console.log(await response.statusText());
    console.log(await response.headers());


})