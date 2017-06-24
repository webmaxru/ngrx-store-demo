import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Message } from './../models/message.model';

@Injectable()
export class MessageService {
    private API_PATH = 'http://localhost:3000';

    constructor(private http: Http) { }

    loadTimeline(handle: string): Observable<Message[]> {
        return this.http.get(`${this.API_PATH}/timeline/${handle}`)
            .map(res => {
                return res.json().map(({ user, text, created_at }) => {
                    return <Message>{
                        text: text,
                        author: user.name,
                        createdAt: created_at
                    }
                }) || []
            })
        }
        
    searchMessages(searchQuery: string): Observable<Message[]> {
        return this.http.get(`${this.API_PATH}/search/${searchQuery}`)
            .map(res => {
                return res.json().statuses.map(({ user, text, created_at }) => {
                    return <Message>{
                        text: text,
                        author: user.name,
                        createdAt: created_at
                    }
                }) || []
            })
        }
        
}
