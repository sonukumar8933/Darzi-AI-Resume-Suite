from flask import Flask, request, render_template_string
from datetime import datetime

app = Flask(__name__)

# Basic template for interactive form
form_html = '''
<!doctype html>
<title>Resume Builder</title>
<h2>Fill Your Details</h2>
<form method="POST" action="/submit">
  Full Name: <input type="text" name="name" required><br><br>
  Email: <input type="email" name="email" required><br><br>
  Phone: <input type="text" name="phone" required><br><br>
  Education: <input type="text" name="education" required><br><br>
  Skills: <input type="text" name="skills" required><br><br>
  Projects/Internships: <input type="text" name="projects"><br><br>
  Aspirations: <input type="text" name="aspiration"><br><br>
  <input type="submit" value="Generate Resume">
</form>
'''

# Skill suggestion bank (basic version)
skill_map = {
    "data analyst": ["SQL", "Excel", "Tableau", "Power BI"],
    "web developer": ["HTML", "CSS", "JavaScript", "React"],
    "cybersecurity": ["Wireshark", "Kali Linux", "Burp Suite", "Nmap"],
    "data scientist": ["Python", "Pandas", "Scikit-learn", "Jupyter", "ML"]
}

@app.route("/", methods=["GET"])
def index():
    return render_template_string(form_html)

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form["name"]
    email = request.form["email"]
    phone = request.form["phone"]
    education = request.form["education"]
    skills = request.form["skills"]
    projects = request.form["projects"]
    aspiration = request.form["aspiration"].lower()

    # Skill suggestions
    suggestions = []
    for key in skill_map:
        if key in aspiration:
            suggestions = skill_map[key]
            break

    # Simple HTML Output (later: convert this to PDF)
    return render_template_string(f"""
    <h2>Resume Summary</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Education:</strong> {education}</p>
    <p><strong>Skills:</strong> {skills}</p>
    <p><strong>Projects/Internships:</strong> {projects}</p>
    <p><strong>Aspiration:</strong> {aspiration}</p>
    <h3>💡 Skill Suggestions for You:</h3>
    <ul>
        {''.join(f"<li>{s}</li>" for s in suggestions)}
    </ul>
    """)
    
if __name__ == "__main__":
    app.run(debug=True)
