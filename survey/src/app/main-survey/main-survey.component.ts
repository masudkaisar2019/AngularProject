import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-survey',
  templateUrl: './main-survey.component.html',
  styleUrls: ['./main-survey.component.css']
})
export class MainSurveyComponent implements OnInit {
  allData = {
    heading: 'Welcome to Survey App',
    questions : [
      {
        question: 'How are you felling to work with Amazon ?',
        options: [
          {
            choice: 'Excellent',
            color: 'green'
          },
          {
            choice: 'Good',
            color: 'Blue'
          },
          {
            choice: 'Uncomfortble',
            color: 'brown'
          },
          {
            choice: 'poor',
            color: 'red'
          }
        ]

      },
      {
        question: 'How are the work station ?',
        options: [
          {
            choice: 'Excellent',
            color: 'green'
          },
          {
            choice: 'Good',
            color: 'Blue'
          },
          {
            choice: 'Uncomfortble',
            color: 'brown'
          },
          {
            choice: 'poor',
            color: 'red'
          }
        ]
      },
      {
        question: 'How are restroom in work station ?',
        options: [
          {
            choice: 'Excellent',
            color: 'green'
          },
          {
            choice: 'Good',
            color: 'Blue'
          },
          {
            choice: 'Uncomfortble',
            color: 'brown'
          },
          {
            choice: 'poor',
            color: 'red'
          }
        ]
      },
      {
        question: 'How are the employee associate in work station?',
        options: [
          {
            choice: 'Excellent',
            color: 'green'
          },
          {
            choice: 'Good',
            color: 'Blue'
          },
          {
            choice: 'Uncomfortble',
            color: 'brown'
          },
          {
            choice: 'poor',
            color: 'red'
          }
        ]
      },
    ]};
  constructor() {
    console.log(this.allData.questions[0].options);
   }


  ngOnInit() {
  }

}
