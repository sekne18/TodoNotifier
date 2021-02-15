import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes = [];
  recognition:any;
  constructor(private el:ElementRef) {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [{ id: 0,content:'' }]
    }

  updateAllNotes() {
    console.log(document.querySelectorAll('app-notes-list'));
    let notes = document.querySelectorAll('app-notes-list');

    notes.forEach((note, index)=>{
         console.log(note.querySelector('.content').innerHTML)
         this.notes[note.id].content = note.querySelector('.content').innerHTML;
    });

    localStorage.setItem('notes', JSON.stringify(this.notes));

  }

  addNote () {
    this.notes.push({ id: this.notes.length + 1,content:'' });
    this.notes= this.notes.sort((a,b)=>{ return b.id-a.id});
    localStorage.setItem('notes', JSON.stringify(this.notes));
  };
  
  saveNote(event){
    const id = event.srcElement.parentElement.parentElement.getAttribute('id');
    const content = event.target.innerText;
    event.target.innerText = content;
    const json = {
      'id':id,
      'content':content
    }
    this.updateNote(json);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    console.log("********* updating note *********")
  }
  
  updateNote(newValue){
    this.notes.forEach((note, index)=>{
      if(note.id== newValue.id) {
        this.notes[index].content = newValue.content;
      }
    });
  }
  
  deleteNote(event){
     const id = event.srcElement.parentElement.parentElement.parentElement.getAttribute('id');
     this.notes.forEach((note, index)=>{
      if(note.id== id) {
        this.notes.splice(index,1);
        localStorage.setItem('notes', JSON.stringify(this.notes));
        console.log("********* deleting note *********")
        return;
      }
    });
  }

}
