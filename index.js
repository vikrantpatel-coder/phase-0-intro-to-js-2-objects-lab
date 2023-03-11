

const employee = {
    name: 'Sam',
    StreetAdress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

}


function destructivelyUpdateEmployeeWithKeyAndValue(Sam,key,value){
    Sam[key]=value;
    return Sam;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {employee};
    employee[key]= 'Sam';
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;

}
