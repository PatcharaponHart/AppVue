<template>
    <div class="update-project">
      <h1>Update Project</h1>
      <form @submit.prevent="updateProject">
        <div class="form-group">
          <label for="projectID">Project ID:</label>
          <input type="number" id="projectID" v-model="project.projectID" required />
        </div>
        <div class="form-group">
          <label for="projectName">Project Name:</label>
          <input type="text" id="projectName" v-model="project.projectName" required />
        </div>
        <div class="form-group">
          <label for="departmentID">Department ID:</label>
          <input type="text" id="departmentID" v-model="project.departmentID" required />
        </div>
        <div class="form-group">
          <label for="startDate">Start Date:</label>
          <input type="datetime-local" id="startDate" v-model="project.startDate" />
        </div>
        <div class="form-group">
          <label for="endDate">End Date:</label>
          <input type="datetime-local" id="endDate" v-model="project.endDate" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateProject',
    data() {
      return {
        project: {
        projectID: '',
          projectName: '',
          departmentID: '',
          startDate: '',
          endDate: ''
        },
        isUpdating: false
      };
    },
    methods: {
  async updateProject() {
    if (this.isUpdating) return; // ป้องกันการเรียกซ้ำ
    this.isUpdating = true;
    console.log('Updating project:', this.project);
    try {
      const response = await fetch('https://localhost:7021/api/Project/UpdateProject', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.project)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Project updated successfully!');
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Error updating project: ' + error.message);
    } finally {
      this.isUpdating = false;
    }
  }
},

    created() {
      // หากคุณต้องการโหลดข้อมูลโปรเจคที่ต้องการอัปเดตก่อน
      // คุณสามารถเรียกเมธอดเพื่อโหลดข้อมูลโปรเจคตาม ID จาก API ได้ที่นี่
      // หรือคุณอาจใช้ route parameter จาก URL หากมี
    }
  };
  </script>
  
  <style scoped>
  .update-project {
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
  