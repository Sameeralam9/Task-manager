## 📋 Modern Task Manager

A sleek, responsive task management application built with React that helps
you organize your daily tasks with priority levels, due dates, and smart filtering options.

# ✨ Features

🎯 Core Functionality

Add, Edit & Delete Tasks - Full CRUD operations with intuitive interface
Task Completion - Toggle tasks between active and completed states
Priority Management - Assign High, Medium, or Low priority to tasks
Due Date Tracking - Set deadlines with visual alerts for overdue tasks
Smart Filtering - View All, Active, or Completed tasks
Bulk Actions - Clear all completed tasks at once

# 🎨 User Experience

Responsive Design - Works seamlessly on desktop, tablet, and mobile
Visual Priority Indicators - Color-coded priority badges
Due Date Alerts - Automatic warnings for overdue and upcoming tasks
Toast Notifications - Real-time feedback for all actions
Persistent Storage - Your tasks are saved locally and persist between sessions
Auto-Focus - Smart input focusing for better user experience

# 🚀 Technical Features

React Hooks - Modern state management with useState and useEffect
Local Storage - Automatic data persistence
Smart Sorting - Tasks sorted by completion status and priority
Input Validation - Prevents empty task creation with user feedback
Icon Integration - Beautiful Lucide React icons throughout the interface

# 🛠️ Tech Stack

-- Frontend Framework: React 18+
-- Build Tool: Vite
-- Styling: Tailwind CSS
-- Icons: Lucide React
-- Notifications: React Hot Toast
-- Storage: Browser LocalStorage API

# 🚀 Getting Started Prerequisites

Node.js (v16 or higher)
npm or yarn package manager

# Installation

Clone the repository
bashgit clone https://github.com/Sameeralam9/Task-manager.git
cd modern-task-manager

Install dependencies
bashnpm install

 or

yarn install

Start the development server
bashnpm run dev

 or

yarn dev

Open your browser
Navigate to http://localhost:5173 to view the application

Build for Production
bashnpm run build

 or

yarn build

# [📖 Usage Guide]

Adding Tasks

Click the "Add New Task" button
Enter your task description
Select priority level (Low/Medium/High)
Set an optional due date
Click "Add Task"

# Managing Tasks

Complete Task: Click the circle icon next to any task
Edit Task: Click the edit icon (pencil) to modify task details
Delete Task: Click the trash icon to remove a task
Filter Tasks: Use the All/Active/Completed tabs to filter your view

# Priority System

-- 🔴 High Priority: Red badge - Urgent tasks that need immediate attention
-- 🟡 Medium Priority: Orange badge - Important tasks with moderate urgency
-- 🔵 Low Priority: Blue badge - Tasks that can be done when time permits

# Due Date Alerts

🚨 Overdue: Red alert badge for tasks past their due date
⚠️ Due Soon: Orange alert badge for tasks due within 2 days
📅 Future: Gray badge for tasks with future due dates

📱 Responsive Design
The application is fully responsive and optimized for:

📱 Mobile (320px+): Streamlined interface with touch-friendly buttons
📊 Tablet (768px+): Balanced layout with comfortable spacing
💻 Desktop (1024px+): Full-featured interface with optimal use of screen space

# [🎨 UI Components]

-- InputForm Component

Dynamic form that handles both adding new tasks and editing existing ones
Includes validation, priority selection, and date picker
Responsive design with mobile-optimized inputs

-- Button Component

Reusable button component with customizable styling
Supports different color themes and padding options

-- Holder Component

Main task list container with sorting and filtering logic
Handles inline editing and task status management

# [💾 Data Persistence]

-- Tasks are automatically saved to browser's localStorage, ensuring:

Tasks persist between browser sessions
No data loss on page refresh
Works offline without internet connection
Tab preferences are remembered
