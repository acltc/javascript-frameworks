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

  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    template: `
      <div>
        Name: <input [(ngModel)]="newPersonName">
        Bio: <input [(ngModel)]="newPersonBio">
        <button (click)="addPerson()">Add Person</button>
      </div>
      <div>
        Filter name: <input [(ngModel)]="nameFilter">
      </div>
      <div *ngFor="let person of people | nameFilterPipe:nameFilter">
        <h2 (click)="toggleBio(person)">{{ person.name}}</h2>
        <p [class.strike]="person.bioStrikeThrough">{{ person.bio }}</p>
        <a href="#" (click)="deletePerson(person)">Delete</a>
      </div>`,
    pipes: [app.NameFilterPipe]
  })
  .Class({
    constructor: function() {
      this.people = [
        {
          id: 1,
          name: "Jackie Kuhlman",
          bio: "Qui quibusdam aut. Iusto est numquam est excepturi aspernatur quia omnis. Perferendis aliquam qui nisi nemo. Et sunt hic molestiae voluptate."
        },
        {
          id: 2,
          name: "Ivah Kautzer",
          bio: "Autem numquam qui quas. Veniam animi ut. Ut porro voluptatem laboriosam fugit temporibus sint soluta. Et aut autem iure. Beatae ea quo labore quaerat et."
        },
        {
          id: 3,
          name: "Alice Goodwin",
          bio: "Dolores laboriosam et rerum. Nihil explicabo quos. Commodi officiis architecto ad quibusdam aliquid consequuntur. Accusantium dolore quidem corporis est non debitis."
        },
        {
          id: 4,
          name: "Danyka Renner",
          bio: "Vitae unde aliquid. Reprehenderit in itaque quae est et et temporibus. Laboriosam et aliquam tempore beatae. Rerum iure mollitia enim."
        },
        {
          id: 5,
          name: "Hipolito Orn",
          bio: "Aperiam voluptate sed ipsam nihil ut et. Et perspiciatis consequatur tempora deserunt nesciunt eaque fugiat. Enim recusandae eum et. Dolore dolorum nobis et et."
        }
      ];
      this.nameFilter = '';
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
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
