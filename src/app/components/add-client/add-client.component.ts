import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableBalanceOnAdd: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){

  }

}
