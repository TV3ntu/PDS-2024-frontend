import {Component, Input} from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() user!: User
  loading = false
  constructor(private userService:UserService,private router:Router,private notificationService:NotificationService) { }

  showCreditModal = false
  creditsToAdd = 0
  showDeleteUserModal=false
  selectedFile: File | null = null
  imagePreview: string | ArrayBuffer | null = ""
  showModal() {
    this.showCreditModal = true
  }
  closeModal() {
    this.showCreditModal = false
  }

  deleteUserModal() {
    this.showDeleteUserModal = true
  }
  closeDeleteUserModal() {
    this.showDeleteUserModal = false
  }
  checkAdmin = () => this.user.isAdmin

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      // Mostrar la vista previa de la imagen
      const reader = new FileReader()
      reader.onload = () => {
        this.imagePreview = reader.result
      }
      reader.readAsDataURL(this.selectedFile)
    }
  }
  hasPreviewImage = () => this.imagePreview !== "" && this.imagePreview !== null

  triggerFileInput() {
    const fileInput = document.getElementById('image') as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  addCredits(form:NgForm) {
    if(form.valid){
      this.user.credits += this.creditsToAdd
      this.saveUser()
      this.closeModal()
    }
  }

  ngOnInit() {
    if(!this.userService.isLogged()) {
      this.router.navigate(['/ingresar'])
    }else{
      this.refreshUser()
    }
  }
  refreshUser() {
    this.loading = true
    this.userService.getUserLoggedData().subscribe(user => {
      this.user = user
      console.log(user)
      this.loading = false
    })

  }

  saveUser() {
    console.log(this.user)
    this.loading = true
    this.userService.updateUser(this.user,this.selectedFile)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        error.error.message = 'No se pudo actualizar usuario'
        this.loading = false
        return this.notificationService.handleError(error)
      })
    )
  .subscribe(user => {
      console.log(user)
      this.loading = false
      this.refreshUser()
      this.notificationService.notify(200, 'Usuario actualizado')
    })
      // TODO: Guardar User
  }

  deleteUser() {
    console.log(this.user)
    console.log(this.userService.deleteAccount(this.user))
    this.loading = true
    this.userService.deleteAccount(this.user)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        error.error.message = 'No se pudo eliminar el usuario'
        this.loading = false
        return this.notificationService.handleError(error)
      })

    )
  .subscribe(user => {
      console.log(user)
      this.userService.localLogOut()
      this.notificationService.notify(200, 'Usuario eliminado')
      this.loading = false
      this.router.navigate(['/'])
      window.location.reload();
  })
      // TODO: Guardar User
    }
}
