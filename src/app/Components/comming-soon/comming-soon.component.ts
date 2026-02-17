import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-comming-soon',
  imports: [CommonModule],
  templateUrl: './comming-soon.component.html',
  styleUrl: './comming-soon.component.scss'
})
export class CommingSoonComponent {

  
  launchDate = new Date('2026-04-01T00:00:00').getTime();

  timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private timerSub!: Subscription;

  ngOnInit(): void {
    this.updateCountdown();

    // Update every second
    this.timerSub = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.launchDate - now;

    if (distance <= 0) {
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.timerSub?.unsubscribe();
      return;
    }

    this.timeLeft = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }
}
