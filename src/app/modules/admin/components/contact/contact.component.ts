import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { NbComponentStatus } from '../../../framework/theme/components/component-status';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = [
    { value: 'This is value 1', label: 'Option 1', checked: true },
    { value: 'This is value 2', label: 'Option 2' },
    { value: 'This is value 3', label: 'Option 3' },
    { value: 'This is value 4', label: 'Option 4', disabled: true },
  ];

  statuses = ['basic', 'primary', 'success', 'warning', 'danger', 'info', 'control'];
  
  ngModelValue = '1';
  formControl = new FormControl('1');

}
