# 🎓 Hướng Dẫn Chỉnh Sửa & Đưa Thiệp Mời Tốt Nghiệp Lên Online

Bộ code thiệp mời tốt nghiệp 3D Flipbook 4 trang được viết bằng **HTML / CSS / JS thuần** nên bạn có thể mở trực tiếp file `index.html` trên trình duyệt để xem ngay, và chỉnh sửa cực kỳ nhanh chóng.

---

## 1. Cách thay đổi Tên, Ảnh kỷ niệm, Thời gian & Địa điểm

Bạn chỉ cần mở file **`script.js`** và sửa các thông tin ở ngay phần đầu tiên (`GRADUATION_CONFIG`):

- **Thông tin cá nhân (Trang 1)**:
  - `graduateName`: Họ và tên đầy đủ của bạn
  - `signatureName`: Tên ký dưới bức thư cảm ơn
  - `degreeTitle`: Danh vị (VD: `"Tân Cử Nhân"`, `"Tân Kỹ Sư"`, `"Tân Dược Sĩ"`...)
  - `university`: Tên trường & khoa của bạn
  - `heroPhotoUrl`: Đường dẫn ảnh chân dung tốt nghiệp của bạn (bạn có thể tạo thư mục `images/` trong dự án, bỏ ảnh `chan-dung.jpg` vào rồi điền `"images/chan-dung.jpg"`).
- **Bộ 6 bức ảnh kỷ niệm (Trang 2)**:
  - Sửa mảng `memories` gồm `url` (đường dẫn ảnh), `date` (mốc thời gian), và `caption` (chú thích kỷ niệm).
- **Thời gian, Địa điểm & Liên hệ (Trang 3)**:
  - `eventIsoDate`: Điền đúng ngày giờ làm lễ theo định dạng `"2026-12-20T08:30:00+07:00"` để đồng hồ tự động đếm ngược chính xác.
  - `googleMapsUrl`: Dán link Google Maps vị trí hội trường của bạn.
  - `mainContactPhone`, `zaloUrl`, `messengerUrl`: Điền số điện thoại và link mạng xã hội của bạn.

---

## 2. Cách nhận Lời Chúc (Trang 2) & Xác Nhận Tham Dự RSVP (Trang 4)

Bạn có thể chọn **1 trong 2 cách miễn phí** (hoặc dùng cả hai) dưới đây:

### Cách A: Nhận qua Email cá nhân trong 30 giây (Dễ nhất - Khuyên dùng)

1. Truy cập https://web3forms.com/
2. Nhập địa chỉ Email cá nhân của bạn và bấm **Create Access Key**.
3. Mở email để copy mã **Access Key** vừa nhận được.
4. Dán mã đó vào dòng `web3FormsAccessKey: "MÃ_CỦA_BẠN"` trong file `script.js`.
   👉 Từ lúc này, mỗi khi bạn bè gửi Lời chúc (Trang 2) hoặc Xác nhận tham dự (Trang 4), bạn sẽ nhận được thông báo ngay trong Email!

### Cách B: Tự động lưu thành bảng trong Google Sheets

1. Tạo 1 file **Google Sheet** mới trên Google Drive của bạn.
2. Trên thanh menu của Google Sheet, chọn **Tiện ích mở rộng (Extensions)** → **Apps Script**.
3. Xóa đoạn code mặc định và dán đoạn code ngắn sau vào:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       data.submittedAt || new Date(),
       data.formType || "",
       data.name || "",
       data.relation || data.phone || "",
       data.message || data.attendance || "",
       data.sticker || data.arrivalTime || "",
       data.guestCount || "",
       data.extraNote || ""
     ]);
     return ContentService.createTextOutput("OK");
   }
   ```
4. Bấm nút **Triển khai (Deploy)** ở góc phải trên cùng → **Tùy chọn triển khai mới (New deployment)**:
   - Chọn loại: **Ứng dụng web (Web app)**
   - Quyền truy cập (Who has access): Chọn **Bất kỳ ai (Anyone)**
   - Bấm **Triển khai (Deploy)** và copy đường dẫn **Web App URL**.
5. Dán đường dẫn đó vào dòng `googleSheetWebhookUrl: "LINK_WEB_APP_CỦA_BẠN"` trong file `script.js`.

---

## 3. Các cách Upload Thiệp Mời lên Online (Miễn phí 100%)

Ngoài **Vercel**, bạn có **3 lựa chọn cực kỳ tốt và miễn phí** để lấy đường link đẹp (VD: `le-tot-nghiep-minh-thanh.vercel.app`) gửi cho bạn bè:

### Cách 1: Upload lên Vercel (Nhanh, tên miền `.vercel.app` rất đẹp)

- **Cách không cần cài đặt gì**: Đẩy thư mục này lên GitHub, sau đó đăng nhập https://vercel.com → Bấm **Add New Project** → Chọn repo GitHub vừa tạo → Bấm **Deploy**.
- **Cách dùng lệnh (nếu máy bạn đã có Node.js)**:
  ```bash
  npx vercel
  ```

### Cách 2: Kéo-Thả trực tiếp lên Netlify Drop (Không cần tài khoản GitHub, mất 10 giây)

1. Truy cập https://app.netlify.com/drop
2. Kéo nguyên thư mục `GRADUATION` từ máy tính của bạn thả vào khung trên trang web.
3. Ngay lập tức bạn sẽ có 1 đường link online và có thể đổi tên miền miễn phí thành `thiep-tot-nghiep-cua-ban.netlify.app`.

### Cách 3: GitHub Pages (Ổn định vĩnh viễn)

1. Đưa các file `index.html`, `styles.css`, `script.js` lên 1 repository trên GitHub.
2. Vào mục **Settings** → **Pages** → Chọn nhánh `main` và bấm **Save**.
