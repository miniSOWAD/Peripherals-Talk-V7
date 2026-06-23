![banner](https://capsule-render.vercel.app/api?type=waving&height=250&color=0:00c6ff,100:0072ff&text=Peripherals_Talk&fontSize=60&fontAlign=50&fontAlignY=40&animation=fadeIn&desc=Next%20Generation%20Healthcare%20Platform&descAlignY=60)

![typing](https://readme-typing-svg.herokuapp.com?font=Orbitron&size=24&duration=3000&color=22C55E&center=true&vCenter=true&width=900&lines=Professor+Scholar+Lecturer+Students+Platform;Built+with+Next.js+Node.js+MongoDB)

---

### 🌐 Live Demo
### https://flourishing-kangaroo-877ddd.netlify.app/

For the code contact me or inbox me

------------------------------------------------------------------------

# 🧠 Platform Overview

**DOCTORcheap** is a futuristic healthcare ecosystem connecting:

-   👨‍⚕️ Doctors
-   💊 Pharmacists
-   🏪 Sellers
-   🧑‍💻 Users
-   🛡 Admins

into a single **intelligent healthcare platform**.

The system enables knowledge sharing, medicine management, and secure
medical data access.

------------------------------------------------------------------------

# ⚡ Core Features

## 🔐 Role Based Security

  Role            Capability
  --------------- -------------------------------
  👑 SuperAdmin   Full system control
  🛡 Admin         Manage medical data
  👨‍⚕️ Doctor       Disease & nutrition knowledge
  💊 Pharmacist   Medicine & seller management
  🏪 Seller       Medicine distribution
  👤 User         Health information access

------------------------------------------------------------------------

# 🧭 System Architecture

``` mermaid
flowchart LR
User --> Frontend
Frontend --> API
API --> Auth
API --> MedicineService
API --> DiseaseService
API --> NutritionService
API --> UserService

MedicineService --> MongoDB
DiseaseService --> MongoDB
NutritionService --> MongoDB
UserService --> MongoDB

API --> Cloudinary
```

------------------------------------------------------------------------

# 🏗 Tech Stack

### Frontend

-   Next.js
-   React
-   TailwindCSS
-   Framer Motion
-   TypeScript

### Backend

-   Node.js
-   Express / Modular Architecture
-   JWT Authentication

### Database

-   MongoDB Atlas

### Cloud Storage

-   Cloudinary

------------------------------------------------------------------------

# 🔄 Approval Workflow

``` mermaid
flowchart TD
Register --> Pending
Pending --> SuperAdminReview
SuperAdminReview --> Approved
SuperAdminReview --> Rejected
Approved --> DashboardAccess
Rejected --> AccessDenied
```

Roles requiring approval:

-   Admin
-   Doctor
-   Pharmacist
-   Seller

Required documents:

-   NID image
-   Professional license

------------------------------------------------------------------------

# 🧑‍🤝‍🧑 Role Interaction

``` mermaid
graph TD
SuperAdmin --> Admin
SuperAdmin --> Doctor
SuperAdmin --> Pharmacist
SuperAdmin --> Seller

Admin --> DiseaseDatabase
Admin --> NutritionDatabase

Doctor --> DiseaseDatabase
Doctor --> NutritionDatabase

Pharmacist --> MedicineDatabase
Pharmacist --> SellerManagement

Seller --> MedicineDistribution
User --> MedicalInformation
```

------------------------------------------------------------------------

# 🏥 Doctor Dashboard

Doctors can:

-   Update profile
-   Add diseases
-   Bulk upload diseases via TXT
-   Add nutrition plans
-   Bulk upload nutrition data
-   View medicines
-   Edit medicine usage field

Doctors cannot modify price or composition.

------------------------------------------------------------------------

# 💊 Pharmacist Dashboard

Pharmacists can:

-   Full CRUD for medicines
-   Bulk medicine import
-   Add or edit sellers
-   Add disease records
-   Update profile

Pharmacists **cannot delete sellers**.

------------------------------------------------------------------------

# 🛡 Admin Dashboard

Admins manage platform medical information.

Capabilities:

-   Manage users
-   Manage doctors
-   Manage pharmacists
-   Manage diseases
-   Manage nutrition
-   Edit medicine data

Admins must be **approved by SuperAdmin**.

------------------------------------------------------------------------

# 👑 SuperAdmin Dashboard

SuperAdmin controls the entire system.

Capabilities:

-   Approve accounts
-   Change user roles
-   Delete users
-   Monitor system statistics

------------------------------------------------------------------------

# 💊 Medicine Database

Each medicine stores:

-   Name
-   Generic name
-   Brand
-   Dosage
-   Price
-   Composition
-   Usage
-   Side effects
-   Image
-   Medical PDF

------------------------------------------------------------------------

# ⚡ Bulk Medicine Import

Example TXT format:

    Medicine Name
    Price per piece
    Price per unit
    Composition
    Used for diseases
    Side effects

Each **6 lines = one medicine record**.

------------------------------------------------------------------------

# 🧠 Disease Knowledge

    Disease Name
    Seriousness Level
    Symptoms
    Warning Symptoms
    First Action
    Doctor Type
    Nutrition Link

------------------------------------------------------------------------

# 🍎 Nutrition Data

    Food list
    Food quantities
    Related disease
    Precautions

------------------------------------------------------------------------

# 📂 Project Structure

    DOCTORcheap
    │
    ├── client
    │   ├── app
    │   │   ├── dashboard
    │   │   │   ├── admin
    │   │   │   ├── doctor
    │   │   │   ├── pharmacist
    │   │   │   ├── superadmin
    │   │   │   ├── seller
    │   │   │   └── user
    │   │
    │   ├── components
    │   ├── hooks
    │   ├── services
    │   └── types
    │
    ├── server
    │   ├── controllers
    │   ├── models
    │   ├── routes
    │   ├── middleware
    │   └── seed

------------------------------------------------------------------------

# ⚙ Installation

Clone repository

``` bash
git clone https://github.com/yourusername/DOCTORcheap.git
```

Install dependencies

``` bash
cd client
npm install

cd ../server
npm install
```

Run development

``` bash
npm run dev
```

------------------------------------------------------------------------

# 🌍 Future Vision

-   AI symptom diagnosis
-   Telemedicine consultation
-   Medicine recommendation engine
-   AI medical chatbot
-   Pharmacy inventory integration

------------------------------------------------------------------------

# 👨‍💻 Author

**Md Mahruf Alam**

Software Engineer\
System Architect\
Problem Solver

------------------------------------------------------------------------

⭐ If you like the project, give it a star!
