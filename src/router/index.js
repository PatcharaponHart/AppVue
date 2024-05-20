// index.js
import { createRouter, createWebHistory } from 'vue-router';
import Employee from '@/components/Employee.vue';
import PushEmployee from '@/components/PushEmployee.vue'; // นำเข้า PushEmployee.vue
import Department from '@/components/Department.vue';
import Project from '@/components/Project.vue';

const routes = [
  {
    path: '/employees',
    name: 'Employees',
    component: Employee
  },
  {
    path: '/push-employee',
    name: 'PushEmployee',
    component: PushEmployee // เพิ่มเส้นทางใหม่สำหรับ PushEmployee.vue
  },
  {
    path: '/departments',
    name: 'Department',
    component: Department
  },
  {
    path: '/projects',
    name: 'Project',
    component: Project
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
