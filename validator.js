/* Validation schema */
const personSchema = {
  name: 'string',
  age: 'number',
  siblings: 'array',
  metaData: 'object',
  active: 'boolean'
};

/* Data object, change the values to check if the validator works */
const personObj = {
  name: 'James',
  age: 25,
  siblings: ['Johnnathan'],
  metaData: {},
  active: true
};

/* Validator function */
let validated = true;

for (const key in personSchema) {
  const checkType = personSchema[key]
  switch (checkType) {
    case 'array':
      if (!Array.isArray(personObj[key])) {
        validated = false
      }
      break
    default:
      if (typeof personObj[key] !== checkType) {
        validated = false
      }
  }
}

/* Output */
document.getElementById("validator").innerText = validated
