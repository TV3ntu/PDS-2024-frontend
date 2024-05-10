import { Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { NotificationService } from 'src/app/services/notification/notification.service'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnDestroy {
  showNotification = false
  message = ''
  type: string = ""
  icon: string = ""
  private subscription: Subscription

  constructor(private notificationService: NotificationService) {
    this.subscription = this.notificationService.notification$.subscribe(
      notification => {
        this.type = notification.type
        this.message = notification.message
        this.icon = notification.icon
        this.showNotification = true
        setTimeout(() => this.showNotification = false, 3000)
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
