import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLogInComponent } from './game-log-in.component';

describe('GameLogInComponent', () => {
  let component: GameLogInComponent;
  let fixture: ComponentFixture<GameLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
