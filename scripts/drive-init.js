// Google Drive & Sheets API Integration for Manhagko
// Enables shared contributions across all students

const GOOGLE_CONFIG = {
    apiKey: 'AIzaSyDqzPbmppAedZQ5NDtjoqirl_fIqY4bttU',
    clientId: '219118335002-0lghfcjvji9a2e2h6sl8n1subse98dlq.apps.googleusercontent.com',
    sheetId: '1ZelbflNOHGWDfDfjBtHNdBwXqYXWG29wkTBv_dVfAOs',
    discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
    ],
    scopes: 'openid email profile https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets'
};

let gapiInited = false;
let gisInited = false;
let tokenClient = null;
let currentUser = null;
let accessToken = null;

// Load Google API scripts
function loadGoogleScripts() {
    return new Promise((resolve, reject) => {
        // Load GAPI
        const script1 = document.createElement('script');
        script1.src = "https://apis.google.com/js/api.js";
        script1.onload = () => {
            gapi.load('client', async () => {
                try {
                    await gapi.client.init({
                        apiKey: GOOGLE_CONFIG.apiKey,
                        discoveryDocs: GOOGLE_CONFIG.discoveryDocs,
                    });
                    gapiInited = true;
                    console.log('GAPI initialized');
                    checkReady(resolve);
                } catch (err) {
                    console.error('GAPI init error:', err);
                    gapiInited = true; // Continue anyway
                    checkReady(resolve);
                }
            });
        };
        script1.onerror = () => {
            console.error('Failed to load GAPI');
            reject(new Error('Failed to load Google API'));
        };
        document.body.appendChild(script1);

        // Load GIS (Google Identity Services)
        const script2 = document.createElement('script');
        script2.src = "https://accounts.google.com/gsi/client";
        script2.onload = () => {
            try {
                tokenClient = google.accounts.oauth2.initTokenClient({
                    client_id: GOOGLE_CONFIG.clientId,
                    scope: GOOGLE_CONFIG.scopes,
                    callback: () => { } // Set later
                });
                gisInited = true;
                console.log('GIS initialized');
                checkReady(resolve);
            } catch (err) {
                console.error('GIS init error:', err);
                gisInited = true;
                checkReady(resolve);
            }
        };
        script2.onerror = () => {
            console.error('Failed to load GIS');
            reject(new Error('Failed to load Google Identity Services'));
        };
        document.body.appendChild(script2);
    });
}

const SESSION_KEY = 'manhagko_session';

function checkReady(resolve) {
    if (gapiInited && gisInited) {
        console.log('Google APIs ready');
        // Try to restore session
        attemptRestoreSession();
        resolve();
    }
}

// Restore session from localStorage
function attemptRestoreSession() {
    try {
        const stored = localStorage.getItem(SESSION_KEY);
        if (stored) {
            const session = JSON.parse(stored);
            // Check if token is likely still valid (approx check, 50 mins)
            const now = Date.now();
            if (now - session.timestamp < 50 * 60 * 1000) {
                accessToken = session.token;
                currentUser = session.user;
                gapi.client.setToken({ access_token: accessToken });
                console.log('Session restored for:', currentUser.email);
            } else {
                localStorage.removeItem(SESSION_KEY); // Expired
            }
        }
    } catch (e) {
        console.error('Session restore failed:', e);
        localStorage.removeItem(SESSION_KEY);
    }
}

// Save session to localStorage
function saveSession(token, user) {
    const session = {
        token: token,
        user: user,
        timestamp: Date.now()
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

// Get user info from Google
async function fetchUserInfo(token) {
    try {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { 'Authorization': 'Bearer ' + token }
        });
        if (response.ok) {
            const data = await response.json();
            currentUser = {
                email: data.email,
                name: data.name || data.email.split('@')[0],
                picture: data.picture
            };
            console.log('User loaded:', currentUser.email);
            saveSession(token, currentUser); // Save after fetching
            return currentUser;
        }
    } catch (e) {
        console.error('Failed to fetch user info:', e);
    }
    return null;
}

// Request access token (triggers login popup)
function requestAccessToken() {
    return new Promise((resolve, reject) => {
        if (!tokenClient) {
            reject(new Error('خطأ: لم يتم تهيئة Google API بعد. أعد تحميل الصفحة.'));
            return;
        }

        // Check if we already have a valid token (restored or memory)
        if (accessToken && currentUser) {
            resolve({ access_token: accessToken });
            return;
        }

        const existingToken = gapi.client.getToken();
        if (existingToken && existingToken.access_token) {
            accessToken = existingToken.access_token;
            if (!currentUser) {
                fetchUserInfo(accessToken).then(() => {
                    resolve({ access_token: accessToken });
                });
            } else {
                resolve({ access_token: accessToken });
            }
            return;
        }

        // Need to request new token
        tokenClient.callback = async (response) => {
            if (response.error) {
                console.error('Token error:', response);
                reject(new Error('فشل تسجيل الدخول: ' + (response.error_description || response.error)));
                return;
            }

            accessToken = response.access_token;
            gapi.client.setToken({ access_token: accessToken });

            // Fetch user info
            await fetchUserInfo(accessToken);

            if (!currentUser) {
                currentUser = { email: 'anonymous@user.com', name: 'مستخدم' };
            }

            saveSession(accessToken, currentUser); // Save new session

            resolve(response);
        };

        tokenClient.error_callback = (error) => {
            console.error('Token error callback:', error);
            reject(new Error('فشل تسجيل الدخول. تأكد من السماح بالنوافذ المنبثقة.'));
        };

        // Request token with popup
        try {
            tokenClient.requestAccessToken({ prompt: '' });
        } catch (e) {
            console.error('Request token error:', e);
            reject(new Error('فشل فتح نافذة تسجيل الدخول'));
        }
    });
}

