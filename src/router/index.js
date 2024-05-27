import { createRouter, createWebHistory } from 'vue-router';
import Employee from '@/components/Employee.vue';
import PushEmployee from '@/components/PushEmployee.vue';
import UpdateEmployee from '@/components/UpdateEmployee.vue';
import Department from '@/components/Department.vue';
import PushDepartment from '@/components/PushDepartment.vue';
import UpdateDepartment from '@/components/UpdateDepartment.vue';
import Project from '@/components/Project.vue';
import PushProject from '@/components/PushProject.vue';
import UpdateProject from '@/components/UpdateProject.vue';
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
    path: '/update-employee',
    name: 'UpdateEmployee',
    component: UpdateEmployee
  },
  {
    path: '/departments',
    name: 'Department',
    component: Department
  },
  {
    path: '/push-department',
    name: 'PushDepartment',
    component: PushDepartment
  },
  {
    path: '/update-department',
    name: 'UpdateDepartment',
    component: UpdateDepartment
  },
  {
    path: '/projects',
    name: 'Project',
    component: Project
  },
  {
    path: '/update-project',
    name: 'UpdateProject',
    component: UpdateProject
  },
  {
    path: '/push-project',
    name: 'PushProject',
    component: PushProject
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
