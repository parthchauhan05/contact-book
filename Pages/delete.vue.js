const deleteContact = {
    props:['id'],
    mounted: function() {
        db.collection('contacts').doc(this.id).delete().then(() => this.$router.push('/'))
    },
    template: `<p>Contact Deleted</p>`
}