import { Component,OnInit,ViewChild } from '@angular/core';
import { TileDeskWidgetComponent } from './chat21/tiledeskwidget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Chat21';
  
  ngOnInit() {
 }

  // #region OpenRecipientConversationChat
  @ViewChild(TileDeskWidgetComponent) childTileDeskWidgetComp;
  OpenRecipientConversationChat(user:any){//UserDetailModel
    //debugger;
    this.childTileDeskWidgetComp.openConversationByUser(user);
  }
  // #endregion

}
