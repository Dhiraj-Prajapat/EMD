document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const department = urlParams.get('department') || 'default';
    document.getElementById('department-name').innerText = `${department} Department`;

    const employees = JSON.parse(localStorage.getItem(department)) || [];
    const tbody = document.getElementById('employee-table-body');
    const loader = document.getElementById('loader');
    const noData = document.getElementById('no-data');


    const renderEmployees = () => {
        tbody.innerHTML = '';
        loader.style.display = 'block'; // it is for loader display

        setTimeout(() => { // Simulating a small delay for loader visibility
            loader.style.display = 'none'; // Hide loader
            if (employees.length === 0) {
                noData.style.display = 'block'; // Show no data message
            } else {
                noData.style.display = 'none'; // Hide no data message

                employees.forEach((employee, index) => {
                    const row = document.createElement('tr');

                    function genderImg() {
                        let img;
                        if (employee.gender === "male") {
                            img = `https://avatar.iran.liara.run/username?username=[${employee.name}]`;
                        } else if (employee.gender === "female") {
                            img = `https://avatar.iran.liara.run/public/girl?username=[${employee.name}]`;
                        } else {
                            img = `https://avatar.iran.liara.run/public/default?username=[${employee.name}]`; // Fallback image
                        }
                        return img;
                    }

                    row.innerHTML = `
                    
                    <td data-label="Profile"><img id="image" src="${genderImg()}" alt="Profile Image"></td>
                    <td data-label="Name">${employee.name}</td>
                    <td data-label="Email">${employee.email}</td>
                    <td data-label="Contact">${employee.contact}</td>
                    <td data-label="Salary">${employee.salary}</td>

                    <td class="act-btn">
                        <button class="btn" onclick="editEmployee(${index})"><i class="fa-regular fa-pen-to-square"></i></button>
                        <button class="btn" onclick="deleteEmployee(${index})"><i class="fa-solid fa-trash-can"></i></button>
                    </td> 
                    
                `;
                    tbody.appendChild(row);

                });
            }
        }, 2000);
    };
    renderEmployees();

    window.editEmployee = (index) => {
        const employee = employees[index];
        document.getElementById('editEmployeeName').value = employee.name;
        document.getElementById('editEmployeeEmail').value = employee.email;
        document.getElementById('editEmployeeContact').value = employee.contact;
        document.getElementById('editEmployeeGender').value = employee.gender;
        document.getElementById('editEmployeeSalary').value = employee.salary;
        document.getElementById('editEmployeeDepartment').value = employee.department;

        const form = document.getElementById('editEmployeeForm');
        form.onsubmit = (event) => {
            event.preventDefault();
            employee.name = document.getElementById('editEmployeeName').value;
            employee.email = document.getElementById('editEmployeeEmail').value;
            employee.contact = document.getElementById('editEmployeeContact').value;
            employee.gender = document.getElementById('editEmployeeGender').value;
            employee.salary = document.getElementById('editEmployeeSalary').value;
            employee.department = document.getElementById('editEmployeeDepartment').value;
            localStorage.setItem(department, JSON.stringify(employees));
            alert('Employee updated successfully!');
            var modal = bootstrap.Modal.getInstance(document.getElementById('editEmployeeModal'));
            modal.hide();
            renderEmployees();
        };

        var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('editEmployeeModal'));
        modal.show();

    };


    window.deleteEmployee = (index) => {
        const employeeToDelete = employees[index];

        if (confirm(`Are you sure you want to delete ${employeeToDelete.name}?`)) {
            employees.splice(index, 1);

            if (shouldUseLocalStorage()) {
                localStorage.setItem(department, JSON.stringify(employees));
            }

            renderEmployees();
        }
    };


    function shouldUseLocalStorage() {
        return true;
    }
});
