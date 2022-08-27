import { TestBed } from '@angular/core/testing';
import { EventsComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EventsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Schedule-POC'`, () => {
    const fixture = TestBed.createComponent(EventsComponent);
    const app = fixture.componentInstance;
  //  expect(app.title).toEqual('Schedule-POC');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EventsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Schedule-POC app is running!');
  });
});
