import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  title: string;
  content: string;
  isField: boolean;
  showCheckboxes: boolean;
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent {

  showHtmlRendered: boolean;
  showSource: boolean;

  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    if (data.isField) {
      this.viewSource();
    } else {
      this.viewRendered();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  viewRendered() {
    this.showHtmlRendered = true;
    this.showSource = false;
  }

  viewSource() {
    this.showHtmlRendered = false;
    this.showSource = true;
  }

  copyContent() {
    let contentResult: any = document.getElementById("contentResult")
    contentResult.select();
    document.execCommand('copy');
    contentResult.setSelectionRange(0, 0);
    this.openSnackBar("Content copied", "Close")
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
