import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./app.state";

@Injectable()
export class UsersService {

  basePath: string = "https://636c557aad62451f9fc7cb12.mockapi.io"
  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get<User>(`${this.basePath}/users/${id}`)
  }
}