// Get current user
function getCurrentUser() {
    return currentUser;
}

// Check if user is signed in
function isSignedIn() {
    return accessToken !== null && currentUser !== null;
}

// Sign Out
function signOut() {
    accessToken = null;
    currentUser = null;
    localStorage.removeItem(SESSION_KEY);
    gapi.client.setToken(null);
    console.log('Signed out');
}

// Upload file to Drive
// Upload file to Drive with progress support
async function uploadFileToDrive(file, onProgress) {
    if (!accessToken) {
        await requestAccessToken();
    }

    const metadata = {
        'name': file.name,
        'mimeType': file.type || 'application/octet-stream'
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink,webContentLink,name');
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);

        if (onProgress) {
            xhr.upload.onprogress = (e) => {
                if (e.lengthComputable) {
                    const percent = Math.round((e.loaded / e.total) * 100);
                    onProgress(percent);
                }
            };
        }

        xhr.onload = async () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const data = JSON.parse(xhr.responseText);

                    // Make file public
                    try {
                        await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}/permissions`, {
                            method: 'POST',
                            headers: {
                                'Authorization': 'Bearer ' + accessToken,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ role: 'reader', type: 'anyone' })
                        });
                    } catch (permError) {
                        console.warn('Could not make file public:', permError);
                    }

                    resolve(data);
                } catch (e) {
                    reject(new Error('Invalid JSON response'));
                }
            } else {
                try {
                    const error = JSON.parse(xhr.responseText);
                    reject(new Error(error.error?.message || 'Upload failed'));
                } catch (e) {
                    reject(new Error('Upload failed with status ' + xhr.status));
                }
            }
        };

        xhr.onerror = () => reject(new Error('Network error during upload'));

        xhr.send(form);
    });
}

// ============ GOOGLE SHEETS OPERATIONS ============

// Append contribution to Sheet
async function addContributionToSheet(contribution) {
    if (!accessToken) {
        await requestAccessToken();
    }

    const values = [[
        contribution.id,
        contribution.ownerEmail,
        contribution.name,
        contribution.subject,
        contribution.type,
        contribution.url || contribution.link,
        contribution.fileName || '',
        contribution.description || '',
        contribution.date
    ]];

    // Use A1 notation without sheet name - defaults to first sheet
    const range = encodeURIComponent('A1');
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_CONFIG.sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values })
    });

    const result = await response.json();

    if (result.error) {
        console.error('Sheet append error:', result.error);
        throw new Error('فشل حفظ المساهمة: ' + (result.error.message || 'خطأ غير معروف'));
    }

    return result;
}

// Get all contributions from Sheet (public read)
async function getContributionsFromSheet() {
    // Use A:I without sheet name - defaults to first sheet
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_CONFIG.sheetId}/values/A:I?key=${GOOGLE_CONFIG.apiKey}`;

    const response = await fetch(url);
    const result = await response.json();

    if (result.error) {
        console.error('Sheet read error:', result.error);
        throw new Error('فشل تحميل المساهمات');
    }

    const rows = result.values || [];
    const contributions = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        // Skip header row
        if (i === 0 && (row[0] === 'ID' || row[0] === 'id')) continue;
        // Skip empty rows
        if (!row[0]) continue;

        contributions.push({
            id: row[0],
            ownerEmail: row[1],
            name: row[2] || 'مجهول',
            subject: row[3],
            type: row[4],
            url: row[5],
            fileName: row[6],
            description: row[7],
            date: row[8],
            rowIndex: i + 1
        });
    }

    return contributions;
}

// Delete contribution from Sheet (owner only)
async function deleteContributionFromSheet(contributionId, ownerEmail) {
    if (!accessToken) {
        await requestAccessToken();
    }

    // Verify ownership
    if (!currentUser || currentUser.email !== ownerEmail) {
        throw new Error('غير مسموح: لا يمكنك حذف مساهمات الآخرين');
    }

    // Find the row
    const contributions = await getContributionsFromSheet();
    const contribution = contributions.find(c => c.id === contributionId);

    if (!contribution) {
        throw new Error('المساهمة غير موجودة');
    }

    // Clear the row (use A:I notation without sheet name)
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_CONFIG.sheetId}/values/A${contribution.rowIndex}:I${contribution.rowIndex}:clear`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        }
    });

    const result = await response.json();

    if (result.error) {
        throw new Error('فشل حذف المساهمة');
    }

    return true;
}

// Auto-load on page load
document.addEventListener('DOMContentLoaded', () => {
    loadGoogleScripts().catch(err => {
        console.error('Failed to load Google scripts:', err);
    });
});

// Export for use
window.ManhagkoGoogle = {
    requestAccessToken,
    getCurrentUser,
    isSignedIn,
    uploadFileToDrive,
    addContributionToSheet,
    getContributionsFromSheet,
    deleteContributionFromSheet,
    GOOGLE_CONFIG
};
