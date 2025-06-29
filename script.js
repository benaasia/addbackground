// script.js - Tách từ source.html

const themes = {
  // Row 1
  cool: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
  beach: 'linear-gradient(135deg, #00c9ff, #92fe9d)',
  violet: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
  rose: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
  sky: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
  love: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
  sunset: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
  aqua: 'linear-gradient(135deg, #13547a, #80d0c7)',
  mint: 'linear-gradient(135deg, #d4fc79, #96e6a1)',
  peach: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
  dream: 'linear-gradient(135deg, #c471f5, #fa71cd)',
  ice: 'linear-gradient(135deg, #74ebd5, #9face6)',
  // Row 2
  fire: 'linear-gradient(135deg, #ff6b35, #f7931e)',
  ocean: 'linear-gradient(135deg, #2e3192, #1bffff)',
  forest: 'linear-gradient(135deg, #134e5e, #71b280)',
  gold: 'linear-gradient(135deg, #f7971e, #ffd200)',
  purple: 'linear-gradient(135deg, #667eea, #764ba2)',
  coral: 'linear-gradient(135deg, #ff7b7b, #ff416c)',
  midnight: 'linear-gradient(135deg, #232526, #414345)',
  autumn: 'linear-gradient(135deg, #fa709a, #fee140)',
  lime: 'linear-gradient(135deg, #a8e6cf, #dcedc1)',
  lavender: 'linear-gradient(135deg, #d299c2, #fef9d7)',
  cherry: 'linear-gradient(135deg, #eb3349, #f45c43)',
  steel: 'linear-gradient(135deg, #74b9ff, #0984e3)'
};

const ratios = {
  '16:9': 16/9,
  '4:3': 4/3,
  '3:2': 3/2,
  '1:1': 1/1,
  '1200:630': 1200/630
};

let currentRatio = '4:3';
let currentTheme = 'sky'; // Track current theme
let currentThemeType = 'gradient'; // 'gradient' or 'image'
let currentImageTheme = '1'; // Track current image theme
let originalImageData = null; // Store original image data for high-res downloads

function changeTheme(theme) {
  currentTheme = theme;
  currentThemeType = 'gradient';
  const frame = document.getElementById('canvasFrame');
  
  // Sử dụng requestAnimationFrame để tối ưu performance
  requestAnimationFrame(() => {
    // Clear all background image properties first
    frame.style.backgroundImage = 'none';
    frame.style.backgroundSize = '';
    frame.style.backgroundPosition = '';
    frame.style.backgroundRepeat = '';
    
    // Set the gradient background
    frame.style.background = themes[theme];
  });
}

function changeImageTheme(imageNumber) {
  currentImageTheme = imageNumber;
  currentThemeType = 'image';
  const frame = document.getElementById('canvasFrame');
  
  // Sử dụng requestAnimationFrame để tối ưu performance
  requestAnimationFrame(() => {
    // Clear gradient background first
    frame.style.background = 'transparent';
    
    // Define image theme gradients
    const imageThemes = {
      '1': 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
      '2': 'linear-gradient(135deg, #a8edea, #fed6e3)',
      '3': 'linear-gradient(135deg, #ffecd2, #fcb69f)',
      '4': 'linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef)',
      '5': 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
      '6': 'linear-gradient(135deg, #fad0c4, #ffd1ff)',
      '7': 'linear-gradient(135deg, #ffecd2, #fcb69f)',
      '8': 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      '9': 'linear-gradient(135deg, #a8edea, #fed6e3)',
      '10': 'linear-gradient(135deg, #d299c2, #fef9d7)',
      '11': 'linear-gradient(135deg, #89f7fe, #66a6ff)',
      '12': 'linear-gradient(135deg, #fdbb2d, #22c1c3)'
    };
    
    // Set gradient background
    frame.style.background = imageThemes[imageNumber] || imageThemes['1'];
    frame.style.backgroundSize = 'cover';
    frame.style.backgroundPosition = 'center';
    frame.style.backgroundRepeat = 'no-repeat';
  });
}

