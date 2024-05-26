<template>
    <div class="push-department">
      <h1>Add New Department</h1>
      <form @submit.prevent="submitDepartment">
        <div class="form-group">
          <label for="departmentName">Department Name:</label>
          <input type="text" id="departmentName" v-model="department.departmentName" required />
        </div>
        <div class="form-group">
          <label for="managerID">Manager ID:</label>
          <input type="text" id="managerID" v-model="department.managerID" required />
        </div>
        <div class="form-group">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" v-model="department.projectName" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PushDepartment',
    data() {
      return {
        department: {
          departmentName: '',
          managerID: '',
          projectName: ''
        }
      };
    },
    methods: {
      async submitDepartment() {
        try {
          const response = await fetch('https://localhost:7021/api/Department/PushDepartment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.department)
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Department added successfully!');
          this.resetForm();
        } catch (error) {
          console.error('Error adding department:', error);
          alert('Error adding department: ' + error.message);
        }
      },
      resetForm() {
        this.department = {
          departmentName: '',
          managerID: '',
          projectName: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .push-department {
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
  