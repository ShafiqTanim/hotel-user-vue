<template>
    <!-- Profile Section Start -->
    <div id="profile">
        <div class="container">
            <div class="section-header">
                <h2>{{user.name}}'s Profile</h2>
                <p>
                    Here is your profile information. You can update your details if needed.
                </p>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="profile-info">
                        <div class="form-row">
                            <div class="control-group col-sm-6">
                                <label>Your Name</label>
                                <input type="text" v-model="user.name" placeholder="Name" class="form-control" disabled />
                            </div>
                            <div class="control-group col-sm-6">
                                <label>Email</label>
                                <input type="email" v-model="user.email" placeholder="Email" class="form-control" disabled />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="control-group col-sm-6">
                                <label>Contact</label>
                                <input type="text" v-model="user.contact" placeholder="Contact" class="form-control" disabled />
                            </div>
                            <div class="control-group col-sm-6">
                                <label>Address</label>
                                <input type="text" v-model="user.address" placeholder="Address" class="form-control" disabled />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="control-group col-sm-6">
                                <label>NID</label>
                                <input type="text" v-model="user.nid" placeholder="NID" class="form-control" disabled />
                            </div>
                            <div class="control-group col-sm-6">
                                <label>Nationality</label>
                                <input type="text" v-model="user.nationality" placeholder="Nationality" class="form-control" disabled />
                            </div>
                        </div>
                        <!-- Button to Edit Profile -->
                        <div class="button">
                            <button @click="enableEditing">Edit Profile</button>
                        </div>
                    </div>
                    <div v-if="isEditing" class="edit-form">
                        <h3>Edit Profile</h3>
                        <form @submit.prevent="updateProfile">
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <label>Your Name</label>
                                    <input type="text" v-model="user.name" placeholder="Name" class="form-control" />
                                </div>
                                <div class="control-group col-sm-6">
                                    <label>Email</label>
                                    <input type="email" v-model="user.email" placeholder="Email" class="form-control" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <label>Contact</label>
                                    <input type="text" v-model="user.contact" placeholder="Contact" class="form-control" />
                                </div>
                                <div class="control-group col-sm-6">
                                    <label>Address</label>
                                    <input type="text" v-model="user.address" placeholder="Address" class="form-control" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <label>NID</label>
                                    <input type="text" v-model="user.nid" placeholder="NID" class="form-control" />
                                </div>
                                <div class="control-group col-sm-6">
                                    <label>Nationality</label>
                                    <input type="text" v-model="user.nationality" placeholder="Nationality" class="form-control" />
                                </div>
                            </div>
                            <div class="button">
                                <button type="submit">Update Profile</button>
                            </div>
                        </form>
                        <div class="button">
                            <button @click="cancelEditing">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Profile Section End -->
</template>

<script>

import DataService from "../services/DataService";
// import router from '@/router';

export default {
    data() {
        console.log(JSON.parse(sessionStorage.getItem('udata')))
        return {
            user: JSON.parse(sessionStorage.getItem('udata')),
            isEditing: false
        };
    },
    methods: {
        enableEditing() {
            this.isEditing = true;
        },
        cancelEditing() {
            this.isEditing = false;
        },
        updateProfile(id) {
        DataService.updateProfile(id) // This should return a promise
            .then(response => {
            this.user = response.data; // Update the user data with the response
            console.log('Profile updated', this.user);
            })
            .catch(e => {
            console.error('Error updating profile:', e);
            });

            // Disable editing mode after initiating the update
            this.isEditing = false;
        }

    }
};
</script>

<style scoped>
#profile {
    padding: 30px 0;
}
.section-header h2 {
    font-size: 32px;
    margin-bottom: 15px;
}
.profile-info, .edit-form {
    margin-top: 30px;
}
.profile-info .form-row .control-group {
    margin-bottom: 15px;
}
.edit-form .form-row .control-group {
    margin-bottom: 20px;
}

button {
    display: inline-block;
    padding: 8px 30px;
    background: #222222;
    color: #FFD700;
    font-size: 18px;
    font-weight: 400;
    border: none;
    border-radius: 0;
    cursor: pointer;
    margin-bottom: 15px;
}

button:hover {
    color: #222222;
    background: #FFD700;
}
</style>