function changeRatio(ratio) {
  currentRatio = ratio;
  document.querySelectorAll('.ratio-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-ratio="${ratio}"]`).classList.add('active');
  if (originalImageData) {
    updateImageSize();
  } else {
    const frame = document.getElementById('canvasFrame');
    const containerWidth = window.innerWidth - 280;
    const containerHeight = window.innerHeight - 120;
    const aspectRatio = ratios[ratio];
    let width, height;
    if (containerWidth / containerHeight > aspectRatio) {
      height = Math.min(containerHeight, 600);
      width = height * aspectRatio;
    } else {
      width = Math.min(containerWidth, 800);
      height = width / aspectRatio;
    }
    frame.style.width = width + 'px';
    frame.style.height = height + 'px';
  }
}

// Initialize with default theme and ratio
changeTheme('sky');
changeRatio('4:3');
document.getElementById('paddingValue').textContent = '300px';

document.getElementById('fileUpload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    handleImageFile(file);
  }
});

function handleImageFile(file) {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const previewImg = document.getElementById('previewImage');
      previewImg.src = e.target.result;
      previewImg.onload = function() {
        originalImageData = {
          src: e.target.result,
          naturalWidth: previewImg.naturalWidth,
          naturalHeight: previewImg.naturalHeight
        };
        updateImageSize();
      };
      document.getElementById('imageContainer').style.display = 'block';
      document.getElementById('downloadBtn').disabled = false;
      document.getElementById('uploadBox').style.display = 'none';
      updateImageSize();
    };
    reader.readAsDataURL(file);
  }
}

const canvasFrame = document.getElementById('canvasFrame');
const uploadBox = document.getElementById('uploadBox');
function addDragEvents(element) {
  element.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    canvasFrame.classList.add('drag-over');
    uploadBox.classList.add('drag-over');
  });
  element.addEventListener('dragenter', function(e) {
    e.preventDefault();
    e.stopPropagation();
    canvasFrame.classList.add('drag-over');
    uploadBox.classList.add('drag-over');
  });
  element.addEventListener('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!canvasFrame.contains(e.relatedTarget)) {
      canvasFrame.classList.remove('drag-over');
      uploadBox.classList.remove('drag-over');
    }
  });
  element.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    canvasFrame.classList.remove('drag-over');
    uploadBox.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageFile(files[0]);
    }
  });
}
addDragEvents(canvasFrame);
addDragEvents(uploadBox);

function updateImageSize() {
  const frame = document.getElementById('canvasFrame');
  const img = document.getElementById('previewImage');
  const paddingValue = parseInt(document.getElementById('padding').value);
  if (!originalImageData) return;
  const maxDisplaySize = 560;
  const imageAspectRatio = originalImageData.naturalWidth / originalImageData.naturalHeight;
  let displayImageWidth, displayImageHeight;
  if (originalImageData.naturalWidth > originalImageData.naturalHeight) {
    displayImageWidth = Math.min(maxDisplaySize, originalImageData.naturalWidth);
    displayImageHeight = displayImageWidth / imageAspectRatio;
  } else {
    displayImageHeight = Math.min(maxDisplaySize, originalImageData.naturalHeight);
    displayImageWidth = displayImageHeight * imageAspectRatio;
  }
  const imageScale = displayImageWidth / originalImageData.naturalWidth;
  const scaledPaddingValue = paddingValue * imageScale;
  const minFrameWidth = displayImageWidth + (scaledPaddingValue * 2);
  const minFrameHeight = displayImageHeight + (scaledPaddingValue * 2);
  const aspectRatio = ratios[currentRatio];
  let frameWidth, frameHeight;
  if (minFrameWidth / minFrameHeight > aspectRatio) {
    frameWidth = minFrameWidth;
    frameHeight = frameWidth / aspectRatio;
  } else {
    frameHeight = minFrameHeight;
    frameWidth = frameHeight * aspectRatio;
  }
  const containerWidth = window.innerWidth - 280;
  const containerHeight = window.innerHeight - 120;
  const scaleX = containerWidth / frameWidth;
  const scaleY = containerHeight / frameHeight;
  const scale = Math.min(scaleX, scaleY, 1);
  frameWidth *= scale;
  frameHeight *= scale;
  displayImageWidth *= scale;
  displayImageHeight *= scale;
  const finalScaledPadding = scaledPaddingValue * scale;
  frame.style.width = frameWidth + 'px';
  frame.style.height = frameHeight + 'px';
  img.style.width = displayImageWidth + 'px';
  img.style.height = displayImageHeight + 'px';
  img.style.maxWidth = 'none';
  img.style.maxHeight = 'none';
  document.getElementById('imageContainer').style.padding = '0px';
  const roundedValue = parseInt(document.getElementById('rounded').value);
  const shadowValue = parseInt(document.getElementById('shadow').value);
  const newScale = displayImageWidth / originalImageData.naturalWidth;
  const scaledRounded = roundedValue * newScale;
  const scaledShadow = shadowValue * newScale;
  img.style.borderRadius = scaledRounded + 'px';
  img.style.boxShadow = `0 ${scaledShadow / 2}px ${scaledShadow}px rgba(0, 0, 0, 0.4)`;
}

