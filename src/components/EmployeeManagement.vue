<!-- src/components/EmployeeManagement.vue -->
<template>
    <div class="employee-management">
        <img src="@/images/Employee-Management-Meaning-Importance-Tips-Tools---More.png" alt="">
      <h1>Employee Management</h1>
      <p>Welcome to the Employee Management system!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmployeeManagement'
  };
  </script>
  
  <style scoped>
  .employee-management {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f4f8;
    color: #333;
    text-align: center;
  }
  
  .employee-management h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #238326;
    font-family: 'Comic Sans MS', cursive;
  }
  
  .employee-management p {
    font-size: 1.25rem;
    color: #555;
  }
  </style>
  