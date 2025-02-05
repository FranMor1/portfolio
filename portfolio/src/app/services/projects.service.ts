import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    private httpClient = inject(HttpClient);

    private url: string = `${environment.apiUrl}/projects`;

    getAll(): Promise<Project[]> {
        return lastValueFrom(
            this.httpClient.get<Project[]>(this.url)
        )
    }

    filterById(id: string): Promise<Project> {
        return lastValueFrom(
            this.httpClient.get<Project>(`${this.url}/${id}`)
        )
    }
}