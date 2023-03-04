import { Component } from '@angular/core';

import { User } from './user.model';
import { Project, projectDepartments, projectStatus } from './projects.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paaap-final';
  roleSelect = ['manager', 'worker']

  public projects: Project[] =
  [
    {
      code: 'p1',
      name: 'job1',
      status: projectStatus.active,
      department: projectDepartments.fs,
      dateStart: new Date('2021-01-03'),
      dateEnd: new Date('2021-05-23'),
      workersById: []
    },
    {
      code: 'p2',
      name: 'job2',
      status: projectStatus.closed,
      department: projectDepartments.mil,
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    },
    {
      code: 'p3',
      name: 'jobabity 3',
      status: projectStatus.active,
      department: projectDepartments.mv,
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    },
    {
      code: 'p4',
      name: 'job 4 4',
      status: projectStatus.dormant,
      department: projectDepartments.other,
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    }
  ];

  public users: User[] =
  [
    {
      userId: '1',
      name: 'boet',
      role: 'manager',
      costRate: 15,
      billingRate: 14,
      projects: ['p1', 'p2'],
      loggedIn: true
    },
    new User('2', 'sannie', 'worker', 10, 20, ['p1', 'p3']),
    new User('3', 'klaas', 'worker', 50, 60,  ['p3']),
    new User('4', 'baas', 'manager', 12, 25, ['p2', 'p3'])
];
}