const preview = document.getElementById('previewImage');
const container = document.getElementById('imageContainer');
document.getElementById('rounded').addEventListener('input', function() {
  const roundedValue = parseInt(this.value);
  if (originalImageData) {
    const previewImg = document.getElementById('previewImage');
    const currentImgWidth = parseFloat(previewImg.style.width) || previewImg.offsetWidth;
    const scale = currentImgWidth / originalImageData.naturalWidth;
    const scaledRounded = roundedValue * scale;
    preview.style.borderRadius = scaledRounded + 'px';
  } else {
    preview.style.borderRadius = roundedValue + 'px';
  }
  document.getElementById('roundedValue').textContent = roundedValue + 'px';
});
document.getElementById('padding').addEventListener('input', function() {
  document.getElementById('paddingValue').textContent = this.value + 'px';
  if (originalImageData) {
    updateImageSize();
  }
});
document.getElementById('shadow').addEventListener('input', function() {
  const shadowValue = parseInt(this.value);
  if (originalImageData) {
    const previewImg = document.getElementById('previewImage');
    const currentImgWidth = parseFloat(previewImg.style.width) || previewImg.offsetWidth;
    const scale = currentImgWidth / originalImageData.naturalWidth;
    const scaledShadow = shadowValue * scale;
    preview.style.boxShadow = `0 ${scaledShadow / 2}px ${scaledShadow}px rgba(0, 0, 0, 0.4)`;
  } else {
    preview.style.boxShadow = `0 ${shadowValue / 2}px ${shadowValue}px rgba(0, 0, 0, 0.4)`;
  }
  document.getElementById('shadowValue').textContent = shadowValue;
});
document.getElementById('signature').addEventListener('input', function() {
  const signatureText = document.getElementById('signatureText');
  const text = this.value.trim();
  if (text) {
    signatureText.textContent = text;
    signatureText.style.display = 'block';
    signatureText.style.visibility = 'visible';
  } else {
    signatureText.style.display = 'none';
    signatureText.style.visibility = 'hidden';
  }
});

window.addEventListener('resize', function() {
  changeRatio(currentRatio);
  updateImageSize();
});

// Initialize language when page loads
document.addEventListener('DOMContentLoaded', function() {
  initLanguage();
  updateLanguageButtons();
  
  // Show default signature
  const signatureInput = document.getElementById('signature');
  const signatureText = document.getElementById('signatureText');
  if (signatureInput.value.trim()) {
    signatureText.textContent = signatureInput.value.trim();
    signatureText.style.display = 'block';
    signatureText.style.visibility = 'visible';
  }
});

function updateLanguageButtons() {
  // Remove active class from all buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to current language button
  document.getElementById(`lang-${currentLanguage}`).classList.add('active');
}

// Override the changeLanguage function to also update button states
const originalChangeLanguage = changeLanguage;
changeLanguage = function(lang) {
  originalChangeLanguage(lang);
  updateLanguageButtons();
}; 

