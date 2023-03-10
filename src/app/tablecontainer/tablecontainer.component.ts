import { AfterViewInit, Component, ContentChild, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CelltemplateDirective } from './celltemplate/celltemplate.directive';

type Row = string[];
type metaCell = {
  rindex: number,
  cindex: number,
  headerRef: string,
  value: any
};
type metaRow = metaCell[];
type Table = Row[];

@Component({
  selector: 'app-tablecontainer',
  templateUrl: './tablecontainer.component.html',
  styleUrls: ['./tablecontainer.component.css'],
})
export class TablecontainerComponent implements AfterViewInit {
  @Input() data: {}[] = [{}];
  // @Input('[celltemplate]') testTemplate!: TemplateRef<any>;
  @ViewChild('table', {static: true, read: ElementRef}) tableContent!: HTMLTableElement;
  // @ViewChild('[celltemplate]', {static: true, read: TemplateRef}) testTemplate!: TemplateRef<any>;


  @ContentChild(CelltemplateDirective, {read: TemplateRef}) testTemplate!: TemplateRef<any>;
  @ViewChild(CelltemplateDirective, {read: TemplateRef, static: true}) testDiv!: TemplateRef<any>;
  headers: string[] =[];
  rows: Table = [];
  
  metaHeaders: {label: string, template: TemplateRef<any> | null}[] = [];
  metaTable: metaRow[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log(this.testTemplate);
      
    this.getMetaTable();

    // this.headers = this.getHeaders();

    // this.getRows();

    console.log(this.tableContent);
      

  }

  ngAfterViewInit(): void {
    console.log('reading directive template:');
    console.log(this.testTemplate);
    console.log(this.testDiv);
  }

  getMetaTable() {

    const performanceHeaders = Object.keys(this.data[0]);
    for (let col = 0; col < performanceHeaders.length; col++) {
      const toadd = performanceHeaders[col];
      // console.log('To add header: ', toadd);
      this.metaHeaders.push({label: toadd, template: null});
    }
    
    
    for (let rindex = 0; rindex < this.data.length; rindex++) {
      let oneCell: metaCell;
      let oneRow: metaRow = [];
      const performanceRows = Object.entries(this.data[rindex]);
      let cindex = 0;
      let keyToAdd = null;
      let valToAdd = null;

      for (cindex = 0; cindex < performanceRows.length; cindex++) {
        keyToAdd = performanceRows[cindex][0];
        valToAdd = performanceRows[cindex][1];
        // console.log(performanceRows);
        
        // console.log("row: ",  rindex, "; col key: ", keyToAdd,"; col val: ", valToAdd);
        // console.log(rowToAdd);
        // oneRow.cindex
        oneCell = {rindex: rindex, cindex: cindex, headerRef: this.metaHeaders[cindex].label, value: performanceRows[cindex][1]};
        oneRow.push(oneCell);
      } 
      this.metaTable.push(oneRow);
    };

    console.log('ALL META:');
    console.log(this.metaHeaders);
    console.log(this.metaTable);
  }

  getHeaders(): string[] {
    const headings: string[] = [];

    Object.keys(this.data[0]).forEach((property) => {
      headings.push(property);
    });

    
    return headings;
  }

  getRows() {
    let row: Row = [];
    this.data.forEach((element) => {
      Object.values(element).forEach((value) => {
        console.log(value);
        row.push(<string>value);
      });
      console.log('adding row: ', row);
      this.rows.push(row);

      row = [];
    });
  }

  /*
  @Description: Returns the VALUE of the table cell positioned at row i, column j
  */
  getTemplate(i: number, j: number): string {
    return this.rows[i][j];
  }

  cellDblClicked(i: number, j: number) {
    alert('To edit cell with value: ' + this.getTemplate(i,j));
  }
  cellClicked(i: number, j: number) {
    console.log('clicking from component');
  }
}
