<?php
// index.php - Generated from source.html, CSS & JS tách riêng

// Include admin functions for tracking
require_once 'admin_functions.php';

// Track page view
trackPageView();

// Track activity with language support
$current_lang = $_SESSION['currentLanguage'] ?? 'en';
if ($current_lang === 'vi') {
    trackActivity('Đã truy cập trang');
} else {
    trackActivity('Page visited');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Free Background Generator - Add Beautiful Gradients & Images to Photos | AddBackground</title>
  <meta name="description" content="Create stunning images with beautiful gradient and photo backgrounds. Free online tool to add backgrounds, adjust padding, rounded corners, and download high-quality images instantly.">
  <meta name="keywords" content="background generator, gradient background, image background, photo editor, free online tool, add background to image, gradient maker, image editor">
  <meta name="author" content="addbackground.net">
  <meta name="robots" content="index, follow">
  <meta name="language" content="EN">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://addbackground.net">
  <meta property="og:title" content="Free Background Generator - Add Beautiful Gradients & Images to Photos">
  <meta property="og:description" content="Create stunning images with beautiful gradient and photo backgrounds. Free online tool to add backgrounds, adjust padding, rounded corners, and download high-quality images instantly.">
  <meta property="og:image" content="image/addbackground.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="AddBackground - Free Background Generator Tool">
  <meta property="og:site_name" content="AddBackground">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://addbackground.net">
  <meta property="twitter:title" content="Free Background Generator - Add Beautiful Gradients & Images to Photos">
  <meta property="twitter:description" content="Create stunning images with beautiful gradient and photo backgrounds. Free online tool to add backgrounds, adjust padding, rounded corners, and download high-quality images instantly.">
  <meta property="twitter:image" content="image/addbackground.png">
  <meta property="twitter:image:alt" content="AddBackground - Free Background Generator Tool">
  <meta name="twitter:creator" content="@shareforall">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234CAF50'><path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/></svg>">
  <link rel="apple-touch-icon" sizes="180x180" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234CAF50'><path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/></svg>">
  <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234CAF50'><path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/></svg>">
  <meta name="theme-color" content="#4CAF50">
  <meta name="msapplication-TileColor" content="#4CAF50">
  <meta name="msapplication-TileImage" content="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234CAF50'><path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/></svg>">
  <link rel="canonical" href="https://addbackground.net">
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebApplication","name":"AddBackground - Background Generator","url":"https://addbackground.net","description":"Free online tool to add beautiful gradient and photo backgrounds to images with customizable padding, rounded corners, and shadows.","applicationCategory":"DesignApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"creator":{"@type":"Person","name":"addbackground.net","url":"https://addbackground.net"},"screenshot":"https://addbackground.net/image/addbackground.png","featureList":["Add gradient backgrounds to images","Add photo backgrounds to images","Adjust image padding and spacing","Customize rounded corners","Add drop shadows","Multiple aspect ratios support","Add text signatures","High-quality image downloads","Drag and drop image upload"]}</script>
  <link rel="stylesheet" href="style.css">
  <!-- Language files -->
  <script src="languages/en.js"></script>
  <script src="languages/vi.js"></script>
  <script src="languages/index.js"></script>
  <!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6R1GC8GXX4"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-6R1GC8GXX4');
	</script>
</head>
<body>
  <!-- Language Switcher -->
  <div class="language-switcher">
    <button class="lang-btn" onclick="changeLanguage('en')" id="lang-en">
      <img class="flag" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNSI+DQogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSIgZmlsbD0iIzAxMjE2OSIvPg0KICA8cGF0aCBkPSJNMCwwIEwyMCwxNSBNMjAsMCBMMCwxNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPg0KICA8cGF0aCBkPSJNMTAsMCB2MTUgTTAsNy41IGgyMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIvPg0KICA8cGF0aCBkPSJNMTAsMCB2MTUgTTAsNy41IGgyMCIgc3Ryb2tlPSIjQzgxMDJFIiBzdHJva2Utd2lkdGg9IjEiLz4NCiAgPHBhdGggZD0iTTAsMCBMMjAsMTUgTTIwLDAgTDAsMTUiIHN0cm9rZT0iI0M4MTAyRSIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4NCjwvc3ZnPg==" alt="English" width="20" height="15">
    </button>
    <button class="lang-btn" onclick="changeLanguage('vi')" id="lang-vi">
      <img class="flag" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNSI+DQogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxNSIgZmlsbD0iI2RhMjUxZCIvPg0KICA8cGF0aCBkPSJNMTAsNC41IEw4LjUsNy44IGgtMi43IGwyLjIgMS42LTAuOCAyLjYgMi4yLTEuNiAyLjIgMS42LTAuOC0yLjYgMi4yLTEuNmgtMi43TDEwLDQuNXoiIGZpbGw9IiNmZjAiLz4NCjwvc3ZnPg==" alt="Tiếng Việt" width="20" height="15">
    </button>
  </div>
  
  <!-- HTML content giữ nguyên từ source.html, bỏ phần <style> và <script> -->
  <div class="container">
    <!-- Canvas Frame with Gradient Background -->
    <div class="canvas-frame" id="canvasFrame">
      <!-- Uploaded Image Preview -->
      <div class="image-container" id="imageContainer" style="display: none; padding: 300px;">
        <img id="previewImage" class="uploaded-image" src="" alt="Uploaded" style="border-radius: 80px; box-shadow: 0 50px 100px rgba(0, 0, 0, 0.4);" />
      </div>
      <!-- Signature Text -->
      <div class="signature-text" id="signatureText" style="display: none;"></div>
    </div>
    <!-- Ratio Selector -->
    <div class="ratio-selector">
      <div class="ratio-btn" onclick="changeRatio('16:9')" data-ratio="16:9">16:9</div>
      <div class="ratio-btn active" onclick="changeRatio('4:3')" data-ratio="4:3">4:3</div>
      <div class="ratio-btn" onclick="changeRatio('3:2')" data-ratio="3:2">3:2</div>
      <div class="ratio-btn" onclick="changeRatio('1:1')" data-ratio="1:1">1:1</div>
      <div class="ratio-btn" onclick="changeRatio('1200:630')" data-ratio="1200:630">1200:630</div>
    </div>
    <!-- Upload Box -->
    <div class="upload-box" id="uploadBox">
      <h3>🎨 Create Amazing Images</h3>
      <p>Drag & drop your image here or<br>click the button Choose Image below</p>
      <button class="upload-btn" onclick="document.getElementById('fileUpload').click()">
        📁 Choose Image
      </button>
      <input type="file" id="fileUpload" accept="image/*" style="display: none;">
    </div>
    <!-- Theme Selector -->
    <div class="theme-selector">
      <!-- Column 1 -->
      <div class="theme-column">
        <div class="theme cool" onclick="changeTheme('cool')"></div>
        <div class="theme beach" onclick="changeTheme('beach')"></div>
        <div class="theme violet" onclick="changeTheme('violet')"></div>
        <div class="theme rose" onclick="changeTheme('rose')"></div>
        <div class="theme sky" onclick="changeTheme('sky')"></div>
        <div class="theme love" onclick="changeTheme('love')"></div>
        <div class="theme sunset" onclick="changeTheme('sunset')"></div>
        <div class="theme aqua" onclick="changeTheme('aqua')"></div>
        <div class="theme mint" onclick="changeTheme('mint')"></div>
        <div class="theme peach" onclick="changeTheme('peach')"></div>
        <div class="theme dream" onclick="changeTheme('dream')"></div>
        <div class="theme ice" onclick="changeTheme('ice')"></div>
      </div>
      <!-- Column 2 -->
      <div class="theme-column">
        <div class="theme fire" onclick="changeTheme('fire')"></div>
        <div class="theme ocean" onclick="changeTheme('ocean')"></div>
        <div class="theme forest" onclick="changeTheme('forest')"></div>
        <div class="theme gold" onclick="changeTheme('gold')"></div>
        <div class="theme purple" onclick="changeTheme('purple')"></div>
        <div class="theme coral" onclick="changeTheme('coral')"></div>
        <div class="theme midnight" onclick="changeTheme('midnight')"></div>
        <div class="theme autumn" onclick="changeTheme('autumn')"></div>
        <div class="theme lime" onclick="changeTheme('lime')"></div>
        <div class="theme lavender" onclick="changeTheme('lavender')"></div>
        <div class="theme cherry" onclick="changeTheme('cherry')"></div>
        <div class="theme steel" onclick="changeTheme('steel')"></div>
      </div>
      <!-- Column 3 - Image Themes -->
      <div class="theme-column">
        <div class="image-theme" onclick="changeImageTheme('1')" style="background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)"></div>
        <div class="image-theme" onclick="changeImageTheme('2')" style="background: linear-gradient(135deg, #a8edea, #fed6e3)"></div>
        <div class="image-theme" onclick="changeImageTheme('3')" style="background: linear-gradient(135deg, #ffecd2, #fcb69f)"></div>
        <div class="image-theme" onclick="changeImageTheme('4')" style="background: linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef)"></div>
        <div class="image-theme" onclick="changeImageTheme('5')" style="background: linear-gradient(135deg, #a18cd1, #fbc2eb)"></div>
        <div class="image-theme" onclick="changeImageTheme('6')" style="background: linear-gradient(135deg, #fad0c4, #ffd1ff)"></div>
        <div class="image-theme" onclick="changeImageTheme('7')" style="background: linear-gradient(135deg, #ffecd2, #fcb69f)"></div>
        <div class="image-theme" onclick="changeImageTheme('8')" style="background: linear-gradient(135deg, #ff9a9e, #fad0c4)"></div>
        <div class="image-theme" onclick="changeImageTheme('9')" style="background: linear-gradient(135deg, #a8edea, #fed6e3)"></div>
        <div class="image-theme" onclick="changeImageTheme('10')" style="background: linear-gradient(135deg, #d299c2, #fef9d7)"></div>
        <div class="image-theme" onclick="changeImageTheme('11')" style="background: linear-gradient(135deg, #89f7fe, #66a6ff)"></div>
        <div class="image-theme" onclick="changeImageTheme('12')" style="background: linear-gradient(135deg, #fdbb2d, #22c1c3)"></div>
      </div>
    </div>
    <!-- Style Controls -->
    <div class="control-panel">
      <label for="rounded">🔵 Rounded 
        <span class="value-display" id="roundedValue">80px</span>
      </label>
      <input type="range" id="rounded" min="0" max="200" value="80">
      <label for="padding">📏 Padding 
        <span class="value-display" id="paddingValue">300px</span>
      </label>
      <input type="range" id="padding" min="0" max="1000" value="300">
      <label for="shadow">🌫️ Shadow 
        <span class="value-display" id="shadowValue">100</span>
      </label>
      <input type="range" id="shadow" min="0" max="300" value="100">
      <label for="signature">✍️ Signature</label>
      <input type="text" id="signature" value="AddBackground.net" placeholder="Your text signature..." style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
    </div>
    <!-- Download Box -->
    <div class="download-box">
      <button class="download-btn" id="downloadBtn" onclick="downloadImage()" disabled>
        📥 Download
      </button>
    </div>
    <!-- Social Info -->
    <div class="social-info">
      <span class="made-by">AddBackground.net</span>
      <!--
      <div class="social-links">
        <a href="#" target="_blank" title="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="#" target="_blank" title="YouTube">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a href="#" target="_blank" title="My Website">🌐</a>
    </div>
  -->
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html> 