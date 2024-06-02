import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOffersComponent } from './game-offers.component';

describe('GameOffersComponent', () => {
  let component: GameOffersComponent;
  let fixture: ComponentFixture<GameOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
