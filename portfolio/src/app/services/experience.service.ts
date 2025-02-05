import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience.interface';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    private httpClient = inject(HttpClient);

    private url: string = `${environment.apiUrl}/experience`;

    getAll(): Promise<Experience[]> {
        return lastValueFrom(
            this.httpClient.get<Experience[]>(this.url)
        )
    }

    filterById(id: number): Promise<Experience> {
        return lastValueFrom(
            this.httpClient.get<Experience>(`${this.url}/${id}`)
        )
    }

}