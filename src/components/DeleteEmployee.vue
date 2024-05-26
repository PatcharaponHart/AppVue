<template>
    <div class="delete-employee">
      <h1>Delete Employee</h1>
      <div class="employee-list">
        <ul>
          <li v-for="employee in employees" :key="employee.EmployeeID">
            <span>{{ employee.firstName }} {{ employee.lastName }}</span>
            <button @click="deleteEmployee(employee.EmployeeID)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeleteEmployee',
    data() {
      return {
        employees: []
      };
    },
    created() {
      this.fetchEmployees();
    },
    methods: {
      async fetchEmployees() {
        try {
          const response = await fetch('https://localhost:7021/api/Employee/GetDataList');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.employees = data;
        } catch (error) {
          console.error('Error fetching employees:', error);
          alert('Error fetching employees: ' + error.message);
        }
      },
      async deleteEmployee(employeeID) {
        try {
          const response = await fetch(`https://localhost:7021/api/Employee/DeleteEmployee/${employeeID}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Employee deleted successfully!');
          this.fetchEmployees(); // Refresh the list after deletion
        } catch (error) {
          console.error('Error deleting employee:', error);
          alert('Error deleting employee: ' + error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .delete-employee {
    padding: 20px;
    max-width: 600px;
    margin: 80px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
  }
  
  h1 {
    color: #FF5733;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.7rem;
    padding: 10px 20px;
    background-color: #f0f4f8;
    border-radius: 20px;
    border: 2px solid rgb(183, 28, 12);
  }
  
  .employee-list {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
  }
  
  button {
    background-color: #FF5733;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #FF4500;
  }
  </style>
  