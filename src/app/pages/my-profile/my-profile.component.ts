import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
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
  public imageUrl$ = new Subject<string>()

  constructor(private authService: AuthService, 
              private uploadService: UploadService, 
              private snackBar: MatSnackBar) { }

  public onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.image = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
        this.imageUrl$.next(event.target?.result as string) 
      }
    }
  }

  public upload() {
    this.uploadService.upload(this.image).subscribe((response) => {
      
      
    }, (errResponse: HttpErrorResponse) => {
        this.snackBar.open(errResponse.error.errors.full_messages[0], 'Close', {
          duration: 3500
        })
      }
    );
  }
}
