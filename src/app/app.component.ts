import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$:FirebaseListObservable<any[]>;
  course$;
  author$;
  constructor(db:AngularFireDatabase){
    this.courses$ = db.list('/courses');
    this.course$ = db.object('/courses/1');
    this.author$ = db.object('/authors/1');
  }
  add(course : HTMLInputElement){
    this.courses$.push({
      name:course.value,
      price:150,
      isLive:true,
      sections:[
        {title:'Components'},
        {title:'Directive'},
        {title:'Templates'},
        {title:'Pipe'},
      ]
    })
    course.value = '';
  }
}
