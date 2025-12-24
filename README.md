# 💼 Hệ Thống Quản Lý Tuyển Dụng (Job Recruitment Management System)

Đây là một ứng dụng web hiện đại xây dựng bằng **React + TypeScript + Vite**, được thiết kế để quản lý quy trình tuyển dụng, công ty, và ứng viên.

## 📋 Mục Lục
- [Giới Thiệu](#giới-thiệu)
- [Tính Năng Chính](#tính-năng-chính)
- [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
- [Cài Đặt](#cài-đặt)
- [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng)
- [Tài Khoản Demo](#tài-khoản-demo)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)

---

## 🎯 Giới Thiệu

Hệ thống quản lý tuyển dụng là một nền tảng toàn diện dành cho các công ty và nhà tuyển dụng để:
- 📝 Đăng tuyển vị trí công việc
- 👥 Quản lý ứng viên và hồ sơ
- 🏢 Quản lý thông tin công ty
- 🔐 Quản lý quyền hạn và vai trò người dùng
- 📊 Xem dashboard thống kê

---

## ✨ Tính Năng Chính

### 👤 Cho Ứng Viên (Client)
- **Trang Chủ**: Xem các công việc nổi bật và công ty hàng đầu
- **Tìm Kiếm Công Việc**: Tìm kiếm, lọc công việc theo kỹ năng, vị trí, lương
- **Chi Tiết Công Việc**: Xem thông tin chi tiết công việc và ứng tuyển
- **Danh Sách Công Ty**: Xem danh sách công ty và thông tin chi tiết
- **Quản Lý Hồ Sơ**: Quản lý hồ sơ cá nhân

### 🛠️ Cho Quản Trị Viên (Admin)
- **Dashboard**: Xem thống kê tổng quan hệ thống
- **Quản Lý Công Ty**: 
  - Thêm, sửa, xóa công ty
  - Quản lý logo và thông tin chi tiết
- **Quản Lý Công Việc**: 
  - Đăng tuyển vị trí mới
  - Sửa, xóa, kích hoạt/vô hiệu hóa công việc
  - Quản lý kỹ năng yêu cầu
- **Quản Lý Người Dùng**: 
  - Thêm, sửa, xóa tài khoản
  - Gán vai trò và công ty
- **Quản Lý Hồ Sơ**: 
  - Xem hồ sơ ứng viên
  - Cập nhật trạng thái hồ sơ
  - Xem lịch sử cập nhật
- **Quản Lý Vai Trò**: 
  - Tạo vai trò mới
  - Gán quyền hạn cho từng vai trò
- **Quản Lý Quyền Hạn**: 
  - Quản lý các module và quyền CRUD

---

## 💻 Yêu Cầu Hệ Thống

- **Node.js**: v14.0 trở lên
- **npm**: v6.0 trở lên hoặc **yarn**
- **Backend**: NestJS API chạy trên `https://react-learning-lime.vercel.app/` (theo file `.env.development`)

---

## 📖 Hướng Dẫn Sử Dụng

### 🔑 Đăng Nhập

1. Truy cập trang **https://react-learning-lime.vercel.app/login**
2. Nhập **Email** (tên đăng nhập)
3. Nhập **Mật khẩu**
4. Nhấn **Đăng Nhập**

### 🏠 Trang Chủ Ứng Viên
- Xem các công việc nổi bật và công ty
- Sử dụng thanh tìm kiếm để tìm công việc
- Click vào công việc để xem chi tiết và ứng tuyển

### 🔍 Tìm Kiếm Công Việc
- **Đường dẫn**: `/job`
- Tìm kiếm theo: Tên công việc, kỹ năng, vị trí, mức lương
- Xem danh sách công việc theo trang
- Click vào công việc để xem chi tiết

### 🏢 Danh Sách Công Ty
- **Đường dẫn**: `/company`
- Xem thông tin công ty và danh sách công việc đang tuyển

### 👨‍💼 Khu Vực Admin
- **Đường dẫn**: `/admin`
- Chỉ có thể truy cập khi có quyền admin
- Nếu không có quyền, sẽ được chuyển hướng đến trang "Not Permitted"

#### 📊 Dashboard
- Xem thống kê tổng quan
- Xem số liệu chính về công việc, ứng viên, công ty

#### 🏢 Quản Lý Công Ty (`/admin/company`)
- **Thêm**: Click nút "Thêm Mới", điền thông tin, upload logo
- **Sửa**: Click biểu tượng sửa, cập nhật thông tin
- **Xóa**: Click biểu tượng xóa để xóa công ty
- Xem danh sách tất cả công ty

#### 👔 Quản Lý Công Việc (`/admin/job`)
- **Xem Danh Sách**: Danh sách tất cả công việc
- **Thêm Mới**: `/admin/job/upsert` - Tạo công việc mới
  - Nhập tên công việc
  - Chọn công ty
  - Nhập vị trí làm việc
  - Nhập mức lương
  - Chọn level (Junior, Middle, Senior, etc.)
  - Thêm kỹ năng yêu cầu
  - Nhập mô tả chi tiết
  - Chọn ngày bắt đầu và kết thúc
- **Sửa**: Click biểu tượng sửa để chỉnh sửa
- **Xóa**: Click biểu tượng xóa để xóa công việc

#### 👥 Quản Lý Người Dùng (`/admin/user`)
- Xem danh sách tất cả người dùng
- **Thêm Người Dùng**:
  - Nhập email (tên đăng nhập)
  - Nhập mật khẩu
  - Nhập tên, tuổi, giới tính
  - Nhập địa chỉ
  - Chọn vai trò
  - Chọn công ty
- **Sửa**: Cập nhật thông tin người dùng
- **Xóa**: Xóa tài khoản người dùng

#### 📄 Quản Lý Hồ Sơ Ứng Viên (`/admin/resume`)
- Xem danh sách hồ sơ ứng tuyển
- **Cập Nhật Trạng Thái**:
  - Click vào hồ sơ để xem chi tiết
  - Cập nhật trạng thái: Chờ xử lý, Duyệt, Từ chối, v.v.
  - Xem lịch sử cập nhật trạng thái

#### 🔐 Quản Lý Vai Trò (`/admin/role`)
- Xem danh sách vai trò có sẵn (Admin, HR, User, v.v.)
- **Thêm Vai Trò**:
  - Nhập tên vai trò
  - Nhập mô tả
  - Chọn trạng thái (Kích hoạt/Vô hiệu hóa)
- **Gán Quyền**:
  - Click "Phân Quyền" hoặc biểu tượng quyền
  - Chọn các module: Companies, Jobs, Users, Resumes, Roles, Permissions
  - Chọn quyền cho từng module: GET, POST, PATCH, DELETE
  - Lưu quyền

#### 🔒 Quản Lý Quyền Hạn (`/admin/permission`)
- Xem danh sách tất cả quyền hạn
- Mỗi quyền bao gồm:
  - **Module**: Loại dữ liệu (Companies, Jobs, Users, v.v.)
  - **Method**: GET, POST, PATCH, DELETE
  - **API Path**: Đường dẫn API

---

## 🔐 Tài Khoản Demo

Hệ thống cung cấp các tài khoản demo để kiểm thử:

| Email | Vai Trò | Mật Khẩu | Chức Năng |
|-------|---------|----------|----------|
| `admin@gmail.com` | Admin | `123456` | Quyền truy cập tất cả (admin panel) |
| `hr@gmail.com` | HR Manager | `123456` | Quản lý công việc, ứng viên, nhân sự |
| `user@gmail.com` | User | `123456` | Ứng viên - Tìm kiếm công việc, ứng tuyển |
| `abc@gmail.com` | User | `123456` | Ứng viên - Tìm kiếm công việc, ứng tuyển |

### Hướng Dẫn Đăng Nhập
1. Truy cập: **https://react-learning-lime.vercel.app/login**
2. Nhập email (ví dụ: `admin@gmail.com`)
3. Nhập mật khẩu: `123456`
4. Click "Đăng Nhập"

### Hướng Dẫn Đăng Ký Tài Khoản Mới
1. Truy cập: **https://react-learning-lime.vercel.app/register**
2. Nhập thông tin:
   - Tên đầy đủ
   - Email (sẽ được dùng làm tên đăng nhập)
   - Mật khẩu
   - Tuổi, Giới tính, Địa chỉ
3. Click "Đăng Ký"
4. Sử dụng tài khoản mới để đăng nhập

---

## 📁 Cấu Trúc Dự Án

```
src/
├── components/          # Các component React
│   ├── admin/          # Components cho admin panel
│   │   ├── company/    # Quản lý công ty
│   │   ├── job/        # Quản lý công việc
│   │   ├── user/       # Quản lý người dùng
│   │   ├── resume/     # Quản lý hồ sơ
│   │   ├── role/       # Quản lý vai trò
│   │   └── permission/ # Quản lý quyền
│   ├── client/         # Components cho client
│   │   ├── card/       # Thẻ công việc, công ty
│   │   ├── data-table/ # Bảng dữ liệu
│   │   └── modal/      # Modal ứng tuyển, quản lý tài khoản
│   └── share/          # Components dùng chung
├── config/             # Cấu hình (API, permissions)
│   ├── api.ts         # Các hàm gọi API
│   └── permissions.ts # Danh sách quyền hạn
├── pages/              # Các trang (Pages)
│   ├── admin/         # Trang admin
│   ├── auth/          # Trang đăng nhập, đăng ký
│   ├── home/          # Trang chủ
│   ├── job/           # Trang công việc
│   └── company/       # Trang công ty
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
    ├── backend.d.ts   # Interfaces từ backend
    └── file.d.ts      # Interfaces cho file upload
```

---

## 🔧 Công Nghệ Sử Dụng

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

- ✅ Hỗ trợ đầy đủ trên desktop
- ✅ Tối ưu hóa cho tablet
- ✅ Thân thiện với mobile

---

## 🔐 Bảo Mật

- **Token-based Authentication**: JWT access token được lưu trong localStorage
- **Role-based Access Control (RBAC)**: Kiểm soát quyền hạn dựa trên vai trò
- **Protected Routes**: Các route admin được bảo vệ bằng ProtectedRoute
- **Permission Checking**: Kiểm tra chi tiết quyền từng API

---

## 📞 Hỗ Trợ & Liên Hệ

- **Tác Giả**: Hỏi Dân IT với Eric
- **Mô Tả**: Frontend cho series Nest.JS trên YouTube Hỏi Dân IT
- **Repository**: Tham khảo repository gốc

---

## 📝 Ghi Chú

- Backend API cần chạy trên `https://react-learning-lime.vercel.app/` (có thể thay đổi trong `.env`)
- Mỗi lần sửa file, ứng dụng sẽ tự reload (Hot Module Replacement)
- Token được lưu trong `localStorage`, sẽ mất khi xóa dữ liệu trình duyệt

---

## 🎓 Để Tìm Hiểu Thêm

- **Ant Design Docs**: https://ant.design/
- **React Router Docs**: https://reactrouter.com/
- **Redux Toolkit Docs**: https://redux-toolkit.js.org/
- **Vite Docs**: https://vitejs.dev/

---

**Happy Coding! 🚀**
