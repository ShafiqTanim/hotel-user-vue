<template>
  <header id="header">
    <a href="http://localhost:8081/" class="logo"><img src="assets/img/logo.jpg" alt="logo"></a>
    <div class="phone"><i class="fa fa-phone"></i>+1 234 567 8900</div>
    <div class="mobile-menu-btn"><i class="fa fa-bars"></i></div>
    <nav class="main-menu top-menu">
      <ul>
        <li class="active"><a href="http://localhost:8081/">Home</a></li>
        <li><a href="http://localhost:8081/about">About Us</a></li>
        <li><a href="http://localhost:8081/room">Rooms</a></li>
        <li><a href="http://localhost:8081/amenities">Amenities</a></li>
        <li><a href="http://localhost:8081/booking">Booking</a></li>
        <li><a href="http://localhost:8081/login">Login</a></li>
        <li><a href="http://localhost:8081/contact">Contact Us</a></li>
        <li><a href="http://localhost:8081/profile">Profile</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
</script>