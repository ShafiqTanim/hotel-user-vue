<template>
    <!-- Login Section Start -->
    <div id="login">
        <div class="container">
            <div class="section-header">
                <h2>Registration / Login</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                </p>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="login-form">
                        <form @submit.prevent="registration">
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <label>Your Name</label>
                                    <input type="text" v-model="register.name" placeholder="Name" class="form-control" required="required" />
                                </div>
                                <div class="control-group col-sm-6">
                                    <label>Email</label>
                                    <input type="email" v-model="register.email" placeholder="Email" class="form-control" required="required" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <label>Contact</label>
                                    <input type="text" v-model="register.contact" placeholder="Contact" class="form-control" required="required" />
                                </div>
                                <div class="control-group col-sm-6">
                                    <label>NID</label>
                                    <input type="text" v-model="register.nid" placeholder="NID" class="form-control" required="required" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <label>Your Password</label>
                                    <input type="password" v-model="register.password" placeholder="Password" class="form-control" required="required" />
                                </div>
                                <div class="control-group col-sm-6">
                                    <label>Repeat Your Password</label>
                                    <input type="password" v-model="register.c_password" placeholder="Retype Password" class="form-control" required="required" />
                                </div>
                            </div>
                            <div class="button"><button type="submit">Registration</button></div>
                        </form>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="login-form">
                        <form @submit.prevent="handleLogin">
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <label>Your Email</label>
                                    <input type="email" v-model="loginData.email"  class="form-control" placeholder="Email" required="required" />
                                </div>
                                <div class="control-group col-sm-6">
                                    <label>Your </label>
                                    <input type="password" v-model="loginData.password" class="form-control" placeholder="Password" required="required" />
                                </div>
                            </div>
                            <div class="button"><button @click="login">Login</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import DataService from "../services/DataService";
    import router from '@/router';

    export default {
        name: 'Login',
        data() {
            return {
                register: {
                    name: '',
                    email: '',
                    contact: '',
                    nid: '',
                    password: '',
                    c_password: ''
                },
                loginData: {
                    email: '',
                    password: ''
                },
            };
        },

        methods: {
            registration() {
                // Ensure password and confirm password match
                if (this.register.password !== this.register.c_password) {
                    alert("Passwords do not match!");
                    return;
                }

                // Prepare the data for the API call
                const data = {
                    name: this.register.name,
                    email: this.register.email,
                    contact: this.register.contact,
                    nid: this.register.nid,
                    password: this.register.password,
                    c_password: this.register.c_password,
                };

                // Send registration data to the backend
                DataService.registration(data) .then(response => {
                    if (response.data.data) {
                        alert('register success')
                        window.location.reload();
                    
                    } else {
                        alert(response.data.error);
                    }
                })
                .catch(e => {
                    console.error(e);
                    alert('An error occurred during registration.');
                });
            },

            login(){
                var data={
                    email:this.loginData.email,
                    password: this.loginData.password
                };
        
                // handleLogin() {
                //   // Handle login logic here (e.g., API call)
                //   alert('Logged in!');
                //   this.$router.push('/booking');
                // }

                DataService.login(data)
                .then(response => {
                    console.log(response.data.data.token)
                    if(response.data.data.token){
                        sessionStorage.setItem('uid', response.data.data.token);
                        sessionStorage.setItem('udata', JSON.stringify(response.data.data.data));
                    }else
                    alert(response.data.error)
                    console.log(response)
                    router.push({ name: 'profile' });
                    window.location.href='/profile';
                })
                .catch(e => {
                    console.log(e);
                });
            }
        }
    }
</script>
