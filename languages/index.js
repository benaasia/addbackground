// Language management system
const languages = {
  en: en,
  vi: vi
};

let currentLanguage = 'en';

// Detect browser language
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map browser language codes to our supported languages
  const languageMap = {
    'vi': 'vi',
    'vn': 'vi',
    'en': 'en',
    'us': 'en',
    'gb': 'en'
  };
  
  return languageMap[langCode] || 'en';
}

function changeLanguage(lang) {
  if (!languages[lang]) {
    console.warn(`Language '${lang}' not supported`);
    return;
  }
  
  currentLanguage = lang;
  updateUILanguage();
  updateLanguageButtons();
  localStorage.setItem('addbackground_language', lang);
}

function updateUILanguage() {
  const lang = languages[currentLanguage];
  
  // Update title
  document.title = lang.title;
  
  // Update meta tags
  const metaDesc = document.querySelector('meta[name="description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaDesc) metaDesc.setAttribute('content', lang.description);
  if (metaKeywords) metaKeywords.setAttribute('content', lang.keywords);
  
  // Update UI elements
  const uploadTitle = document.querySelector('.upload-box h3');
  const uploadText = document.querySelector('.upload-box p');
  const uploadBtn = document.querySelector('.upload-btn');
  
  if (uploadTitle) uploadTitle.innerHTML = lang.createAmazingImages;
  if (uploadText) uploadText.innerHTML = lang.dragDropText;
  if (uploadBtn) uploadBtn.innerHTML = lang.chooseImage;
  
  // Update controls
  const roundedLabel = document.querySelector('label[for="rounded"]');
  const paddingLabel = document.querySelector('label[for="padding"]');
  const shadowLabel = document.querySelector('label[for="shadow"]');
  const signatureLabel = document.querySelector('label[for="signature"]');
  const signatureInput = document.querySelector('#signature');
  
  if (roundedLabel) roundedLabel.innerHTML = lang.rounded + ' <span class="value-display" id="roundedValue">80px</span>';
  if (paddingLabel) paddingLabel.innerHTML = lang.padding + ' <span class="value-display" id="paddingValue">300px</span>';
  if (shadowLabel) shadowLabel.innerHTML = lang.shadow + ' <span class="value-display" id="shadowValue">100</span>';
  if (signatureLabel) signatureLabel.innerHTML = lang.signature;
  if (signatureInput) {
    signatureInput.placeholder = lang.signaturePlaceholder;
    // Update default signature value if it's empty or still has the old default
    if (!signatureInput.value.trim() || signatureInput.value === 'AddBackground.net' || signatureInput.value === 'AddBackground.net') {
      signatureInput.value = lang.defaultSignature;
      // Update signature text display
      const signatureText = document.getElementById('signatureText');
      if (signatureText) {
        signatureText.textContent = lang.defaultSignature;
        signatureText.style.display = 'block';
        signatureText.style.visibility = 'visible';
      }
    }
  }
  
  // Update download button
  const downloadBtn = document.querySelector('#downloadBtn');
  if (downloadBtn) downloadBtn.innerHTML = lang.download;
  
  // Update footer
  const madeBy = document.querySelector('.made-by');
  if (madeBy) madeBy.textContent = lang.madeBy;
  
  // Update social links titles
  const facebookLink = document.querySelector('a[title="Facebook"]');
  const youtubeLink = document.querySelector('a[title="YouTube"]');
  const websiteLink = document.querySelector('a[title="My Website"]');
  
  if (facebookLink) facebookLink.title = lang.facebook;
  if (youtubeLink) youtubeLink.title = lang.youtube;
  if (websiteLink) websiteLink.title = lang.website;
  
  // Update language switcher buttons
  updateLanguageSwitcherButtons();
}

function updateLanguageSwitcherButtons() {
  // Update button content
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const langCode = btn.id.replace('lang-', '');
    const flagImg = btn.querySelector('.flag');
    
    if (languages[langCode]) {
      if (flagImg && flagImg.tagName === 'IMG') {
        flagImg.src = languages[langCode].flag;
        flagImg.alt = langCode === 'en' ? 'English' : 'Tiếng Việt';
      }
    }
  });
}

function updateLanguageButtons() {
  // Remove active class from all buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to current language button
  const activeBtn = document.getElementById(`lang-${currentLanguage}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

function initLanguage() {
  // Check localStorage first
  const savedLang = localStorage.getItem('addbackground_language');
  
  if (savedLang && languages[savedLang]) {
    currentLanguage = savedLang;
  } else {
    // Use browser language as default
    currentLanguage = detectBrowserLanguage();
  }
  
  updateUILanguage();
}

// Export functions for global use
window.changeLanguage = changeLanguage;
window.initLanguage = initLanguage;
window.updateLanguageButtons = updateLanguageButtons; 