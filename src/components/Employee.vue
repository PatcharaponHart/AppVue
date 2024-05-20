<template>
  <div class="employees">
    <h1>Employees List</h1>
    <!-- เพิ่ม input field และ dropdown สำหรับค้นหา -->
    <div class="search-box">
      <select v-model="searchType" class="search-select">
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="project">Project</option>
        <option value="jobTitle">Job Title</option>
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
          <th>JobTitle</th>
        </tr>
      </thead>
      <tbody>
        <!-- แก้ไขการแสดงข้อมูลใน tbody เพื่อให้แสดงเฉพาะข้อมูลที่ตรงกับคำค้นหา -->
        <tr v-for="employee in filteredEmployees" :key="employee.EmployeeID">
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.gender }}</td>
          <td>{{ employee.projectName }}</td>
          <td>{{ employee.jobTitle }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import 'primeicons/primeicons.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Employee',
  data() {
    return {
      employees: [],
      searchQuery: '',
      searchType: 'name' // เพิ่ม searchType สำหรับระบุประเภทการค้นหา
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
    }
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter(employee => {
        const query = this.searchQuery.toLowerCase();
        if (this.searchType === 'name') {
          const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
          return fullName.includes(query);
        } else if (this.searchType === 'email') {
          return employee.email.toLowerCase().includes(query);
        } else if (this.searchType === 'project') {
          return employee.projectName.toLowerCase().includes(query);
        } else if (this.searchType === 'jobTitle') {
          return employee.jobTitle.toLowerCase().includes(query);
        }
        return false;
      });
    }
  }
};
</script>

<style scoped>
.employees {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

h1 {
  margin-bottom: 20px;
  color: #4CAF50;
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

/* สไตล์ SearchBox */
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
</style>
