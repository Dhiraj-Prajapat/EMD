document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', function () {
    const department = this.getAttribute('data-department');
    window.location.href = `src/employee_list.html?department=${department}`;
  });
});

// Add Employee Form Validation
const addEmployeeForm = document.getElementById('addEmployeeForm');
const employeeName = document.getElementById('employeeName');
const employeeEmail = document.getElementById('employeeEmail');
const employeeContact = document.getElementById('employeeContact');
const genderSelect = document.getElementById('gender');
const employeeSalary = document.getElementById('employeeSalary');
const employeeDepartment = document.getElementById('employeeDepartment');
const nameError = document.getElementById('nameError');
const mailError = document.getElementById('mailError');
const contactError = document.getElementById('contactError');
const salaryError = document.getElementById('salaryError');
const departmentError = document.getElementById('departmentError');

addEmployeeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let isValid = true;

  // Name validation
  if (employeeName.value.trim() === '') {
    nameError.textContent = 'Please enter a valid name.';
    employeeName.classList.add('is-invalid');
    isValid = false;
  } else {
    nameError.textContent = '';
    employeeName.classList.remove('is-invalid');
  }

  // Email validation
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(employeeEmail.value)) {
    mailError.textContent = 'Please enter a valid email address.';
    employeeEmail.classList.add('is-invalid');
    isValid = false;
  } else {
    mailError.textContent = '';
    employeeEmail.classList.remove('is-invalid');
  }

  // Contact number validation
  if (!employeeContact.value.match(/^\d{10}$/)) {
    contactError.textContent = 'Please enter a 10-digit contact number.';
    employeeContact.classList.add('is-invalid');
    isValid = false;
  } else {
    contactError.textContent = '';
    employeeContact.classList.remove('is-invalid');
  }

  // Gender validation
  if (genderSelect.value === '') {
    genderSelect.classList.add('is-invalid');
    isValid = false;
  } else {
    genderSelect.classList.remove('is-invalid');
  }

  // Salary validation
  if (employeeSalary.value <= 0) {
    salaryError.textContent = 'Please enter a valid salary.';
    employeeSalary.classList.add('is-invalid');
    isValid = false;
  } else {
    salaryError.textContent = '';
    employeeSalary.classList.remove('is-invalid');
  }

  // Department validation
  if (employeeDepartment.value == '') {
    departmentError.textContent = 'Please select a department.';
    employeeDepartment.classList.add('is-invalid');
    isValid = false;
  } else {
    // departmentError.textContent = '';
    employeeDepartment.classList.remove('is-invalid');
  }

  // If form is not valid, exit
  if (!isValid) return;

  // Check if email already exists
  const selectedDepartment = employeeDepartment.value;
  let employees = JSON.parse(localStorage.getItem(selectedDepartment)) || [];
  const isDuplicate = employees.some(employee => employee.email === employeeEmail.value);
  if (isDuplicate) {
    mailError.innerText = "This email is already taken.";
    return;
  }

  // Creating employee object and storing it in localStorage
  const employee = {
    name: employeeName.value,
    email: employeeEmail.value,
    gender: genderSelect.value,
    contact: employeeContact.value,
    salary: employeeSalary.value,
    department: employeeDepartment.value
  };

  employees.push(employee);
  localStorage.setItem(selectedDepartment, JSON.stringify(employees));
  alert(`${employee.name} added successfully to ${selectedDepartment} department!`);

  // Reset form and modal
  addEmployeeForm.reset();
  addEmployeeForm.classList.remove('was-validated');
  var myModalEl = document.getElementById('addEmployeeModal');
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
});

// Cancel button resets form and clears validation classes
document.querySelector('.cancel-btn').addEventListener('click', function () {
  addEmployeeForm.reset();
  const myModalEl = document.getElementById('addEmployeeModal');
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();

  // Clear validation classes and error messages
  document.querySelectorAll('.is-valid, .is-invalid').forEach(input => {
    input.classList.remove('is-valid', 'is-invalid');
  });
  nameError.textContent = '';
  mailError.textContent = '';
  contactError.textContent = '';
  salaryError.textContent = '';
  departmentError.textContent = '';
});
