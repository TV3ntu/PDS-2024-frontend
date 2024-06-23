import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, Subject, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject = new Subject<Notification>()

  notification$ = this.notificationSubject.asObservable()

  private _handleError = (error: HttpErrorResponse): Observable<never> => {
    let errorMessage = 'OCURRIÓ UN ERROR DESCONOCIDO'
    if (error.error.status === 0) {
      // A network error occurred, or the server is down
      errorMessage = 'ERROR EN SERVIDOR'
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = error.error.message || errorMessage
    }
    this.notify(
      error.error.status || 500,
      errorMessage
    )
    return throwError(() => new Error(errorMessage || 'OCURRIÓ UN ERROR DESCONOCIDO'))
  }
  public get handleError() {
    return this._handleError
  }
  public set handleError(value) {
    this._handleError = value
  }

  notify(status: number, message: string): void {
    let type: string
    let icon: string

    if (status >= 500) {
      type = 'red'
      icon = 'fa fa-x'
    } else if (status >= 400 && status < 500) {
      type = 'orange'
      icon = 'fa fa-exclamation'
    } else {
      type = 'green'
      icon = 'fa fa-check'
    }
    this.notificationSubject.next({ type, message, icon })
  }
}

interface Notification {
  type: string
  message: string
  icon: string
}