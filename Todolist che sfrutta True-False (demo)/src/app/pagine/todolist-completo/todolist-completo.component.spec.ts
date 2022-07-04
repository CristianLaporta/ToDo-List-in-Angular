import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistCompletoComponent } from './todolist-completo.component';

describe('TodolistCompletoComponent', () => {
  let component: TodolistCompletoComponent;
  let fixture: ComponentFixture<TodolistCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistCompletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
