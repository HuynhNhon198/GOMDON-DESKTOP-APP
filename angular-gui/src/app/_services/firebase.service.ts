import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../openapi';
import { HelperService } from './helper.service';
import * as firebase from 'firebase';
import { Irole } from '../_models/app.model';
import { switchMap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user: Observable<firebase.User>;
  role$ = new BehaviorSubject<Irole>({});
  role: Irole = {};
  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private userSV: UserService,
    private helper: HelperService
  ) {
    this.user = afauth.authState.pipe(
      switchMap(user => {
          // Logged in
          if (user !== null) {
            user.getIdTokenResult().then(result => {
              if (result.claims.role === undefined) {
                user.getIdToken(true).then(token => {
                  userSV.configuration.accessToken = token;
                  userSV
                    .createUser({
                      displayName: user.displayName,
                      email: result.claims.email,
                      photoURL: result.claims.picture,
                      uid: user.uid
                    })
                    .subscribe(
                      res => {
                        user.getIdToken().then(token1 => console.log(token1));
                      },
                      err => {
                        console.log(err);
                      }
                    );
                });
              } else {
                const rolescm = this.helper.roleSchema.find(
                  x => x.code === result.claims.role
                );
                this.role$.next(rolescm);
                this.role = rolescm || {};
                this.role.uid = user.uid;
                this.role.userName = user.displayName;
              }
            });
            return of(user);
        } else {
          // Logged out
          return of(null);
        }
      }),
      share()
    );
  }

  async signIn(email: string, password: string) {
    try {
      await this.afauth.auth
        .signInWithEmailAndPassword(email, password)
        .catch(err => this.helper.openSnackBar(err.code, 3000));
    } catch (error) {
      console.log(error);
    }
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.afauth.auth.signInWithPopup(provider);
    this.router.navigate(['/']);
  }

  logOut() {
    this.afauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
