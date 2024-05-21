import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCatComponent } from './search-cat.component';

describe('SearchCatComponent', () => {
  let component: SearchCatComponent;
  let fixture: ComponentFixture<SearchCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
