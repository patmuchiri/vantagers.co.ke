from flask import Flask, render_template, request

# Initialize the Flask app
app = Flask(__name__)

# Home Route
@app.route('/')
def home():
    return render_template('home.html')

# About Route
@app.route('/about')
def about():
    return render_template('about.html')

# Services Route
@app.route('/services')
def services():
    return render_template('services.html')

# Contact Route
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Submit Inquiry Route (Handles POST requests)
@app.route('/submit-inquiry', methods=['POST'])
def submit_inquiry():
    # Retrieve form data
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    # For now, just return a simple response (you can expand this later)
    return f"Thank you for your inquiry, {name}! We will get back to you soon."

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
