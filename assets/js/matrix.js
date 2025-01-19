document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;

  const fontSize = 14;
  let columns = canvas.width/fontSize;
  let drops = [];

  function initDrops() {
    drops = Array(Math.floor(columns)).fill(1);
  }
  initDrops();

  const greenShades = [
    '#003300', // Very dark green
    '#004d00', // Darker green
    '#006600', // Dark green
    '#008000', // Medium dark green
    '#009900'  // Medium green
  ];

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < drops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      const shade = greenShades[Math.floor(Math.random() * greenShades.length)];
      ctx.fillStyle = shade;
      ctx.font = fontSize + 'px monospace';
      ctx.fillText(text, i*fontSize, drops[i]*fontSize);

      if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    columns = canvas.width/fontSize;
    initDrops();
  });

  // Start the animation
  const matrixInterval = setInterval(draw, 33);
}); 