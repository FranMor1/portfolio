import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Study from '../interfaces/study.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudiesService {

    private httpClient = inject(HttpClient);

    private url: string = `${environment.apiUrl}/studies`;

    getAll(): Promise<Study[]> {
        return lastValueFrom(
            this.httpClient.get<Study[]>(this.url)
        )
    }

    filterById(id: number): Promise<Study> {
        return lastValueFrom(
            this.httpClient.get<Study>(`${this.url}/${id}`)
        )
    }

}