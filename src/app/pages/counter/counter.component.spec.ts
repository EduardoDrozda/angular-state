import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { counterReducer } from './store';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      imports: [
        RouterModule,
        StoreModule.forRoot({
          count: counterReducer,
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click in increment button and increment count variable component', () => {
    const title = fixture.debugElement.query(By.css('#title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toEqual('Current Count: 0');

    const increment = fixture.debugElement.query(By.css('#increment'));

    expect(increment).toBeTruthy();

    increment.nativeElement.click();

    fixture.detectChanges();

    expect(title.nativeElement.textContent).toEqual('Current Count: 1');
    expect(component.count).toEqual(1);
  });

  it('should click in decrement button and decrement count variable component', () => {
    const title = fixture.debugElement.query(By.css('#title'));

    const increment = fixture.debugElement.query(By.css('#increment'));

    const incrementQuantity = 100;

    for (let index = 0; index < incrementQuantity; index++) {
      increment.nativeElement.click();
    }

    fixture.detectChanges();

    expect(title.nativeElement.textContent).toEqual(`Current Count: ${incrementQuantity}`);

    const decrement = fixture.debugElement.query(By.css('#decrement'));

    expect(decrement).toBeTruthy();

    decrement.nativeElement.click();

    fixture.detectChanges();

    expect(title.nativeElement.textContent).toEqual(`Current Count: ${incrementQuantity - 1}`);
    expect(component.count).toEqual(incrementQuantity - 1);
  });

  it('should click in reet counter button and reset count variable component', () => {
    const title = fixture.debugElement.query(By.css('#title'));

    const increment = fixture.debugElement.query(By.css('#increment'));

    const incrementQuantity = 100;

    for (let index = 0; index < incrementQuantity; index++) {
      increment.nativeElement.click();
    }

    fixture.detectChanges();

    expect(title.nativeElement.textContent).toEqual(`Current Count: ${incrementQuantity}`);

    const reset = fixture.debugElement.query(By.css('#reset'));

    expect(reset).toBeTruthy();

    reset.nativeElement.click();

    fixture.detectChanges();

    expect(title.nativeElement.textContent).toEqual(`Current Count: 0`);
    expect(component.count).toEqual(0);
  });
});
