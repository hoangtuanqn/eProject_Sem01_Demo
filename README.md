# Maverick Dresses - Website Cung Cấp Đồng Phục Học Sinh Trên Toàn Nước

## Giới thiệu

Maverick Dresses là một trong những nhà sản xuất đồng phục hàng đầu tại Việt Nam. Chúng tôi cung cấp đồng phục chất lượng cao cho nhiều trường học với mức giá phải chăng. Sản phẩm bao gồm đồng phục học sinh nam và nữ, đảm bảo sự vừa vặn và chất liệu vải bền đẹp.

Website **Maverick Dresses** được phát triển nhằm mang đến trải nghiệm mua sắm tiện lợi, chuyên nghiệp, giúp khách hàng dễ dàng tìm kiếm, đặt hàng và theo dõi đơn hàng một cách nhanh chóng.

## Cài đặt và Chạy Dự Án

### Yêu cầu hệ thống

-   **Node.js** (phiên bản 14.0.0 trở lên)
-   **npm** hoặc **yarn**

### Các bước cài đặt

1. **Clone dự án từ GitHub:**
    ```sh
    git clone https://github.com/hoangtuanqn/eProject
    cd eProject
    ```
2. **Cài đặt dependencies:**
    ```sh
    npm install
    ```
3. **Chạy dự án ở môi trường development:**
    ```sh
    npm start
    ```
4. **Triển khai production:**
    ```sh
    npm run build
    ```

## Cấu trúc dự án

```
eproject_react/
├── public/
│   ├── assets/
│   │   ├── icon/
│   │   └── imgs/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── index.js
└── package.json
```

## Công nghệ sử dụng

-   **React.js** - Xây dựng giao diện người dùng
-   **React Router DOM** - Điều hướng trang
-   **Axios** - Gửi yêu cầu HTTP
-   **Framer Motion** - Hiệu ứng động
-   **Swiper** - Hiển thị slider sản phẩm
-   **React Hot Toast** - Hiển thị thông báo
-   **Lucide React** - Bộ icon hiện đại

## Xử lý dữ liệu và vận hành hệ thống

### Cách thức vận hành

-   Hệ thống được phát triển dưới dạng **Single Page Application (SPA)** giúp tăng tốc độ tải trang và cải thiện trải nghiệm người dùng.
-   Mọi dữ liệu sản phẩm, giỏ hàng và danh sách yêu thích được quản lý thông qua **React Context API** để đảm bảo hiệu suất tối ưu.

### Lưu trữ và xử lý dữ liệu

-   **Dữ liệu sản phẩm:** Được lưu trữ trong các JSON files hoặc từ API backend.
-   **Quản lý giỏ hàng:**
    -   Khi người dùng thêm sản phẩm vào giỏ hàng, dữ liệu được lưu trữ trong **LocalStorage** để duy trì trạng thái ngay cả khi tải lại trang.
    -   Khi thanh toán, hệ thống gửi thông tin giỏ hàng đến API PayPal để xử lý giao dịch.
-   **Danh sách yêu thích:**
    -   Được lưu trữ tại LocalStorage để giữ trạng thái ngay cả khi thoát trình duyệt.
-   **Hệ thống tìm kiếm:**
    -   Sử dụng thuật toán tìm kiếm theo từ khóa và bộ lọc (lọc theo danh mục, giá, thương hiệu,...).
-   **Hệ thống thanh toán:**
    -   Hỗ trợ thanh toán thông qua **PayPal API**, **Google Pay**.
    -   Xác nhận giao dịch và cập nhật trạng thái đơn hàng trong hệ thống.

## Tính năng chính

### 🌟 Quản lý giỏ hàng

-   Thêm/xóa sản phẩm vào giỏ hàng
-   Cập nhật số lượng sản phẩm
-   Tính tổng tiền đơn hàng
-   Lưu giỏ hàng trong Local Storage

### ❤️ Danh sách yêu thích (Wishlist)

-   Thêm/xóa sản phẩm vào danh sách yêu thích
-   Quản lý danh sách dễ dàng

### 🔎 Tìm kiếm và lọc sản phẩm

-   Tìm kiếm theo tên sản phẩm
-   Lọc sản phẩm theo danh mục
-   Sắp xếp theo giá

### 💳 Thanh toán

-   Tích hợp cổng thanh toán trực tuyến PayPal, Google Pay
-   Xử lý đơn hàng nhanh chóng
-   Thông báo trạng thái đơn hàng

### 📦 Theo dõi đơn hàng

-   Kiểm tra trạng thái đơn hàng theo mã đơn
-   Xem chi tiết đơn hàng
-   In hóa đơn sau khi thanh toán

### 🔥 Tính năng khác

-   **Thiết kế responsive**: Hiển thị tốt trên mọi thiết bị
-   **Hỗ trợ đăng ký nhận newsletter**
-   **Tích hợp bản đồ Google Maps để tìm cửa hàng**
-   **Tương thích với nhiều trình duyệt**

## Deployment

Website có thể được deploy lên các nền tảng như:

-   **Vercel**
-   **Netlify**
-   **GitHub Pages**
-   **Firebase Hosting**

## Đóng góp

### Thành viên nhóm:

1. **Phạm Hoàng Tuấn** - Student1614869
2. **Hồ Đức Anh** - Student1614883
3. **Lâm Hoàng An** - Student1614870

## Ghi chú

📌 Đây là dự án học tập và thực hành, không sử dụng cho mục đích thương mại.
