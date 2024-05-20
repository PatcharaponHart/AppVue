<template>
  <div class="employees">
    <h1>Employees List</h1>
    <!-- เพิ่ม input field สำหรับค้นหา -->
    <div class="search-box">
      <input type="text" v-model="searchQuery" placeholder="Search...">
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Employee',
  data() {
    return {
      employees: [],
      searchQuery: '' // เพิ่มคุณสมบัติ searchQuery สำหรับการค้นหา
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
    // เพิ่ม computed property สำหรับกรอง employees ตามคำค้นหา
    filteredEmployees() {
      return this.employees.filter(employee => {
        const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
        return fullName.includes(this.searchQuery.toLowerCase());
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

.search-box {
  margin-bottom: 20px;
}
</style>
