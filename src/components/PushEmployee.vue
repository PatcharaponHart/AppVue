<template>
    <div class="push-employee">
      <h1>Add New Employee</h1>
      <form @submit.prevent="submitEmployee">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="employee.firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="employee.lastName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="employee.email" required />
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <select id="gender" v-model="employee.gender" required>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" v-model="employee.projectName" required />
        </div>
        <div class="form-group">
          <label for="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" v-model="employee.jobTitle" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PushEmployee',
    data() {
      return {
        employee: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          projectName: '',
          jobTitle: ''
        }
      };
    },
    methods: {
      async submitEmployee() {
        try {
          const response = await fetch('https://localhost:7021/api/Employee/PushEmployee', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.employee)
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Employee added successfully!');
          this.resetForm();
        } catch (error) {
          console.error('Error adding employee:', error);
          alert('Error adding employee: ' + error.message);
        }
      },
      resetForm() {
        this.employee = {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          projectName: '',
          jobTitle: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .push-employee {
    padding: 20px;
    max-width: 600px;
    margin: 60px auto; /* เพื่อหลีกเลี่ยงการชนกับ navbar */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงา */
    border-radius: 10px; /* เพิ่มมุมโค้ง */
    background-color: #f9f9f9; /* เพิ่มสีพื้นหลัง */
  }
  
  h1 {
    color: #4CAF50;
    margin-bottom: 20px;
    text-align: center; /* จัดตำแหน่งให้กลาง */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  