<template>
    <div class="update-department">
      <h1>Update Department</h1>
      <form @submit.prevent="updateDepartment">
        <div class="form-group">
          <label for="departmentID">ID:</label>
          <input type="number" id="departmentID" v-model="department.departmentID" required />
        </div>
        <div class="form-group">
          <label for="departmentName">Department Name:</label>
          <input type="text" id="departmentName" v-model="department.departmentName" required />
        </div>
        <div class="form-group">
          <label for="managerID">Manager ID:</label>
          <input type="number" id="managerID" v-model="department.managerID" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateDepartment',
    data() {
      return {
        department: {
          departmentID: this.$route.params.id,
          departmentName: '',
          managerID: ''
        }
      };
    },
    methods: {
      async updateDepartment() {
        try {
          const response = await fetch('https://localhost:7021/api/Department/UpdateDepartment', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.department)
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Department updated successfully!');
          this.$router.push({ name: 'Department' });
        } catch (error) {
          console.error('Error updating department:', error);
          alert('Error updating department: ' + error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .update-department {
    padding: 20px;
    max-width: 600px;
    margin: 80px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
  }
  
  h1 {
    color: #4CAF50;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.7rem;
    padding: 10px 20px;
    background-color: #f0f4f8;
    border-radius: 20px;
    border: 2px solid rgb(12, 138, 19);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
  }
  
  input:focus {
    border-color: #4CAF50;
    outline: none;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    width: 40%;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  