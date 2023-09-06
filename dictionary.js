const cohort = {
    name : 'May2022',
    id : 1234,
    students : ['sara','judith','anna']
}

const obj_returns = (students) => {
    return `${students.id} - ${students.name} - ${students.students.length} students in this cohort`
}

console.log(obj_returns(cohort))