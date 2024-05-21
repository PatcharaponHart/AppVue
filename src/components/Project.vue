<template>
    <div class="projects">
      <h1>Project List</h1>
      <table>
        <thead>
          <tr>
        
            <th>ProjectName</th>
            <th>Manager ID</th>
            <th>FirstName</th>
            <th>JobTitle</th>
            <th>StartDate</th>
            <th>EndDate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.ProjectID">
            
            <td>{{ project.projectName }}</td>
            <td>{{ project.managerID }}</td>
            <td>{{ project.firstName }}</td>
            <td>{{ project.jobTitle }}</td>
            <td>{{ project.startDate }}</td>
            <td>{{ project.endDate }}</td>

          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Project',
    data() {
      return {
        projects: []
      };
    },
    created() {
      this.fetchProjects();
    },
    methods: {
      async fetchProjects() {
        try {
          const response = await fetch('https://localhost:7021/api/Project/GetDataList');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.projects = data;
        } catch (error) {
          console.error('Error fetching projects:', error);
          alert('Error fetching projects: ' + error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .projects {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px; /* เพื่อหลีกเลี่ยงการชนกับ navbar */
  }
  
  h1 {
    margin-bottom: 20px;
    color: #4CAF50; /* เปลี่ยนสีหัวเรื่อง */
    padding: 10px 20px;
    border-radius: 7px;
    border:3px solid rgb(4, 28, 183) ;
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
  