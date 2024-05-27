<template>
  <div class="departments">
    <router-link class="navbar-item" to="/push-department"><i class="pi pi-plus" style="font-size: 0.7rem;"></i> New </router-link>
    <router-link class="navbar-item" to="/update-department"><i class="pi pi-plus" style="font-size: 0.7rem;"></i> Update </router-link>
    <h1>Departments List</h1>
    <table>
      <thead>
        <tr>
          <th>DepartmentName</th>
          <th>Manager ID</th>
          <th>ProjectName</th>
          <th>Actions</th> <!-- เพิ่มคอลัมน์ Actions -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="department in departments" :key="department.departmentID">
          <td>{{ department.departmentName }}</td>
          <td>{{ department.managerID }}</td>
          <td>{{ department.projectName }}</td>
          <td><button @click="deleteDepartment(department.departmentID)">Delete</button></td>
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
    },
    async deleteDepartment(departmentID) {
      try {
        console.log('Deleting department with ID:', departmentID);
        const response = await fetch(`https://localhost:7021/api/Department/DeleteDepartment/${departmentID}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }
        alert('Department deleted successfully!');
        console.log('Department deleted successfully');
        this.fetchDepartments(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting department:', error);
        alert('Error deleting department: ' + error.message);
      }
    }
  }
};
</script>

<style scoped>
.departments a {
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

.departments {
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
  color: #4CAF50;
  font-family: 'Comic Sans MS', cursive;
  font-size: 35px;
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
