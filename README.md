# 💼 Job Recruitment Management System

A modern web application built with **React + TypeScript + Vite**, designed to manage the recruitment process, companies, and candidates.

## 📋 Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Demo Accounts](#demo-accounts)
- [Project Structure](#project-structure)

---

## 🎯 Introduction

The recruitment management system is a comprehensive platform for companies and recruiters to:
- 📝 Post job openings
- 👥 Manage candidates and resumes
- 🏢 Manage company information
- 🔐 Manage user roles and permissions
- 📊 View statistics dashboards

---

## ✨ Key Features

### 👤 For Candidates (Client)
- **Home Page**: View featured jobs and top companies
- **Job Search**: Search and filter jobs by skills, location, salary
- **Job Details**: View detailed job information and apply
- **Company List**: Browse the list of companies and their details
- **Profile Management**: Manage your personal profile

### 🛠️ For Administrators (Admin)
- **Dashboard**: View overall system statistics
- **Company Management**:
  - Add, edit, delete companies
  - Manage logos and detailed information
- **Job Management**:
  - Post new job openings
  - Edit, delete, activate/deactivate jobs
  - Manage required skills
- **User Management**:
  - Add, edit, delete accounts
  - Assign roles and companies
- **Resume Management**:
  - View candidate resumes
  - Update resume status
  - View status update history
- **Role Management**:
  - Create new roles
  - Assign permissions to each role
- **Permission Management**:
  - Manage modules and CRUD permissions

---

## 💻 System Requirements

- **Node.js**: v14.0 or higher
- **npm**: v6.0 or higher, or **yarn**
- **Backend**: NestJS API running on `https://react-learning-lime.vercel.app/` (as configured in `.env.development`)

---

## 📖 Usage Guide

### 🔑 Login

1. Go to **https://react-learning-lime.vercel.app/login**
2. Enter your **Email** (used as the username)
3. Enter your **Password**
4. Click **Login**

### 🏠 Candidate Home Page
- View featured jobs and companies
- Use the search bar to find jobs
- Click on a job to view details and apply

### 🔍 Job Search
- **Path**: `/job`
- Search by: job title, skills, location, salary
- Browse the paginated job list
- Click on a job to view details

### 🏢 Company List
- **Path**: `/company`
- View company information and their currently open positions

### 👨‍💼 Admin Area
- **Path**: `/admin`
- Accessible only to users with admin permissions
- Users without permission are redirected to a "Not Permitted" page

#### 📊 Dashboard
- View overall statistics
- View key metrics on jobs, candidates, and companies

#### 🏢 Company Management (`/admin/company`)
- **Add**: Click "Add New", fill in the details, upload a logo
- **Edit**: Click the edit icon, update the information
- **Delete**: Click the delete icon to remove a company
- View the full list of companies

#### 👔 Job Management (`/admin/job`)
- **View List**: List of all jobs
- **Add New**: `/admin/job/upsert` — Create a new job
  - Enter the job title
  - Select the company
  - Enter the work location
  - Enter the salary
  - Select the level (Junior, Middle, Senior, etc.)
  - Add required skills
  - Enter a detailed description
  - Select start and end dates
- **Edit**: Click the edit icon to modify
- **Delete**: Click the delete icon to remove the job

#### 👥 User Management (`/admin/user`)
- View the list of all users
- **Add User**:
  - Enter email (used as the username)
  - Enter password
  - Enter name, age, gender
  - Enter address
  - Select role
  - Select company
- **Edit**: Update user information
- **Delete**: Remove a user account

#### 📄 Candidate Resume Management (`/admin/resume`)
- View the list of submitted resumes
- **Update Status**:
  - Click on a resume to view details
  - Update status: Pending, Approved, Rejected, etc.
  - View the status update history

#### 🔐 Role Management (`/admin/role`)
- View the list of available roles (Admin, HR, User, etc.)
- **Add Role**:
  - Enter the role name
  - Enter a description
  - Select the status (Active/Inactive)
- **Assign Permissions**:
  - Click "Assign Permissions" or the permissions icon
  - Select modules: Companies, Jobs, Users, Resumes, Roles, Permissions
  - Select permissions for each module: GET, POST, PATCH, DELETE
  - Save the permissions

#### 🔒 Permission Management (`/admin/permission`)
- View the list of all permissions
- Each permission includes:
  - **Module**: Data type (Companies, Jobs, Users, etc.)
  - **Method**: GET, POST, PATCH, DELETE
  - **API Path**: The API route

---

## 🔐 Demo Accounts

The system provides demo accounts for testing:

| Email | Role | Password | Function |
|-------|------|----------|----------|
| `admin@gmail.com` | Admin | `123456` | Full access (admin panel) |
| `hr@gmail.com` | HR Manager | `123456` | Manage jobs, candidates, HR |
| `user@gmail.com` | User | `123456` | Candidate — search and apply for jobs |
| `abc@gmail.com` | User | `123456` | Candidate — search and apply for jobs |

### Login Instructions
1. Go to: **https://react-learning-lime.vercel.app/login**
2. Enter the email (e.g., `admin@gmail.com`)
3. Enter the password: `123456`
4. Click "Login"

### New Account Registration Instructions
1. Go to: **https://react-learning-lime.vercel.app/register**
2. Enter the information:
   - Full name
   - Email (will be used as the username)
   - Password
   - Age, Gender, Address
3. Click "Register"
4. Use the new account to log in

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── admin/          # Components for the admin panel
│   │   ├── company/    # Company management
│   │   ├── job/        # Job management
│   │   ├── user/       # User management
│   │   ├── resume/     # Resume management
│   │   ├── role/       # Role management
│   │   └── permission/ # Permission management
│   ├── client/         # Components for the client side
│   │   ├── card/       # Job and company cards
│   │   ├── data-table/ # Data tables
│   │   └── modal/      # Application and account management modals
│   └── share/          # Shared components
├── config/             # Configuration (API, permissions)
│   ├── api.ts         # API call functions
│   └── permissions.ts # Permission definitions
├── pages/              # Pages
│   ├── admin/         # Admin pages
│   ├── auth/          # Login/register pages
│   ├── home/          # Home page
│   ├── job/           # Job pages
│   └── company/       # Company pages
├── redux/              # State management (Redux Toolkit)
│   ├── slice/         # Redux slices
│   ├── hooks.ts       # Custom hooks
│   └── store.ts       # Redux store
├── styles/             # SCSS stylesheets
│   ├── admin.module.scss
│   ├── app.module.scss
│   ├── auth.module.scss
│   ├── client.module.scss
│   └── reset.scss
└── types/              # TypeScript definitions
    ├── backend.d.ts   # Interfaces from the backend
    └── file.d.ts      # Interfaces for file uploads
```

---

## 🔧 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Language**: TypeScript 5.3.3
- **Build Tool**: Vite 4.2.0
- **UI Library**: Ant Design 5.13.1, Ant Design Pro Components
- **State Management**: Redux Toolkit 1.9.3
- **HTTP Client**: Axios 1.6.5
- **Routing**: React Router 6.11.2
- **Styling**: SCSS, Ant Design CSS-in-JS
- **Date Handling**: Day.js 1.11.8
- **Others**: React Icons, React Quill (Editor), React Spinners

---

## 📱 Responsive Design

- ✅ Fully supported on desktop
- ✅ Optimized for tablet
- ✅ Mobile-friendly

---

## 🔐 Security

- **Token-based Authentication**: JWT access token stored in localStorage
- **Role-based Access Control (RBAC)**: Access control based on user role
- **Protected Routes**: Admin routes are protected via ProtectedRoute
- **Permission Checking**: Detailed permission checks per API

---

## 📝 Notes

- The backend API needs to run on `https://react-learning-lime.vercel.app/` (can be changed in `.env`)
- The app automatically reloads on file changes (Hot Module Replacement)
- The token is stored in `localStorage` and will be lost when browser data is cleared

---
