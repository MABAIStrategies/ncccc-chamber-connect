# NCCCC Chamber Connect

A streamlined web application built for the New Castle County Chamber of Commerce (NCCCC) community to facilitate member discovery, networking, and direct engagement.

---

## ⚡ Overview

**NCCCC Chamber Connect** serves as a lightweight, interactive portal for chamber members and attendees. Built as a serverless single-page interface, it connects directly to a live Google Sheets backend via Google Apps Script to provide real-time updates without heavy database infrastructure.

- **Frontend:** Responsive HTML5 / CSS3 / Modern JavaScript
- **Backend / Database:** Google Sheets via Google Apps Script Web App API
- **Deployment:** GitHub Pages

---

## 🚀 Key Features

- **Member & Attendee Directory:** Dynamic filtering and searchable listings.
- **Real-Time Data Sync:** Direct two-way sync with Google Sheets (GET/POST) for instant updates.
- **Zero-Maintenance Hosting:** Completely static frontend hosted via GitHub Pages with no container management or paid backend hosting needed.
- **Mobile-Responsive:** Optimized for quick access during live chamber networking events and meetings.

---

## 🛠️️ Architecture & Setup

### 1. Google Sheets Backend (Apps Script)

1. Open your target Google Sheet.
2. Navigate to **Extensions** > **Apps Script**.
3. Deploy the script as a **Web App**:
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
4. Copy the deployment URL (`https://script.google.com/macros/s/.../exec`).

### 2. Frontend Configuration

1. In your local HTML file (`chamberconnect.html` or `index.html`), configure the API endpoint:
   ```javascript
   const SCRIPT_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL";
