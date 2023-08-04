import {Injectable} from "@angular/core";
import {UsersService} from "./app.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {userActionsGroup} from "./app.state";
import {catchError, exhaustMap, map} from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private service: UsersService, private actions: Actions, private store: Store) {}

  usersEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(userActionsGroup.getUser),
      exhaustMap((action) => this.service.getUser(action.id)
        .pipe(
          map(response => userActionsGroup.getUserSuccess({user: response})),
          catchError((error) => [userActionsGroup.getUserError({error})])
        )
      )
    )
  })
}
