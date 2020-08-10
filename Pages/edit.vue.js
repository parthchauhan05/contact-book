const edit = {
    props:['id'],
    data: function() {
        return {
            contact : {
                email: '',
                firstName: '',
                lastName: '',
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
                    this.contact.firstName = doc.data().firstName 
                    this.contact.lastName = doc.data().lastName
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
    methods: {
        updateData: function() {
            if (!this.contact.firstName){
                alert("Contact First Name is Required!")
            } else if (!this.contact.lastName){
                alert("Contact Last Name is Required!")
            } else if (!this.contact.email) {
                alert("Contact email is required!")
            } else {
                db.collection('contacts').doc(this.id).update({
                    email : this.contact.email,
                    firstName : this.contact.firstName, 
                    lastName : this.contact.lastName,
                    phone : this.contact.phone,
                    address : this.contact.address
                }).then(() => this.$router.push('/contact/'+this.id))
            }
        }
    }
    ,
    template: `
    <section>
        <div class="row">
            <div class="col-md-9">
                <h2>Edit Contact</h2>
            </div>
            <div class="col-md-3">
                <router-link :to="'/contact/delete/' + this.id"><button type="button" class="btn btn-danger py-2 px-3" style="border-radius: 50px;"><i class="fas fa-trash"></i></button></router-link>
            </div>
        </div>
        <form class="text-center" style="color: #757575;">
            <div class="form-row">
                <div class="col">
                    <div class="form">
                        <label for="materialRegisterFormFirstName">First name</label>    
                        <input type="text" id="materialRegisterFormFirstName" class="form-control" v-model=contact.firstName>
                    </div>
                </div>
                <div class="col">
                    <div class="form">
                        <label for="materialRegisterFormLastName">Last name</label>
                        <input type="text" id="materialRegisterFormLastName" class="form-control" v-model=contact.lastName>    
                    </div>
                </div>
            </div>
            <div class="form my-3">
                <label for="materialRegisterFormEmail">E-mail</label>
                <input type="email" id="materialRegisterFormEmail" class="form-control" v-model=contact.email>
            </div>
            <div class="form my-3">
                <label for="materialRegisterFormPhone">Phone number</label>
                <input type="text" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" v-model=contact.phone>
            </div>
            <div class="form my-3">
                <label for="materialRegisterFormAddress">Address</label>
                <input type="text" id="materialRegisterFormAddress" class="form-control" aria-describedby="materialRegisterFormAddressHelpBlock" v-model=contact.address>
            </div>
            <button class="btn btn-info my-4 waves-effect z-depth-0" @click.prevent="updateData">Update</button>
        </form>
        </section>
    `
}