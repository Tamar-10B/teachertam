import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

interface ClassItem {
  id: number;
  name: string;
  pdf: string | null;
}

interface Subject {
  id: string;
  name: string;
  classes: ClassItem[];
}

@Component({
  selector: 'app-kurikulumebi',
  standalone: true,
  templateUrl: './kurikulumebi.html'
})
export class Kurikulumebi {

  private route = inject(ActivatedRoute);

  // მიმდინარე Route-ის მონაცემები
  private routeData = toSignal(
    this.route.data,
    { initialValue: this.route.snapshot.data }
  );

  // მიმდინარე საგანი
  subjectId = computed(
    () => this.routeData()['subjectId'] as string
  );

  // არჩეული კლასი
  selectedClass = signal<number | null>(null);

  // კლასების შექმნა
  createClasses(
    subject: string,
    availablePdfs: number[] = []
  ): ClassItem[] {

    return Array.from({ length: 12 }, (_, index) => {

      const classNumber = index + 1;

      return {
        id: classNumber,
        name: `${classNumber} კლასი`,

        pdf: availablePdfs.includes(classNumber)
          ? `/assets/curriculums/${subject}/class-${classNumber}.pdf`
          : null
      };

    });
  }

  // საგნები და მათი კურიკულუმები
  subjects: Subject[] = [

    {
      id: 'english',
      name: 'ინგლისური ენა',
      classes: this.createClasses('english', [2])
    },

    {
      id: 'german',
      name: 'გერმანული ენა',
      classes: this.createClasses('german', [])
    },

    {
      id: 'russian',
      name: 'რუსული ენა',
      classes: this.createClasses('russian', [])
    }

  ];

  // მიმდინარე საგანი
  currentSubject = computed(() => {

    return this.subjects.find(
      subject => subject.id === this.subjectId()
    ) ?? null;

  });

  // არჩეული კლასის კურიკულუმი
  currentCurriculum = computed(() => {

    return this.currentSubject()?.classes.find(
      item => item.id === this.selectedClass()
    ) ?? null;

  });

  // კლასის არჩევა
  selectClass(id: number): void {
    this.selectedClass.set(id);
  }

}