// Import thư viện axios để thực hiện các HTTP requests
import axios from "axios";

// Hàm khởi tạo ticker để hiển thị thời gian và vị trí
export function initTicker() {
    // Lấy các phần tử DOM để hiển thị thời gian và vị trí
    const dateTimeElement = document.getElementById("dateTime");
    const locationElement = document.getElementById("location");

    // Hàm cập nhật ngày giờ
    function updateDateTime() {
        // Tạo đối tượng Date chứa thời gian hiện tại
        const now = new Date();

        // Cấu hình định dạng hiển thị ngày giờ
        const options = {
            weekday: "long", // Hiển thị tên đầy đủ của thứ
            year: "numeric", // Hiển thị năm dạng số
            month: "long", // Hiển thị tên đầy đủ của tháng
            day: "numeric", // Hiển thị ngày dạng số
            hour: "2-digit", // Hiển thị giờ 2 chữ số
            minute: "2-digit", // Hiển thị phút 2 chữ số
            second: "2-digit", // Hiển thị giây 2 chữ số
        };

        // Cập nhật nội dung hiển thị với định dạng ngày giờ đã cấu hình
        dateTimeElement.textContent = now.toLocaleDateString("en-US", options);
    }

    // Hàm cập nhật vị trí
    function updateLocation() {
        // Kiểm tra trình duyệt có hỗ trợ geolocation không
        if (navigator.geolocation) {
            // Lấy vị trí hiện tại của người dùng
            navigator.geolocation.getCurrentPosition(
                // Callback khi lấy vị trí thành công
                (position) => {
                    const latitude = position.coords.latitude; // Lấy vĩ độ
                    const longitude = position.coords.longitude; // Lấy kinh độ

                    // Sử dụng API Nominatim để chuyển đổi tọa độ thành tên địa điểm
                    axios
                        .get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                        .then(({ data }) => {
                            // Lấy tên thành phố/thị trấn/tiểu bang và quốc gia
                            const city = data.address.city || data.address.town || data.address.state;
                            const country = data.address.country;
                            // Hiển thị tên địa điểm và quốc gia với biểu tượng định vị
                            locationElement.textContent = `📍 ${city}, ${country}`;
                        })
                        .catch(() => {
                            // Nếu không lấy được tên địa điểm, hiển thị thông báo lỗi
                            locationElement.textContent = "📍 Unable to get location name. Please try again later.";
                        });
                },
                // Callback khi có lỗi lấy vị trí
                (error) => {
                    locationElement.textContent = "📍 Location not available";
                },
            );
        } else {
            // Thông báo nếu trình duyệt không hỗ trợ geolocation
            locationElement.textContent = "📍 Geolocation is not supported";
        }
    }

    // Cập nhật lần đầu khi khởi tạo
    updateDateTime();
    updateLocation();

    // Thiết lập cập nhật định kỳ
    setInterval(updateDateTime, 1000); // Cập nhật thời gian mỗi giây
    setInterval(updateLocation, 300000); // Cập nhật vị trí mỗi 5 phút
}
