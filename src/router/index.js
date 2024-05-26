import { createRouter, createWebHistory } from 'vue-router';
import Employee from '@/components/Employee.vue';
import PushEmployee from '@/components/PushEmployee.vue';
import UpdateEmployee from '@/components/UpdateEmployee.vue';
import Department from '@/components/Department.vue';
import PushDepartment from '@/components/PushDepartment.vue';
import Project from '@/components/Project.vue';
import PushProject from '@/components/PushProject.vue';
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
    path: '/projects',
    name: 'Project',
    component: Project
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
