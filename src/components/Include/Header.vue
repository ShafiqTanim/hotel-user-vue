<template>
  <header id="header">
    <a href="http://localhost:8081/" class="logo"><img src="assets/img/logo.jpg" alt="logo"></a>
    <div class="phone"><i class="fa fa-phone"></i>02315698</div>
    <div class="mobile-menu-btn"><i class="fa fa-bars"></i></div>
    <nav class="main-menu top-menu">
      <ul>
        <li class="active"><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/room">Rooms</a></li>
        <li><a href="/amenities">Amenities</a></li>
        <li><a href="/booking">Booking</a></li>
        <li v-if="!logged_in"><a href="/login">Login</a></li>
        <li v-if="logged_in" @click="logout"><a href="/login">Logout</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li v-if="logged_in"><a href="/profile">Profile</a></li>
        <li> {{user?.name}} </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data(){
        console.log(sessionStorage.getItem('udata'));
        return{
          user: sessionStorage.getItem('udata'),
          'logged_in':sessionStorage.getItem('udata'),
          
        }
      },
    props: {
      msg: String
    },
    methods: {
      logout() {
        this.uid="";
        sessionStorage.setItem('udata', '');
        window.location.reload();
      }
    }
  }
</script>

  <!-- export default {
    name: 'Header',
    data() {
      // Check login status using sessionStorage
      return {
        user: JSON.parse(sessionStorage.getItem('udata')), // Ensure to parse JSON if user data is stored as a string
        loggedIn: !!sessionStorage.getItem('udata'),
      };
    },
    methods: {
      logout() {
        // Clear user data from sessionStorage
        sessionStorage.setItem('udata', '');
        this.loggedIn = false; // Update the local state
        window.location.href = '/'; // Redirect to home or login page
      }
    }
  }; -->