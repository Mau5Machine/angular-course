import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServiceComponent } from './service/service.component';
import { WarningMsgComponent } from './warning-msg/warning-msg.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServiceComponent,
    WarningMsgComponent,
    SuccessMsgComponent,
    BindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
