import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DragTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drag-test',
  templateUrl: 'drag-test.html',
})
export class DragTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DragTestPage');
  }

  dragstart_handler(ev) {
    // 添加拖拽数据
    ev.dataTransfer.setData("text/plain", ev.target.id);
    var img = new Image();
    img.src = 'assets/imgs/male.png';
    ev.dataTransfer.setDragImage(img, 30, 30);
    ev.dataTransfer.effectAllowed = "move";
  }
  drop_handler(ev) {
    debugger;
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    let p = document.createElement("p");
    let id = data + (new Date()).getSeconds().toString();
    let text = "I'm " + id;
    p.innerText = text;
    p.draggable = true;
    p.id = id;
    ev.target.appendChild(p as HTMLParagraphElement);
  }
  dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
  }
}
