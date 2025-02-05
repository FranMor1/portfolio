import { Component, inject, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-detalle-proyecto',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './detalle-proyecto.component.html',
    styleUrl: './detalle-proyecto.component.css'
})
export class DetalleProyectoComponent {

    @Input() id: string = "";
    project: Project | null = null;
    projectsService = inject(ProjectsService);

    async ngOnInit() {
        try {
            this.project = await this.projectsService.filterById(this.id)
        } catch (error) {
            console.log(error)
        }
    }
}