import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {
  ProblemManagementConnectorService
} from "../../../core/connectors/problem-management-connector.service";
import {SelectionModel} from "@angular/cdk/collections";
import {
  AddProblemComponent
} from "../../dialogs/add-problem/add-problem.component";

export interface ProblemElement {
  identificationNumber: string;
  reporter: string;
  title: string;
  description: string;
  state: string;
  //creationTime: Timestamp<string>;
  creationTime: string;
}

/** Constants used to fill up our database. */
const PROBLEM_DATA: ProblemElement[] = [
  {
    identificationNumber: '1',
    reporter: 'uhpwv',
    title: 'No Ramp available',
    description: 'Hello, in the building 30.95, there is no ramp available...',
    state: 'OPEN',
    creationTime: '31.08.2022'
  },
  {
    identificationNumber: '1',
    reporter: 'uhpwv',
    title: 'No Ramp available',
    description: 'Hello, in the building 30.95, there is no ramp available...',
    state: 'OPEN',
    creationTime: '31.08.2022'
  },
  {
    identificationNumber: '1',
    reporter: 'uhpwv',
    title: 'No Ramp available',
    description: 'Hello, in the building 30.95, there is no ramp available...',
    state: 'OPEN',
    creationTime: '31.08.2022'
  },
  {
    identificationNumber: '1',
    reporter: 'uhpwv',
    title: 'No Ramp available',
    description: 'Hello, in the building 30.95, there is no ramp available...',
    state: 'OPEN',
    creationTime: '31.08.2022'
  },
  {
    identificationNumber: '1',
    reporter: 'uhpwv',
    title: 'No Ramp available',
    description: 'Hello, in the building 30.95, there is no ramp available...',
    state: 'OPEN',
    creationTime: '31.08.2022'
  },
]

@Component({
  selector: 'app-problems-table',
  templateUrl: './problems-table.component.html',
  styleUrls: ['./problems-table.component.css']
})
export class ProblemsTableComponent implements AfterViewInit, OnInit {
  /*
  private State state;
  private String title;
  private String description;
  private Timestamp creationTime;
  private Timestamp lastModified;
  private String reporter;
  private String identificationNumber;
  private String referenceIdentificationNumber;
  private String notificationIdentificationNumber;
   */

  displayedColumns: string[] = ['identificationNumber', 'reporter', 'title', 'state', 'creationTime'];
  dataSource = new MatTableDataSource<ProblemElement>(PROBLEM_DATA);
  selection = new SelectionModel<ProblemElement>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // search values from search bars
  searchKey: string = "";

  constructor(private problemManagementConnectorService: ProblemManagementConnectorService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applySearch() {
    this.dataSource.filter = this.searchKey?.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ProblemElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.identificationNumber + 1}`;
  }

  // button methods
  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent);
    /*dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnectorService.createProblem(ProblemsTableComponent.buildCreateProblemRequest(result), ProblemsTableComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })*/
  }
}
