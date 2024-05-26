<template>
  <div class="employees">
    <router-link class="navbar-item" to="/push-employee"><i class="pi pi-plus" style="font-size: 0.7rem;"></i> New </router-link>
    <h1>Employees List</h1>
    <div class="search-box">
      <select v-model="searchDepartment" class="search-select">
        <option value="">All Departments</option>
        <option v-for="department in departments" :value="department.departmentName" :key="department.DepartmentID">{{ department.departmentName }}</option>
      </select>
      <input type="text" v-model="searchQuery" placeholder="Search..." class="search-input">
      <i class="pi pi-search search-icon"></i>
    </div>
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Gender</th>
          <th>ProjectName</th>
          <th>DepartmentName</th>
          <th>JobTitle</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in filteredEmployees" :key="employee.EmployeeID">
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.gender }}</td>
          <td>{{ employee.projectName }}</td>
          <td>{{ employee.departmentName }}</td>
          <td>{{ employee.jobTitle }}</td>
          <td><button @click="deleteEmployee(employee.EmployeeID)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import 'primeicons/primeicons.css';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Employee',
  data() {
    return {
      employees: [],
      departments: [],
      searchQuery: '',
      searchDepartment: ''
    };
  },
  created() {
    this.fetchEmployees();
    this.fetchDepartments();
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
    async fetchDepartments() {
      try {
        const response = await fetch('https://localhost:7021/api/Department/GetDataList');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.departments = data;
      } catch (error) {
        console.error('Error fetching departments:', error);
        alert('Error fetching departments: ' + error.message);
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
  },
  computed: {
    filteredEmployees() {
      const query = this.searchQuery.toLowerCase();
      const selectedDepartment = this.searchDepartment.toLowerCase();
      return this.employees.filter(employee => {
        const departmentName = employee.departmentName.toLowerCase();
        return (selectedDepartment === '' || departmentName === selectedDepartment) &&
               (query === '' || employee.firstName.toLowerCase().includes(query) || employee.lastName.toLowerCase().includes(query));
      });
    }
  }
};
</script>

<style scoped>
.employees a {
  color: #ffffff;
  padding: 10px;
  align-self: end;
  font-size: 1.1rem;
  border: 3px solid #f59c4f;
  border-radius: 7px;
  background-color: #0cd6d3;
  text-decoration: none;
}

.employees {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  background-color: #d0f9fc;
}

h1 {
  margin-bottom: 20px;
  font-family: 'Comic Sans MS', cursive;
  font-size: 35px;
  color: #328a35;
  padding: 10px 20px;
  border-radius: 7px;
  border: 5px solid rgb(4, 28, 183);
}

table {
  width: 90%;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #4CAF50;
  color: white;
}

tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

tbody tr:nth-child(even) {
  background-color: #eaf2e3;
}

tbody tr:hover {
  background-color: #ddd;
}

.search-box {
  margin-bottom: 20px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
}

.search-input {
  padding: 10px 30px 10px 10px;
  border: 1px solid #ddd;
  border-radius: 0 5px 5px 0;
  width: 200px;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  right: 10px;
  color: #777;
}

button {
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e60000;
}
</style>
