<section class="hero">
  <div class="hero-text">
    <h1>Hi, I'm <span>Darshan</span></h1>
    <p><span id="typing"></span></p>
  </div>

  <!-- Abstract animated background -->
  <canvas id="bg-animation"></canvas>
</section>

<!-- Typed.js -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
  var typed = new Typed('#typing', {
    strings: ["Web Developer", "Freelancer", "Frontend Engineer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
  });
</script>