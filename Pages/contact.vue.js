const contact = {
    props:['id'],
    data: function() {
        return {
            contact : {
                email: '',
                name: '',
                phone: '',
                address: ''
            }
        }
    },
    mounted: function() {
        db.collection('contacts').doc(this.id).get().then(
            doc => {
                if(doc.exists){
                    this.contact.email = doc.data().email
                    this.contact.name = doc.data().firstName + ' ' + doc.data().lastName
                    if(doc.data().phone) {
                        this.contact.phone = doc.data().phone
                    }

                    if(doc.data().address) {
                        this.contact.address = doc.data().address
                    }
                } else {
                    console.log('No contact information found')
                }
            }
        )
    },
    template: `
    <section>
    <router-link to="/">< Back to list</router-link>
    <div class="row">
      <div class="col-md-9">
        <h2 v-show=contact.name>{{ contact.name }}</h2>
      </div>
      <div class="col-md-3">
        <router-link :to="'/contact/edit/' + this.id"><button type="button" class="btn btn-deep-purple py-2 px-3" style="border-radius: 50px;"><i class="fas fa-pen"></i></button></router-link>
      </div>
    </div>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <h5>Email</h5>
                <p class="mb-0"> {{ contact.email }}</p>
            </li>
            <li class="list-group-item" v-show=contact.phone>
                <h5>Phone Number</h5>
                <p class="mb-0"> {{ contact.phone }}</p>
            </li>
            <li class="list-group-item" v-show=contact.address>
                <h5>Address</h5>
                <p class="mb-0"> {{ contact.address }}</p>
            </li>
        </ul>
        </section>
    `
}