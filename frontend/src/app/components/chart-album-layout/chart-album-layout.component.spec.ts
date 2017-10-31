import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAlbumLayoutComponent } from './chart-album-layout.component';

describe('ChartAlbumLayoutComponent', () => {
  let component: ChartAlbumLayoutComponent;
  let fixture: ComponentFixture<ChartAlbumLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAlbumLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAlbumLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
