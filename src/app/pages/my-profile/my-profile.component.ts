import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private authService: AuthService, 
              private uploadService: UploadService, 
              private snackBar: MatSnackBar) { }

  public upload(image: any) {
    this.uploadService.upload(image).subscribe({
      error: (errResponse: HttpErrorResponse) => {
        console.log(errResponse)
        this.snackBar.open(errResponse.error.errors.full_messages[0], 'Close', {
          duration: 3500
        })
      }
    }
      
    );
  }
}
