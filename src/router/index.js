import { createRouter, createWebHistory } from 'vue-router';
import Employee from '@/components/Employee.vue';
import PushEmployee from '@/components/PushEmployee.vue';
import Department from '@/components/Department.vue';
import Project from '@/components/Project.vue';
import EmployeeManagement from '@/components/EmployeeManagement.vue'; // นำเข้า EmployeeManagement.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: EmployeeManagement // เส้นทางสำหรับหน้าแรก
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employee
  },
  {
    path: '/push-employee',
    name: 'PushEmployee',
    component: PushEmployee
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
