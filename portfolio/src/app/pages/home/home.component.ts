import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ExperienceService } from '../../services/experience.service';
import { Experience } from '../../interfaces/experience.interface';
import { StudiesService } from '../../services/studies.service';
import Study from '../../interfaces/study.interface';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project.interface';
import { RouterLink } from '@angular/router';


registerLocaleData(localeEs);

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NavbarComponent, FooterComponent, DatePipe, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {

    experienceService = inject(ExperienceService);
    studiesService = inject(StudiesService);
    projectsService = inject(ProjectsService);



    arrExperiences: Experience[] = []
    arrStudies: Study[] = []
    arrProjects: Project[] = []

    async ngOnInit() {
        this.arrExperiences = await this.experienceService.getAll();
        this.arrStudies = await this.studiesService.getAll();
        this.arrProjects = await this.projectsService.getAll();
    }

    isOpen: boolean[] = [false, false, false, false];

    toggleContent(index: number): void {
        this.isOpen[index] = !this.isOpen[index];
    }



}