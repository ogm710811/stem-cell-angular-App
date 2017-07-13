import { Component, OnInit } from '@angular/core';
import { ActivatedRoute    } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  private patientId;

  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.patientId = (params['id']);
        console.log(`PATIENT ID FROM PATIENT LIST => ${ this.patientId }`);
      })
  }

}
