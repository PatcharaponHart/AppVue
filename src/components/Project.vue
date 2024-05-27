<template>
    <div class="projects">
      <router-link class="navbar-item" to="/push-project"><i class="pi pi-plus" style="font-size: 0.7rem;"></i> New </router-link>
      <router-link class="navbar-item" to="/update-project"><i class="pi pi-plus" style="font-size: 0.7rem;"></i> Update </router-link>
      <h1>Project List</h1>
      <table>
        <thead>
          <tr>
            <th>ProjectID</th>
            <th>ProjectName</th>
            <th>FirstName</th>
            <th>ManagerID</th>
            <th>JobTitle</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.ProjectID">
            <td>{{ project.projectID }}</td>
            <td>{{ project.projectName }}</td>
            <td>{{ project.firstName }}</td>
            <td>{{ project.managerID }}</td>
            <td>{{ project.jobTitle }}</td>
            <td>{{ project.startDate }}</td>
            <td>{{ project.endDate }}</td>
            <td><button @click="deleteProject(project.projectID)">Delete</button></td>
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
      },
      async deleteProject(projectID) {
      try {
        console.log('Deleting department with ID:', projectID);
        const response = await fetch(`https://localhost:7021/api/Project/DeleteProject/${projectID}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }
        alert('Project deleted successfully!');
        console.log('Project deleted successfully');
        this.fetchProjects(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Error deleting project: ' + error.message);
      }
    }
    }
  };
  </script>
  
  <style scoped>
  .projects a{
    line-height: 18px;
  color: #ffffff;
  padding: 10px;
  gap: 18px;
  align-self: end;
  font-size: 1.1rem;
  border: 3px solid #e6dd25;
  border-radius: 7px;
  background-color: #0cd6d3;
  text-decoration: none;
  }
  
  .projects {
    padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
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
  tbody tr:hover {
  background-color: #ddd;
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
  