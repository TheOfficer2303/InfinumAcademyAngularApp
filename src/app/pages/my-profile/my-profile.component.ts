import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UploadService } from 'src/app/services/upload/upload.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MyProfileComponent {
  public email = this.authService.getAuthData()?.uid;
  public image: File;
  public imageUrl$ = new BehaviorSubject<string>("");

  constructor(private authService: AuthService, 
              private uploadService: UploadService, 
              private snackBar: MatSnackBar) { }

  public onDrop(files: FileList) {
    if (files && files[0]) {
      this.image = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(files[0]); 
      reader.onload = (event) => { 
        this.imageUrl$.next(event.target?.result as string) ;
      }
    }
  }

  public upload() {
  	this.uploadService.upload(this.image).subscribe({
      next: () => {
        this.imageUrl$.next("");
        this.snackBar.open('Avatar uploaded', 'Close', { duration: 3500 });
      },
  		error: (errResponse: HttpErrorResponse) => {
  			this.snackBar.open(errResponse.error.errors.full_messages[0], 'Close', {
  				duration: 3500
  			})
  		}
  	})
  };

}