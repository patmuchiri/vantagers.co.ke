from app import create_app

# Initialize the Flask app using the create_app() function
app = create_app()


if __name__ == '__main__':
    app.run(debug=True)

