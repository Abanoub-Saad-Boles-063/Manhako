"""
Manhagko Contributions Backend
Flask server for handling file uploads and contributions storage
"""

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import json
from datetime import datetime
import uuid

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Configuration
UPLOAD_FOLDER = 'uploads'
CONTRIBUTIONS_FILE = 'contributions.json'

# Ensure directories exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def load_contributions():
    """Load contributions from JSON file"""
    if os.path.exists(CONTRIBUTIONS_FILE):
        with open(CONTRIBUTIONS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def save_contributions(contributions):
    """Save contributions to JSON file"""
    with open(CONTRIBUTIONS_FILE, 'w', encoding='utf-8') as f:
        json.dump(contributions, f, ensure_ascii=False, indent=2)

@app.route('/')
def index():
    """Serve main page"""
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    """Serve static files"""
    return send_from_directory('.', path)

@app.route('/api/contributions', methods=['GET'])
def get_contributions():
    """Get all contributions"""
    contributions = load_contributions()
    return jsonify(contributions)

@app.route('/api/contributions', methods=['POST'])
def add_contribution():
    """Add a new contribution"""
    try:
        # Get form data
        name = request.form.get('name', 'مجهول')
        subject = request.form.get('subject', 'general')
        description = request.form.get('description', '')
        contribution_type = request.form.get('type', 'link')
        link = request.form.get('link', '')
        
        contribution = {
            'id': str(uuid.uuid4()),
            'name': name,
            'subject': subject,
            'description': description,
            'type': contribution_type,
            'date': datetime.now().strftime('%Y-%m-%d %H:%M')
        }
        
        # Handle file upload
        if contribution_type == 'file' and 'file' in request.files:
            file = request.files['file']
            if file.filename:
                # Generate unique filename
                ext = os.path.splitext(file.filename)[1]
                filename = f"{uuid.uuid4()}{ext}"
                filepath = os.path.join(UPLOAD_FOLDER, filename)
                file.save(filepath)
                contribution['fileName'] = file.filename
                contribution['filePath'] = f"uploads/{filename}"
        else:
            contribution['link'] = link
        
        # Save to contributions
        contributions = load_contributions()
        contributions.insert(0, contribution)  # Add to beginning
        save_contributions(contributions)
        
        return jsonify({'success': True, 'contribution': contribution})
    
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/contributions/<contribution_id>', methods=['DELETE'])
def delete_contribution(contribution_id):
    """Delete a contribution"""
    contributions = load_contributions()
    contributions = [c for c in contributions if c['id'] != contribution_id]
    save_contributions(contributions)
    return jsonify({'success': True})

@app.route('/uploads/<filename>')
def serve_upload(filename):
    """Serve uploaded files"""
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    print("=" * 50)
    print("🎓 منهجكو - Manhagko Educational Platform")
    print("=" * 50)
    print("Server running at: http://localhost:5000")
    print("Press Ctrl+C to stop")
    print("=" * 50)
    app.run(debug=True, port=5000)
