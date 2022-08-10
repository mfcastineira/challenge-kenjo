import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreAlbumComponent } from './score-album.component';

describe('ScoreAlbumComponent', () => {
  let component: ScoreAlbumComponent;
  let fixture: ComponentFixture<ScoreAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
