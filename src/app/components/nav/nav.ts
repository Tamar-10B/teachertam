import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.html'
})
export class Nav {

  activeDropdown = signal<string | null>(null);

  languages = [
    {
      id: 'english',
      title: 'ინგლისური',
      items: [
        { title: 'კურიკულუმები', path: '/english/curriculums' },
        { title: 'რუბრიკები', path: '/english/rubrics' },
        { title: 'ინტეგრირებული', path: '/english/integrated' },
        { title: 'შემოქმედებითი', path: '/english/creative' },
        { title: 'გეგმები', path: '/english/plans' }
      ]
    },
    {
      id: 'german',
      title: 'გერმანული',
      items: [
        { title: 'კურიკულუმები', path: '/german/curriculums' },
        { title: 'რუბრიკები', path: '/german/rubrics' },
        { title: 'ინტეგრირებული', path: '/german/integrated' },
        { title: 'შემოქმედებითი', path: '/german/creative' },
        { title: 'გეგმები', path: '/german/plans' }
      ]
    },
    {
      id: 'russian',
      title: 'რუსული',
      items: [
        { title: 'კურიკულუმები', path: '/russian/curriculums' },
        { title: 'რუბრიკები', path: '/russian/rubrics' },
        { title: 'ინტეგრირებული', path: '/russian/integrated' },
        { title: 'შემოქმედებითი', path: '/russian/creative' },
        { title: 'გეგმები', path: '/russian/plans' }
      ]
    }
  ];

  toggleDropdown(id: string): void {
    this.activeDropdown.update(current =>
      current === id ? null : id
    );
  }

  closeDropdown(): void {
    this.activeDropdown.set(null);
  }
}