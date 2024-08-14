import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc,deleteDoc,doc,updateDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup,  } from '@angular/fire/auth';
import { Router } from '@angular/router';


const firebaseConfig = {
  apiKey: "AIzaSyDdWibIn3N4N12nKzaa7P2TA5MMqi2eHmE",
  authDomain: "appp-c9cd9.firebaseapp.com",
  projectId: "appp-c9cd9",
  storageBucket: "appp-c9cd9.appspot.com",
  messagingSenderId: "885689680520",
  appId: "1:885689680520:web:ace49f5bf846ee9d12553d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  firebase: any
  firebaseui: any

  constructor(private router: Router) {

  }

  async agregarLibro(nombre: string, autor: string, editorial: string) {
    try {
      const docRef = await addDoc(collection(db, "Libros"), {
        UserId: localStorage.getItem("uid"),
        Nombre: nombre,
        Autor: autor,
        Editorial: editorial
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async deleteLibros(id: string) {
    try {
      await deleteDoc(doc(db, "Libros", id))
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  }

  async putLibro(id: string, nombre: string, autor: string, editorial: string){
    try{
      await updateDoc(doc(db, "Libros", id),{
        Nombre: nombre,
        Autor: autor,
        Editorial: editorial
      })
    }
    catch (e){
      console.error("Error modifying document: ", e);
    }
  }


  public registerGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider())
  }

  public register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        localStorage.setItem("error", "")
        const user = userCredential.user;
        this.router.navigate(["login"])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        localStorage.setItem("error", errorMessage)
        // ..
      });
  }
  public login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        console.log(auth)
        localStorage.setItem("uid", String(user.uid)) 
        this.router.navigate(["libros"])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        localStorage.setItem("errorL", errorMessage)
      });
  }
  public logOut(){
    signOut(auth)
  .then(() => {
    this.router.navigate([""])
  })
  .catch((error) => {
    console.log(error);
  });
  }

}
