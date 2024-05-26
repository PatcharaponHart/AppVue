<template>
    <div class="update-employee">
      <h1>Update Employee</h1>
      <form @submit.prevent="updateEmployee">
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
            <option disabled value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" v-model="employee.jobTitle" required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateEmployee',
    data() {
      return {
        employee: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          jobTitle: ''
        }
      };
    },
    methods: {
      async updateEmployee() {
        try {
          const response = await fetch('https://localhost:7021/api/Employee/UpdateEmployee', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.employee)
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Employee updated successfully!');
          // คุณสามารถเพิ่มการนำทางกลับไปยังหน้ารายการพนักงานหลังจากการอัปเดตได้ที่นี่
        } catch (error) {
          console.error('Error updating employee:', error);
          alert('Error updating employee: ' + error.message);
        }
      }
    },
    created() {
      // คุณอาจต้องรับข้อมูลของพนักงานที่ต้องการอัปเดตด้วยวิธีใดวิธีหนึ่ง
      // เช่น การส่งพารามิเตอร์ ID ผ่าน URL หรือการดึงข้อมูลจาก API อื่น ๆ
      // และกำหนดค่าให้กับ this.employee เพื่อให้มีข้อมูลที่ต้องการอัปเดต
    }
  };
  </script>
  
  <style scoped>
  .update-employee {
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
  
  input, select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
  }
  
  input:focus, select:focus {
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
  