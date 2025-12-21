import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileBasicInfoComponent } from './components/basic-info/profile-basic-info.component';
import { ProfileCardComponent } from './components/card/profile-card.component';
import { ProfileFarmInfoComponent } from './components/farm-info/profile-farm-info.component';
import { ProfileSecurityComponent } from './components/security/profile-security.component';
import { ProfileSidebarComponent } from './components/sidebar/profile-sidebar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ProfileSidebarComponent,
    ProfileCardComponent,
    ProfileBasicInfoComponent,
    ProfileFarmInfoComponent,
    ProfileSecurityComponent
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {}