// Download function
function downloadImage() {
  if (!originalImageData) {
    alert('Please upload an image first!');
    return;
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Get current settings
  const paddingValue = parseInt(document.getElementById('padding').value);
  const roundedValue = parseInt(document.getElementById('rounded').value);
  const shadowValue = parseInt(document.getElementById('shadow').value);
  const signatureText = document.getElementById('signature').value.trim();
  
  // Calculate dimensions for high-quality output
  const aspectRatio = ratios[currentRatio];
  
  // Calculate frame dimensions based on image and padding
  const minFrameWidth = originalImageData.naturalWidth + (paddingValue * 2);
  const minFrameHeight = originalImageData.naturalHeight + (paddingValue * 2);
  
  let frameWidth, frameHeight;
  if (minFrameWidth / minFrameHeight > aspectRatio) {
    frameWidth = minFrameWidth;
    frameHeight = frameWidth / aspectRatio;
  } else {
    frameHeight = minFrameHeight;
    frameWidth = frameHeight * aspectRatio;
  }
  
  // Set canvas size
  canvas.width = frameWidth;
  canvas.height = frameHeight;
  
  // Create background
  if (currentThemeType === 'gradient') {
    // Create gradient background for regular themes
    const gradient = ctx.createLinearGradient(0, 0, frameWidth, frameHeight);
    const themeColors = themes[currentTheme].match(/#[a-fA-F0-9]{6}/g);
    if (themeColors && themeColors.length >= 2) {
      gradient.addColorStop(0, themeColors[0]);
      gradient.addColorStop(1, themeColors[1]);
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = themes[currentTheme];
    }
  } else if (currentThemeType === 'image') {
    // Create gradient background for image themes
    const imageThemes = {
      '1': ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3'],
      '2': ['#a8edea', '#fed6e3'],
      '3': ['#ffecd2', '#fcb69f'],
      '4': ['#ff9a9e', '#fecfef', '#fecfef'],
      '5': ['#a18cd1', '#fbc2eb'],
      '6': ['#fad0c4', '#ffd1ff'],
      '7': ['#ffecd2', '#fcb69f'],
      '8': ['#ff9a9e', '#fad0c4'],
      '9': ['#a8edea', '#fed6e3'],
      '10': ['#d299c2', '#fef9d7'],
      '11': ['#89f7fe', '#66a6ff'],
      '12': ['#fdbb2d', '#22c1c3']
    };
    
    const colors = imageThemes[currentImageTheme] || imageThemes['1'];
    const gradient = ctx.createLinearGradient(0, 0, frameWidth, frameHeight);
    
    if (colors.length === 2) {
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(1, colors[1]);
    } else if (colors.length === 4) {
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(0.33, colors[1]);
      gradient.addColorStop(0.66, colors[2]);
      gradient.addColorStop(1, colors[3]);
    }
    
    ctx.fillStyle = gradient;
  } else {
    // Fallback color
    ctx.fillStyle = '#f0f0f0';
  }
  
  ctx.fillRect(0, 0, frameWidth, frameHeight);
  
  // Load and draw the image
  const img = new Image();
  img.onload = function() {
    // Calculate image position (center)
    const imageX = (frameWidth - originalImageData.naturalWidth) / 2;
    const imageY = (frameHeight - originalImageData.naturalHeight) / 2;
    
    // Create shadow effect
    if (shadowValue > 0) {
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = shadowValue;
      ctx.shadowOffsetY = shadowValue / 2;
    }
    
    // Draw image with rounded corners (compatible method)
    if (roundedValue > 0) {
      ctx.save();
      ctx.beginPath();
      const radius = Math.min(roundedValue, Math.min(originalImageData.naturalWidth, originalImageData.naturalHeight) / 2);
      
      // Draw rounded rectangle path
      ctx.moveTo(imageX + radius, imageY);
      ctx.lineTo(imageX + originalImageData.naturalWidth - radius, imageY);
      ctx.quadraticCurveTo(imageX + originalImageData.naturalWidth, imageY, imageX + originalImageData.naturalWidth, imageY + radius);
      ctx.lineTo(imageX + originalImageData.naturalWidth, imageY + originalImageData.naturalHeight - radius);
      ctx.quadraticCurveTo(imageX + originalImageData.naturalWidth, imageY + originalImageData.naturalHeight, imageX + originalImageData.naturalWidth - radius, imageY + originalImageData.naturalHeight);
      ctx.lineTo(imageX + radius, imageY + originalImageData.naturalHeight);
      ctx.quadraticCurveTo(imageX, imageY + originalImageData.naturalHeight, imageX, imageY + originalImageData.naturalHeight - radius);
      ctx.lineTo(imageX, imageY + radius);
      ctx.quadraticCurveTo(imageX, imageY, imageX + radius, imageY);
      ctx.closePath();
      
      ctx.clip();
      ctx.drawImage(img, imageX, imageY, originalImageData.naturalWidth, originalImageData.naturalHeight);
      ctx.restore();
    } else {
      ctx.drawImage(img, imageX, imageY, originalImageData.naturalWidth, originalImageData.naturalHeight);
    }
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    
    // Add signature text if provided
    if (signatureText) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.font = '24px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(signatureText, frameWidth - 20, frameHeight - 20);
    }
    
    // Download the image
    const link = document.createElement('a');
    link.download = 'addbackground-image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    // Track download
    fetch('track_download.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'download',
            timestamp: new Date().toISOString()
        })
    }).catch(error => {
        console.log('Download tracking failed:', error);
    });
  };
  
  img.src = originalImageData.src;
} 