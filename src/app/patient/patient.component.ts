import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  title = "PATIENT'S DETAILS : "
  details = ["Name","DOD","Dept","Ward","DOA","Phone #"]

  ngOnInit(){}
}
