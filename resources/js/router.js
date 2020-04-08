import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'
import Example from './views/Example'
//Courses imports
import CoursesIndex from './views/courses/Index'
import CoursesEdit from './views/courses/Edit'
import CoursesCreate from './views/courses/Create'
import CourseShow from './views/courses/Show'
//Enrolments imports
import EnrolmentsIndex from './views/enrolments/Index'
import EnrolmentsShow from './views/enrolments/Show'
import EnrolmentsCreate from './views/enrolments/Create'
import EnrolmentsEdit from './views/enrolments/Edit'
//lecturer imports
import LecturersIndex from './views/lecturers/Index'
import LecturersShow from './views/lecturers/Show'
import LecturersCreate from './views/lecturers/Create'
import LecturersEdit from './views/lecturers/Edit'








Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/courses',
      name: 'coursesIndex',
      component: CoursesIndex
    },
    {
      path: '/courses/show/:id',
      name: 'coursesShow',
      component: CourseShow
    },
    {
      path: '/courses/edit/:id',
      name: 'coursesEdit',
      component: CoursesEdit
    },
    {
      path: '/courses/create',
      name: 'coursesCreate',
      component: CoursesCreate
    },    
    {
      path: '/enrolments',
      name: 'enrolmentsIndex',
      component: EnrolmentsIndex
    },
    {
      path: '/enrolments/show/:id',
      name: 'enrolmentsShow',
      component: EnrolmentsShow
    },
    {
      path: '/enrolments/create',
      name: 'enrolmentsCreate',
      component: EnrolmentsCreate
    },
    {
      path: '/enrolments/edit/:id',
      name: 'enrolmentsEdit',
      component: EnrolmentsEdit
    },    
    {
      path: '/lecturers',
      name: 'lecturerIndex',
      component: LecturersIndex
    },    
    {
      path: '/lecturers/show/:id',
      name: 'lecturersShow',
      component: LecturersShow
    },  
    {
      path: '/lecturers/create',
      name: 'lecturersCreate',
      component: LecturersCreate
    },
    {
      path: '/lecturers/edit/:id',
      name: 'lecturersEdit',
      component: LecturersEdit
    }
  ]
})
