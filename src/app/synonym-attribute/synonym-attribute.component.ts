import {ApplicationRef, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {SynonymsAttributeService} from '../synonyms-attribute.service';
import {AddSynonymeComponent} from '../add-synonyme/add-synonyme.component';
import {MatDialog} from '@angular/material';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface CNode {
  label: string;
  code: string;
  data: any;
  children?: CNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  code: string;
  label: string;
  data: any;
  level: number;
}

const TREE_DATA: CNode[] = [
  {
    code: 'ORDINATEUR_BUREAU',
    label: 'ordinateur de bureau',
    children: [
      {
        default_value: null,
        code: 'Slot_quantity',
        label: 'Nombre d\'emplacement mémoire total / disponible',
        data: {
          hierarchy_code: '001001-ORDINATEUR BUREAU',
          roles: [],
          validations: 'MAX_LENGTH|500',
          required: false,
          variant: false,
          description_translations: [],
          label: 'Nombre d\'emplacement mémoire total / disponible',
          label_translations: [{locale: 'fr', value: 'Nombre d\'emplacement mémoire total / disponible'}],
          values: null,
          requirement_level: 'OPTIONAL',
          values_list: null,
          type: 'TEXT',
          example: null,
          type_parameter: null,
          description: null
        }
      },
      {
        default_value: null,
        code: 'Slot_quantity',
        label: 'Nombre d\'emplacement mémoire total / disponible',
        data: {
          hierarchy_code: '001001-ORDINATEUR BUREAU',
          roles: [],
          validations: 'MAX_LENGTH|500',
          required: false,
          variant: false,
          description_translations: [],
          label: 'Nombre d\'emplacement mémoire total / disponible',
          label_translations: [{locale: 'fr', value: 'Nombre d\'emplacement mémoire total / disponible'}],
          values: null,
          requirement_level: 'OPTIONAL',
          values_list: null,
          type: 'TEXT',
          example: null,
          type_parameter: null,
          description: null
        }
      }
    ]
  },
];

@Component( {
  selector: 'app-synonym-attribute',
  templateUrl: './synonym-attribute.component.html',
  styleUrls: ['./synonym-attribute.component.css']
} )

export class SynonymAttributeComponent implements OnInit {



  constructor(private synonymsAttributeService: SynonymsAttributeService,
              private applicationRef: ChangeDetectorRef,
              public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }

  // tslint:disable-next-line:variable-code variable-name
  private _transformer = (node: CNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      code: '  ' + ((node.label) ? node.label : '') + ' ' + '(' + node.code + ')',
      level,
      label: node.label,
      data: node.data
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  ngOnInit() {
    this.reloadList();
  }


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  editSynonyme(event) {
    console.log('Editing', event);
    let dialogRef = this.dialog.open(AddSynonymeComponent, {
      height: '1000px',
      width: '900px',
      data: event.data,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadList();
    });
  }

  reloadList() {
    this.synonymsAttributeService.getAllSynonyms().subscribe((data: any[]) => {
      console.log('Service has been called with', data);
      const treeData: any[] = [];
      data.forEach(c => {
        treeData.push( {
          code: c.code,
          label: c.label,
          data: c,
        });
      });
      this.dataSource.data = treeData;
    });
  }

  delete(node) {
    console.log('Deleting Node');
    this.synonymsAttributeService.deleteSynonyms(node.data._id).subscribe((res) => {
      console.log('Delete Succeed !');
      this.reloadList();
    });
  }

  addSynonyme() {
    console.log('Add');
    let dialogRef = this.dialog.open(AddSynonymeComponent, {
      height: '1000px',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadList();
    });
  }
}
