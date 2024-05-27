<template>
  <div class="push-project">
    <h1>Push New Project</h1>
    <form @submit.prevent="submitProject">
      <div class="form-group">
        <label for="projectName">Project Name:</label>
        <input type="text" id="projectName" v-model="newProject.projectName" required />
      </div>

      <div class="form-group">
        <label for="departmentID">Department ID:</label>
        <input type="text" id="departmentID" v-model="newProject.departmentID" required />
      </div>

      <div class="form-group">
        <label for="startDate">Start Date:</label>
        <input type="datetime-local" id="startDate" v-model="newProject.startDate" required />
      </div>

      <div class="form-group">
        <label for="endDate">End Date:</label>
        <input type="datetime-local" id="endDate" v-model="newProject.endDate" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PushProject',
  data() {
    return {
      newProject: {
        projectName: '',
        departmentID: '',
        startDate: '',
        endDate: ''
      }
    };
  },
  methods: {
    async submitProject() {
      try {
        // แปลงวันที่ให้อยู่ในรูปแบบที่ถูกต้อง
        const formattedProject = {
          ...this.newProject,
          startDate: this.newProject.startDate ? new Date(this.newProject.startDate).toISOString() : null,
          endDate: this.newProject.endDate ? new Date(this.newProject.endDate).toISOString() : null
        };

        const response = await fetch('https://localhost:7021/api/Project/PushProject', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formattedProject)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Project added successfully');
        this.resetForm();
      } catch (error) {
        console.error('Error adding project:', error);
        alert('Error adding project: ' + error.message);
      }
    },
    resetForm() {
      this.newProject = {
        projectName: '',
        managerID: '',
        jobTitle: '',
        startDate: '',
        endDate: ''
      };
    }
  }
};
</script>

<style scoped>
.push-project {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px; /* เพื่อหลีกเลี่ยงการชนกับ navbar */
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

form {
  width: 90%;
  max-width: 600px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงา */
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50; /* เปลี่ยนสีปุ่ม */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
