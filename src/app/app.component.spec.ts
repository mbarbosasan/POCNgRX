import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Store} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";
import {provideMockActions} from "@ngrx/effects/testing";
import {Actions} from "@ngrx/effects";
import {ReactiveFormsModule} from "@angular/forms";

describe('AppComponent', () => {
  let actions: Actions;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        provideMockStore({}),
        provideMockActions(() => actions)
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
