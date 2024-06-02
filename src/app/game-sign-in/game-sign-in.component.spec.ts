import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSignInComponent } from './game-sign-in.component';

describe('GameSignInComponent', () => {
  let component: GameSignInComponent;
  let fixture: ComponentFixture<GameSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSignInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
