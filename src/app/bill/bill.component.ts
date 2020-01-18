import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { EditComponentComponent } from '../edit-component/edit-component.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(public dialog:MatDialog){}

  billNo = 0;
  name = 'Angular';
  enableEdit = false;
  enableEditIndex;
  date ="";
  time ="";
  total = 1234;
  payable = 1234;
  tableHeader=["Date","HeaderName","ServiceName","Qty","TotalServiceRate","ConcessionAmount","Edit"]
  displayedColumns: string[] = ['date', 'headerName', 'serviceName', 'qty','totalServiceRate','concessionAmt','edit'];
  tableData = [
    {
      "date":'12-12-2019',
      "headerName":'BED CHARGES',
      "serviceName":'BED CHARGES(PER DAY)',
      "qty":'1',
      "totalServiceRate":'300',
      "concessionAmt":'-',
    },
    {
      "date":'12-12-2019',
      "headerName":'XRAY',
      "serviceName":'XRAY CHEST PAOR AP',
      "qty":'1',
      "totalServiceRate":'300',
      "concessionAmt":'-',
    },
    {
      "date":'13-12-2019',
      "headerName":'NEBULIZATION CHARGE',
      "serviceName":'NEBULIZATION CHARGES(PER SITTING)',
      "qty":'1',
      "totalServiceRate":'300',
      "concessionAmt":'-',
    },
  ];
  openDialog(){
    let dialogRef=this.dialog.open(EditComponentComponent);
  }

  ngOnInit(){}
}
