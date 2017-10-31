import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicItemGenreComponent } from './music-item-genre.component';

describe('MusicItemGenreComponent', () => {
  let component: MusicItemGenreComponent;
  let fixture: ComponentFixture<MusicItemGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicItemGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicItemGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
