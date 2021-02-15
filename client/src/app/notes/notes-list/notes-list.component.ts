import { Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  @Output() dismiss = new EventEmitter();
  @Output() focusout = new EventEmitter();

  constructor() { }
  
  onDismiss(event){
    this.dismiss.emit(event);
  }
  
  onFocusOut(event){
    this.focusout.emit(event)
  }

}

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
