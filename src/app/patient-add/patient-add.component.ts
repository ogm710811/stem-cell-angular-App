import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  display: String;
  class: String;

  constructor() { }

  ngOnInit() {
  }

  setDisplay() {
      this.display = "block";

      if (this.class = "expanded") {
        this.class = "";
      } else {
        this.class = "expanded";
      }
  }
}
