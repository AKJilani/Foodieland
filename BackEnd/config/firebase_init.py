import firebase_admin
from firebase_admin import credentials, auth
import os
import json

if not firebase_admin._apps:
    firebase_creds = os.environ.get('FIREBASE_CREDENTIALS')
    if firebase_creds:
        # Production (Render): environment variable
        cred_dict = json.loads(firebase_creds)
        cred = credentials.Certificate(cred_dict)
    else:
        # Local: file-based credentials
        FIREBASE_CRED_PATH = os.path.join(os.path.dirname(__file__), 'firebase_service_account.json')
        cred = credentials.Certificate(FIREBASE_CRED_PATH)

    default_app = firebase_admin.initialize_app(cred, {
        'authDomain': 'foodieland-3fd9e.firebaseapp.com',
    })