const Home = {
    data: function() {
        return {
            contacts: [], 
            search: ''
        }
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => {
                return contact.searchTerm.includes(this.search.toLowerCase())
            })
        }
    },
    mounted: function(){
        db.collection('contacts').orderBy('lastName').onSnapshot(snapshot => {
            const data = []
            snapshot.forEach(doc => {
                data.push({ id: doc.id, data: doc.data(), searchTerm: doc.data().firstName.toLowerCase() + ' '+ doc.data().lastName.toLowerCase()})
            })
            this.contacts = data
        })
    },
    template: `
    <section>
    <div class="row">
          <div class="col-md-9">
            <div class="md-form mt-0 mx-4">
              <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model=search>
            </div>
          </div>
          <div class="col-md-3">
             <router-link to="/add/"><button type="button" class="btn btn-deep-purple py-2 px-3" style="border-radius: 50px;"><i class="fas fa-plus"></i></button></router-link>
          </div>
        </div>
            <ul class="list-group list-group-flush" style="max-height: 40rem; overflow-y: scroll;">
                <li class="list-group-item" v-for="contact in filteredContacts">
                    <router-link :to="'/contact/' + contact.id">{{contact.data.firstName}} {{contact.data.lastName}}</router-link>
                </li>
            </ul>
            </section>
  `
}
