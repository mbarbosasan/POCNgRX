import {Component, OnInit} from '@angular/core';
import {Action, Store} from "@ngrx/store";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppState, updateForm, userActionsGroup} from "./app.state";
import {Actions} from "@ngrx/effects";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrxPOC';
  form: FormGroup = this.formBuilder.group({
    name: '',
    age: undefined,
    email: '',
    address: this.formBuilder.group({
      street: '',
      city: '',
      state: ''
    })
  })
  form$ = this.store.select((state: any) => state.app.form)

  ngOnInit(): void {
    this.actions.subscribe((action: Action) => {
      if (action.type === userActionsGroup.getUserSuccess.type) {
        this.form.patchValue((action as any).user)
      }
    })

    this.store.dispatch(userActionsGroup.getUser({id: 1}));


    this.form.valueChanges.subscribe((value) => {
      this.store.dispatch(updateForm({form: value}))
    })

  }
  constructor(private store: Store, private formBuilder: FormBuilder, private actions: Actions) {
  }
}
