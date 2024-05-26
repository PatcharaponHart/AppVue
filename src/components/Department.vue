<template>
    <div class="departments">
      <router-link class="navbar-item" to="/push-department"><i class="pi pi-plus" style="font-size: 0.7rem;"></i> New </router-link>
      <h1>Departments List</h1>
      <table>
        <thead>
          <tr>
            <th>DepartmentName</th>
            <th>Manager ID</th>
            <th>ProjectName</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="department in departments" :key="department.DepartmentID">
            <td>{{ department.departmentName }}</td>
            <td>{{ department.managerID }}</td>
            <td>{{ department.projectName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Department',
    data() {
      return {
        departments: []
      };
    },
    created() {
      this.fetchDepartments();
    },
    methods: {
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
      }
    }
  };
  </script>
  
  <style scoped>
  .departments a{
  color: #ffffff;
  padding: 10px;
  align-self: end;
  font-size: 1.1rem;
  border: 3px solid #e6dd25;
  border-radius: 7px;
  background-color: #0cd6d3;
  text-decoration: none;
  }
  .departments {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px; /* เพื่อหลีกเลี่ยงการชนกับ navbar */
  }
  
  h1 {
    margin-bottom: 20px;
    color: #4CAF50; /* เปลี่ยนสีหัวเรื่อง */
    font-family: 'Comic Sans MS', cursive;
  font-size: 35px;
    padding: 10px 20px;
    border-radius: 7px;
    border:5px solid rgb(4, 28, 183) ;
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
  