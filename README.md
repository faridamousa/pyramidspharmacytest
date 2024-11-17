# **Pyramids Pharmacy Test**
Pyramids Pharmacy Test is a web application that allows patients to view medicines and make refill requests while enabling pharmacists to add new medicines and analyze refill requests through a bar chart visualization.

---
## **Summary**
This web application facilitates:

- **Patients:** Viewing medicines, making refill requests.
- **Pharmacists:** Adding new medicines and analyzing refill requests.
---
## **Technologies and Frameworks Used**
The project is built using the following technologies:

- **Backend**: Django and Django Rest Framework for a robust server-side architecture.

- **Frontend**: React for a dynamic and responsive user interface.

- **HTTP Communication**: Axios library for seamless communication between frontend and backend.

- **Routing**: React Router for a smooth single-page application experience.


---
## **Features**
- **User Registration and Login**: Secure authentication for both patients and pharmacists.

- **Add New Medicines**: Pharmacists can add medicines to the system.

- **View Medicines**: Patients and pharmacists can browse available medicines.

- **Refill Requests**: Patients can request refills for medicines.

- **Refill Statistics**: Pharmacists can visualize refill request counts using a bar chart.


---
## **Installation**
**Prerequisites**
- **Python:** You can download it [here](https://www.python.org/downloads/)

- **Django:**
  Install it by writting in terminal:
  `py -m pip install Django==5.1.3`

- **PostgreSQL:** You can download it [here](https://www.postgresql.org/download/)

- **Node.js and npm:** You can download it [here](https://nodejs.org/en)

- **Git:** You can download it [here](https://git-scm.com/)


## **Clone the Repository**

`git clone [<repository-url>](https://github.com/faridamousa/pyramidspharmacytest)`

cd pyramidspharmacytest
Backend Setup

Navigate to the backend folder:
bash
Copy code
cd backend
Run the server:
bash
Copy code
python manage.py runserver
Frontend Setup

Navigate to the frontend folder:
bash
Copy code
cd ../frontend
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
How to Use
Patient
Registration: Sign up using the provided registration form.
Login: Use your credentials to log in.
Dashboard: View all available medicines and make refill requests.
Refill Requests: Submit refill requests for your medications.
Pharmacist
Registration: Sign up using the provided registration form.
Login: Use your credentials to log in.
Dashboard: Access a list of all medicines and refill requests.
Add Medicines: Add new medicines to the system.
Refill Statistics: View refill requests per medicine using a bar chart.
