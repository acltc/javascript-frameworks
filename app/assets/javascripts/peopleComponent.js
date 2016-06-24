(function(app) {

  app.NameFilterPipe = ng.core.Pipe({
    name: "nameFilterPipe"
  })
  .Class({
    constructor : function() {},
    transform: function(value, nameFilter) {
      return value.filter(function(person) {
        return person.name.toLowerCase().includes(nameFilter.toLowerCase());
      });
    }
  });

  app.OrderByPipe = ng.core.Pipe({
    name: "orderByPipe"
  })
  .Class({
    constructor: function() {},
    transform: function(value, args) {
      var orderAttribute = args[0];
      var orderDescending = args[1];
      return value.sort(function(a, b) {
        if (orderDescending) {
          return a[orderAttribute] < b[orderAttribute];
        } else {
          return a[orderAttribute] > b[orderAttribute];
        }
      });
    }
  });

  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    template: `
      <div>
        Name: <input [(ngModel)]="newPersonName">
        Bio: <input [(ngModel)]="newPersonBio">
        <button (click)="addPerson()">Add Person</button>
      </div>
      <div>
        Filter name: <input [(ngModel)]="nameFilter" list="names-list">
        <datalist id="names-list">
          <option *ngFor="let person of people">{{ person.name }}</option>
        </datalist>
      </div>
      <div>
        <button (click)="toggleOrder('name')">Order by name</button>
        <button (click)="toggleOrder('bio')">Order by bio</button>
      </div>
      <div *ngFor="let person of people | nameFilterPipe:nameFilter | orderByPipe:[orderAttribute,orderDescending]">
        <h2 (click)="toggleBio(person)">{{ person.name}}</h2>
        <p [class.strike]="person.bioStrikeThrough">{{ person.bio }}</p>
        <a href="#" (click)="deletePerson(person)">Delete</a>
      </div>`,
    pipes: [app.NameFilterPipe, app.OrderByPipe]
  })
  .Class({
    constructor: function() {
      this.people = [];
      this.nameFilter = '';
    },
    ngOnInit() {
      $.get('/api/v1/people.json', function(result) {
        this.people = result;
      }.bind(this));
    },
    addPerson() {
      var person = {
        name: this.newPersonName,
        bio: this.newPersonBio
      };
      this.people.push(person);
      this.newPersonName = '';
      this.newPersonBio = '';
    },
    deletePerson(person) {
      this.people = this.people.filter(function(p) {
        return p.id !== person.id;
      });
    },
    toggleBio(person) {
      person.bioStrikeThrough = !person.bioStrikeThrough;
    },
    toggleOrder(orderAttribute) {
      if (orderAttribute !== this.orderAttribute) {
        this.orderDescending = false;
      } else {
        this.orderDescending = !this.orderDescending;
      }
      this.orderAttribute = orderAttribute;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
