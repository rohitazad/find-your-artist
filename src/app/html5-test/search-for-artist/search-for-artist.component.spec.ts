import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForArtistComponent } from './search-for-artist.component';

describe('SearchForArtistComponent', () => {
  let component: SearchForArtistComponent;
  let fixture: ComponentFixture<SearchForArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
