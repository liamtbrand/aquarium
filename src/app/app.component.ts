import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "./auth.service";
import * as firebase from 'firebase';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`
  .main-content{
    height: 100%;
  }
  `]
})
export class AppComponent {
  constructor(
    private afDb: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ){
    
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
