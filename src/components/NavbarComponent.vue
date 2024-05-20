<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item logo" to="/">
            Employee Management
          </router-link>
        </div>
        <div id="navbar-menu-container">
          <div class="navbar-menu">
            <router-link class="navbar-item" to="/employees">Employees</router-link>
            <router-link class="navbar-item" to="/departments">Departments</router-link>
            <router-link class="navbar-item" to="/projects">Projects</router-link>
            <router-link class="navbar-item" to="/push-employee">+Add Employee</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #4CAF50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* ลด Padding เพื่อให้ Navbar ดู Compact ขึ้น */
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.5rem; /* ลดขนาด Font ของ Logo */
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

#navbar-menu-container {
  display: flex;
  align-items: center; /* จัดให้ Navbar Menu แนวตั้งอยู่ตรงกลาง */
}

.navbar-menu {
  display: flex;
}

.navbar-item {
  font-size: 1rem; /* ลดขนาด Font ของ Navbar Items */
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
  color: #fff;
}

.navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px; /* เพิ่มเอฟเฟกต์เมื่อ Hover */
  transition: background-color 0.3s ease; /* เพิ่มเอฟเฟกต์เมื่อ Hover */
}
</style>
