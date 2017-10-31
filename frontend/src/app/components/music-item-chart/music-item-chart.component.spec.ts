import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicItemChartComponent } from './music-item-chart.component';

describe('MusicItemChartComponent', () => {
  let component: MusicItemChartComponent;
  let fixture: ComponentFixture<MusicItemChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicItemChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicItemChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
