import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymAttributeComponent } from './synonym-attribute.component';

describe('SynonymAttributeComponent', () => {
  let component: SynonymAttributeComponent;
  let fixture: ComponentFixture<SynonymAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
