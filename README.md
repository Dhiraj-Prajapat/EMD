# Employee Management Dashboard (EMD)

This project is a simple **Employee Management Dashboard (EMD)** that allows users to manage employee details such as adding, editing, and deleting employees. The application is built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap**, with **local storage** used to store and retrieve data. It also includes form validation and uses a free API for generating avatars.

## Features
- **Add Employee**: Add new employees by filling out a form with fields for name, email, contact, gender, salary, and department. The form includes validation to ensure accurate data.
- **Edit Employee**: Modify existing employee details and update the information stored in local storage.
- **Delete Employee**: Remove employees from the list.
- **Employee List**: View a list of employees filtered by department.
- **Data Storage**: Employee data is stored in the browser’s local storage, which is retrieved and managed across sessions.
- **Avatar Generation**: Avatars are generated dynamically using a free API based on the employee’s gender.
- **CRUD Operations**: The application performs Create, Read, Update, and Delete operations on employee records.

## Technology Stack
- **HTML**
- **CSS**
- **JavaScript**
- **Bootstrap**
- **Free Avatar API**: [Avatar API](https://avatar.iran.liara.run/)

## File Structure
```
EMD/
│
├── animated-404-page-main/         # Folder for 404 pages
│
├── src/                            # Main source folder
│   ├── CSS/                        # CSS files
│   ├── JavaScript/                 # JavaScript files
│   ├── images/                     # Image assets
│   └── employee_list.html          # Employee list page
│
├── index.html                      # Main page of the project
├── README.md                       # Project documentation
```

## Usage
1. Clone the repository from GitHub.
2. Open `index.html` in your browser to view the Employee Management Dashboard.
3. Navigate to employee list and manage employees through the dashboard.

## Avatar API
- The project uses a free API to dynamically generate avatars for employees based on their gender:
  - **Male**: `https://avatar.iran.liara.run/public/boy?username=[employee_name]`
  - **Female**: `https://avatar.iran.liara.run/public/girl?username=[employee_name]`

## Local Storage
- The project utilizes the browser's local storage to persist employee data. Employee information will remain stored across sessions.

## How to Run
1. Download or clone the repository.
2. Open `index.html` in any modern browser.
3. Use the dashboard to add, view, edit, and delete employee details.
