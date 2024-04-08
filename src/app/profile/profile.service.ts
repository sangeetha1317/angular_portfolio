import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Prediction of Association among factors in a disease',
      desc: `To predict the factor that involves the finding of dementia using machine learning algorithms.`,
      githurl: 'https://github.com/sangeetha1317/Dementia',
      tech: 'Python , Jupyter',
      publishedurl: 'https://www.ingentaconnect.com/content/asp/jctn'
    },
    {
      id: 2,
      title: 'Raspberry Pi Zero and Sensors',
      desc: 'Raspberry Pi is equipped with peripherals and sensors that display an output based on actions taken.',
      tech: 'Python, Etcher, Putty, VNC'
    }
  ]
  about2 = `Software Engineer with almost 4 years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular, Typescript,  Node JS and UI with Responsive Designs .
  Expertise in developing REST API based backed system using Express.js.`
  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '80%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'TYPESCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'POSTGRESQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'HTML/CSS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'C/C++',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Sathyabama Institute of Science and Technology is a private deemed university and ranks 6th in Chennai
                Completed B.E in Computer Engineering with 9.54 CGPA.
                Won the Best Student Award 3 times for excellent Academic records at College.
                Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY, CHENNAI'
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2016',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'KENDRIYA VIDHYALAYA, NEW DELHI',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
                There was also a good base on physics, mathematics and chemistry.
                Completed my high school with 75%.`
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Siemens Information and Technology',
      location: 'Bengaluru, India',
      timeline: 'July 2020 - Dec 2023',
      role: 'Software Engineer',
      work: `Technologies : Angular , Node.js, Typescript, PostgreSQL .
      Developed and enhanced the application functionality, optimizing performance and addressing any encountered bugs and issues .
      Design and develop receiving real-time notifications of the status of the plants and processes, through Email and SMS utilizing internal APIs and services .
      Develop and maintain REST APIs Endpoints, which facilitate escalations policies and notifications, application internationalization and theme display scheme.`
    },
    {
      id: 2,
      company: 'Siemens Information and Technology',
      location: 'Bengaluru, India',
      timeline: 'Jan 2020 - May 2020',
      role: 'Software Engineer Intern',
      work: `Technologies : Angular, Typescript, HTML, CSS .
      Identify root causes, provide work arounds, and design fixes for technical problems in the software system.`
    }
  ]

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

}
