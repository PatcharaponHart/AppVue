<template>
  <div class="employees">
    <h1>Employees List</h1>
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
        <tr v-for="employee in employees" :key="employee.EmployeeID">
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
  margin-top: 60px; /* เพื่อหลีกเลี่ยงการชนกับ navbar */
}

h1 {
  margin-bottom: 20px;
  color: #4CAF50; /* เปลี่ยนสีหัวเรื่อง */
}

table {
  width: 90%;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงา */
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #4CAF50; /* เปลี่ยนสีหัวข้อ */
  color: white;
}

tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

tbody tr:nth-child(even) {
  background-color: #eaf2e3;
}

tbody tr:hover {
  background-color: #ddd; /* เพิ่มเอฟเฟกต์เมื่อเมาส์ชี้ */
}
</style>
