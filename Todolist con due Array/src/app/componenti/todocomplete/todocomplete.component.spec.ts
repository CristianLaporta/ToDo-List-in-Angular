import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocompleteComponent } from './todocomplete.component';

describe('TodocompleteComponent', () => {
  let component: TodocompleteComponent;
  let fixture: ComponentFixture<TodocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
