<template>
  <header id="header">
    <a href="index.html" class="logo"><img src="assets/img/logo.jpg" alt="logo"></a>
    <div class="phone"><i class="fa fa-phone"></i>+1 234 567 8900</div>
    <div class="mobile-menu-btn"><i class="fa fa-bars"></i></div>
    <nav class="main-menu top-menu">
      <ul>
        <li class="active"><a href="http://localhost:8081/">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="http://localhost:8081/room">Rooms</a></li>
        <li><a href="amenities.html">Amenities</a></li>
        <li><a href="http://localhost:8081/booking">Booking</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default{
      name: 'Header',
      props: {
        msg: String
      }
  }
</script>