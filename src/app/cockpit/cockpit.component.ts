import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
// Example of how to create an output alias:
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
//  newServerName = '';
//  newServerContent = '';
@ViewChild('serverContentInput') serverContentInput: ElementRef;  // Example of using ViewChild Decorator to access local reference and pass data.
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
        serverName: nameInput.value, // <-- example of template reference input.
        serverContent: this.serverContentInput.nativeElement.value // Example of using ViewChild Decorator to access local reference and pass data.
    });
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
        serverName: nameInput.value, // <-- example of template local reference input.
        serverContent: this.serverContentInput.nativeElement.value //Example of using ViewChild Decorator to access local reference and pass data.
    });
  }
}
