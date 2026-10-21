/* style.js / style.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    user-select: none;
}

body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #0b0b0b;
    color: #ffffff;
}

/* Latar Belakang Dinamis */
.bg-layer {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-size: cover;
    background-position: center;
    filter: blur(40px) brightness(0.4);
    transform: scale(1.1);
    z-index: 1;
    transition: background-image 1.5s ease-in-out;
}

.glass-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(18, 18, 18, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 2;
}

/* Slideshow Stage */
.slideshow-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.welcome-screen {
    text-align: center;
    padding: 2rem;
    z-index: 10;
}

.welcome-screen h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    letter-spacing: 1px;
}

.welcome-screen p {
    color: #aaaaaa;
    margin-bottom: 2rem;
    font-size: 0.95rem;
}

.btn-primary {
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: white;
    padding: 12px 28px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(255, 126, 95, 0.4);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: inline-block;
}

.btn-primary:active {
    transform: scale(0.95);
}

/* Slide Images dengan Efek Smooth Zoom & Crossfade */
.slide-stage {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-image {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    opacity: 0;
    transform: scale(1.05);
    transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 6s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide-image.active {
    opacity: 1;
    transform: scale(1);
}

/* Kontrol Mengapung (Auto-Hide) */
.controls-bar {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px 20px;
    border-radius: 40px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 10;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.controls-bar.hidden {
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, 20px);
}

.control-btn {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.2rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}

.control-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.control-btn.primary {
    background: rgba(255, 255, 255, 0.25);
    font-size: 1.1rem;
      }
