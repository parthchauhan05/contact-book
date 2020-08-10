const add = {
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
    methods: {
        addData: function() {
            if(!this.contact.firstName){
                alert("Contact First Name is Required.")
            } else if (!this.contact.lastName) {
                alert("Contact Last Name is Required.")
            } else if (!this.contact.email) {
                alert("Contact email is Required.")
            } else {
                db.collection('contacts').add({
                    email : this.contact.email,
                    firstName : this.contact.firstName, 
                    lastName : this.contact.lastName,
                    phone : this.contact.phone,
                    address : this.contact.address
                }).then(doc => this.$router.push('/contact/'+doc.id))
            }
            
        }
    }
    ,
    template: `
    <section>
        <h2 class="text-center">Add Contact</h2>
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
            <button class="btn btn-info my-4 waves-effect z-depth-0" @click.prevent="addData">Add Contact</button>
        </form>
        </section>
    `
}