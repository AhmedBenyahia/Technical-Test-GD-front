import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSynonymeComponent } from './add-synonyme.component';

describe('AddSynonymeComponent', () => {
  let component: AddSynonymeComponent;
  let fixture: ComponentFixture<AddSynonymeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSynonymeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSynonymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
