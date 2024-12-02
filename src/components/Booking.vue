<template>
    <div id="search" style="background: #f2f2f2;">
            <div class="container">
                <div class="form-row">
                    <div class="control-group col-md-3">
                        <label>Check-In</label>
                        <div class="form-group">
                            <div class="input-group date" id="date-3" data-target-input="nearest">
                                <input type="text" class="form-control datetimepicker-input" data-target="#date-3"/>
                                <div class="input-group-append" data-target="#date-3" data-toggle="datetimepicker">
                                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="control-group col-md-3">
                        <label>Check-Out</label>
                        <div class="form-group">
                            <div class="input-group date" id="date-4" data-target-input="nearest">
                                <input type="text" class="form-control datetimepicker-input" data-target="#date-4"/>
                                <div class="input-group-append" data-target="#date-4" data-toggle="datetimepicker">
                                    <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="control-group col-md-3">
                        <div class="form-row">
                            <div class="control-group col-md-6">
                                <label>Adult</label>
                                <select class="custom-select">
                                    <option selected>0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div class="control-group col-md-6 kid">
                                <label>Kid</label>
                                <select class="custom-select">
                                    <option selected>0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="control-group col-md-3">
                        <button class="btn btn-block">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search Section End -->
        
        <!-- Booking Section Start -->
        <div id="booking">
            <div class="container">
                <div class="section-header">
                    <h2>Room Booking</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="booking-form">
                            <div id="success"></div>
                            <form @submit.prevent name="sentMessage" id="bookingForm" novalidate>
                                <div class="control-group">
                                    <label>Name</label>
                                    <input type="text" v-model="formdata.customer_name" class="form-control" id="fname" placeholder="E.g. John" required data-validation-required-message="Please enter first name" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Room</label>
                                        <select v-model="formdata.room_list_id" class="form-control" required>
                                            <option v-for="room in rooms" :key="room.id" :value="room.id">
                                                {{ room.room_number }} - {{ room.roomcategory?.category_name }} ({{ room.roomcategory?.price }})
                                            </option>
                                        </select>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-6">
                                         <label>Contact No</label>
                                        <input type="text" v-model="formdata.contact_no" class="form-control" id="mobile" placeholder="E.g. +1 234 567 8900" required data-validation-required-message="Please enter your mobile number" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                       <label>Check-In</label>
                                        <input type="date" v-model="formdata.check_in_date" class="form-control datetimepicker-input" id="date-1" data-toggle="datetimepicker" data-target="#date-1" placeholder="E.g. MM/DD/YYYY" required data-validation-required-message="Please enter date"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-6">
                                        <label>Check-Out</label>
                                        <input type="date" v-model="formdata.check_out_date" class="form-control datetimepicker-input" id="date-2" data-toggle="datetimepicker" data-target="#date-2" placeholder="E.g. MM/DD/YYYY" required data-validation-required-message="Please enter date"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="control-group col-md-6">
                                        <label>Adult</label>
                                        <input type="text" v-model="formdata.number_of_guest_adult" class="form-control" id="date-2" data-toggle="datetimepicker" data-target="#date-2" placeholder="E.g. MM/DD/YYYY" required data-validation-required-message="Please enter date"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-md-6">
                                        <label>Child</label>
                                        <input type="text" v-model="formdata.number_of_guest_child" class="form-control" id="date-2" data-toggle="datetimepicker" data-target="#date-2" placeholder="E.g. MM/DD/YYYY" required data-validation-required-message="Please enter date"/>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="button"><button @click="boooking" type="submit" id="bookingButton">Book Now</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

    import DataService from "../services/DataService"; // Adjust the import path as needed

    export default {
        name: 'Booking',
        data() {
            return {
                formdata: {
                    customer_name: '',
                    room_list_id: '',
                    contact_no: '',
                    check_in_date: '',
                    check_out_date: '',
                    number_of_guest_adult: '',
                    number_of_guest_child: '',
                },
                rooms: []  // To store the list of available rooms
            };
        },
        methods: {
            async boooking() {
                // Prepare the data for the API call
                const data = {
                    customer_name: this.formdata.customer_name,
                    room_list_id: this.formdata.room_list_id,
                    contact_no: this.formdata.contact_no,
                    check_in_date: this.formdata.check_in_date,
                    check_out_date: this.formdata.check_out_date,
                    number_of_guest_adult: this.formdata.number_of_guest_adult,
                    number_of_guest_child: this.formdata.number_of_guest_child,
                };
                try {
                    const response = await DataService.reservationRequest(data);
                    if (response.data.data) {
                    alert('Booking successful');
                    window.location.reload();
                    } else {
                    alert(response.data.error);
                    }
                } catch (e) {
                    console.error(e);
                    alert('An error occurred during booking.');
                }
            },
            fetchRooms() {
                DataService.roomList().then(response => {
                    if (response.data.success) {
                        this.rooms = response.data.data;  // Assign the room list to the component data
                    } else {
                        console.error('Failed to fetch rooms:', response.data.message);
                    }
                }).catch(error => {
                    console.error('Error fetching rooms:', error);
                });
            }
        },
        mounted() {
            this.fetchRooms(); // Fetch the room list when the component is mounted
        }
    };
</script>