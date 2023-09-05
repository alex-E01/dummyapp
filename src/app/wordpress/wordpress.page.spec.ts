import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordpressPage } from './wordpress.page';

describe('WordpressPage', () => {
  let component: WordpressPage;
  let fixture: ComponentFixture<WordpressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WordpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
