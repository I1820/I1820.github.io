import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollToModule } from "@andrei4ik/ngx-scroll-to";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [],
  imports: [CommonModule, ScrollToModule.forRoot()],
  exports: [ScrollToModule, NgbModule],
})
export class SharedModule {}
