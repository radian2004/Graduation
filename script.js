/**
 * ============================================================================
 * CẤU HÌNH THIỆP MỜI TỐT NGHIỆP (BẠN CHỈ CẦN SỬA THÔNG TIN TẠI ĐÂY)
 * ============================================================================
 */
const GRADUATION_CONFIG = {
  // 0. Tên khách mời mặc định ở Trang Mở Đầu (Khi gửi link không kèm ?to=Tên_Bạn thì sẽ hiện "Dear Friends")
  defaultGuestName: "Friends",

  // 1. Thông tin cá nhân (Trang 1)
  graduateName: "Nguyễn Thanh An",
  signatureName: "Thanh An",
  degreeTitle: "Tân Cử Nhân ngành Kỹ thuật Máy tính",
  university: "Trường Đại học Công nghệ thông tin",
  faculty: "Khoa Kỹ thuật Máy tính",
  heroPhotoUrl:
    "https://drive.google.com/file/d/1kQLFccvk18ddiYtkZkSxBr92OZJQO9bn/view?usp=sharing",

  // 2. Nội dung tâm thư cảm ơn theo từng đối tượng (Trang 1)
  gratitudeLetters: {
    all: {
      salutation: "Thân gửi Gia đình, Người thân và những Người bạn tuyệt vời,",
      p1: "Hành trình đại học khép lại không chỉ bằng một tấm bằng, mà bằng biết bao kỷ niệm, sự trưởng thành và tình yêu thương mà mình may mắn nhận được.",
      p2: "Cảm ơn bố mẹ và gia đình đã luôn là điểm tựa vững chắc nhất. Cảm ơn những người bạn đã cùng thức trắng chạy deadline, cùng sẻ chia vui buồn và tiếp thêm động lực để mình đi trọn chặng đường thanh xuân rực rỡ này.",
      p3: "Sự hiện diện của bạn trong buổi lễ tốt nghiệp sắp tới chính là món quà ý nghĩa và trọn vẹn nhất đối với mình!"
    },
    family: {
      salutation: "Gửi Bố Mẹ và Gia đình yêu thương của con,",
      p1: "Mỗi bước chân con đi qua những năm tháng đại học đều có bóng dáng sự hy sinh thầm lặng, những lời hỏi han ân cần và sự chở che vô điều kiện của gia đình.",
      p2: "Tấm bằng tốt nghiệp hôm nay không chỉ là thành quả của riêng con, mà là món quà con muốn dâng tặng Bố Mẹ và những người thân yêu đã luôn tin tưởng, dõi theo con.",
      p3: "Con mong được cùng cả nhà lưu giữ khoảnh khắc đáng tự hào nhất này trong ngày lễ tốt nghiệp!"
    },
    friends: {
      salutation: "Gửi những Người bạn đồng hành năm tháng thanh xuân,",
      p1: "Cảm ơn vì đã xuất hiện và biến những năm tháng giảng đường của mình trở thành quãng thời gian tươi đẹp, rộn rã tiếng cười và đáng nhớ nhất.",
      p2: "Từ những buổi học nhóm, những mùa thi căng thẳng cho đến những cuộc trò chuyện không hồi kết — tất cả đều là mảnh ghép vô giá tạo nên ngày hôm nay.",
      p3: "Nhất định phải đến chụp cùng nhau thật nhiều bức ảnh kỷ niệm trong ngày mình khoác áo tân cử nhân nhé!"
    }
  },

  // 3. Bộ sưu tập 6 ảnh kỷ niệm (Trang 2) - Bạn có thể thay bằng link ảnh hoặc đường dẫn "images/anh1.jpg"
  memories: [
    {
      url: "https://drive.google.com/file/d/1Qn_KOLhYMAqJ2wNoezl6FpbVX3BAteo-/view?usp=sharing",
      date: "Năm Nhất • 2022",
      caption: "Những ngày tháng năm nhất với Mộc VI"
    },
    {
      url: "https://drive.google.com/file/d/1Ne2ZvfjhKfrdXeqG1fidvSUIK2r7Dc2A/view?usp=sharing",
      date: "Năm Hai • 2023",
      caption: "Những tháng ngày chạy sự kiện hết mình với BCH và LCH khoa"
    },
    {
      url: "https://drive.google.com/file/d/1qyZBNGpS_CBNgynxOUsj7FtDxhP-wpAk/view?usp=sharing",
      date: "Mùa Hè • 2024",
      caption: "Ban tổ chức CE-DAY 2024"
    },
    {
      url: "https://drive.google.com/file/d/1Y668MzwY8yNVs7uy2WsK7GAbtbFTmv2H/view?usp=sharing",
      date: "Năm Ba • 2025",
      caption: "Cùng Lót Lẹt đi show"
    },
    {
      url: "https://drive.google.com/file/d/1yhGdqid508ZDtoY4pmOaC6YYiqkJTSA_/view?usp=sharing",
      date: "Bảo Vệ Khóa Luận • 2026",
      caption: "Bảo vệ khóa luận tốt nghiệp xong rồi nè"
    },
    {
      url: "https://drive.google.com/file/d/1BUEcWzVvqz3zKC62ZoLCl119YaRk1AGp/view?usp=sharing",
      date: "Lễ Tốt Nghiệp • 2026",
      caption: "Vậy là Thanh An đã tốt nghiệp rồi!"
    }
  ],

  // 4. Thông tin buổi lễ & Liên hệ (Trang 3)
  eventIsoDate: "2026-11-25T08:30:00+07:00", // Định dạng YYYY-MM-DDTHH:mm:ss+07:00 để đếm ngược
  eventDateTimeDisplay: "10:30 - 12:00 • Thứ Tư, 25/11/2026",
  // eventPhotoTimeNote: "Khung giờ chụp ảnh đẹp nhất với mình: <strong>10:30 – 11:00</strong>",
  eventVenueName: "Sảnh dưới tòa E",
  eventVenueAddress: "Trường Đại học Công nghệ Thông tin, Đường Hàn Thuyên, P. Linh Xuân, Tp. Hồ Chí Minh",
  googleMapsUrl: "https://maps.app.goo.gl/C5xfqYLQYLJYePYv5",

  // Ảnh hướng dẫn vị trí chụp ảnh tại trường (Bạn dán link Google Drive ảnh vị trí chụp ảnh Sảnh dưới tòa E vào venuePhotoUrl)
  venuePhotoUrl: "https://drive.google.com/file/d/19vn2qiIoHBfUYCpvi5vMzpexBZUf6PKp/view?usp=sharing",
  venuePhotoTitle: "Khu vực Sảnh dưới tòa E (UIT)",
  venuePhotoCaption: "Vị trí đón mọi người & chụp ảnh kỷ niệm: Sảnh dưới tòa E - Trường ĐH Công nghệ Thông tin (UIT)",

  // Liên hệ đón khách
  mainContactName: "Thanh An",
  mainContactPhone: "0945283008",
  mainContactPhoneDisplay: "0945 283 008",
  backupContactName: "Ngọc Trâm",
  backupContactPhone: "0395122891",
  backupContactPhoneDisplay: "0395 122 891",
  zaloUrl: "https://zalo.me/0945283008",
  messengerUrl: "https://www.facebook.com/thanhannguyen2004/",

  // 5. KẾT NỐI NHẬN LỜI CHÚC VỀ GOOGLE SHEET / EMAIL CÁ NHÂN
  googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbwoI1wagPtWlH-SBxZHWNxX6gpjpmzLIF7EV-lA5iyD0yyQdhcpiRVNtGODCYTF6awrUA/exec",
  web3FormsAccessKey: "",

  // 6. NHẠC NỀN TỰ ĐỘNG PHÁT (Đã tải sẵn file nhạc từ Google Drive của bạn vào file "music.mp3" trong dự án để phát tự động 100%)
  backgroundMusicUrl: "music.mp3"
};

/* ============================================================================
   LOGIC VẬN HÀNH FLIPBOOK 3D, ÂM THANH, ĐẾM NGƯỢC & GỬI FORM
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  let currentPage = 0;
  const totalPages = 4;
  let isAnimating = false;
  let soundEnabled = true;
  let selectedSticker = "🎓 Chúc mừng Tân khoa!";

  const pages = Array.from(document.querySelectorAll(".book-page"));
  const tabBtns = Array.from(document.querySelectorAll(".tab-btn"));
  const dockDots = Array.from(document.querySelectorAll(".dock-dot"));
  const turningLeaf = document.getElementById("turningLeaf");
  const prevSideBtn = document.getElementById("prevPageSideBtn");
  const nextSideBtn = document.getElementById("nextPageSideBtn");
  const dockPrevBtn = document.getElementById("dockPrevBtn");
  const dockNextBtn = document.getElementById("dockNextBtn");

  // Helper tự động chuyển link chia sẻ Google Drive (/file/d/.../view) sang link ảnh trực tiếp đã nén tối ưu cho ảnh gốc 6000x4000
  function extractGoogleDriveId(url) {
    if (!url || typeof url !== "string") return null;
    const fileMatch = url.match(/\/(?:file\/)?d\/([a-zA-Z0-9_-]{15,})/);
    if (fileMatch && fileMatch[1]) return fileMatch[1];
    const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]{15,})/);
    if (idParamMatch && idParamMatch[1]) return idParamMatch[1];
    return null;
  }

  function resolveImageUrl(url, size = "w1200") {
    const driveId = extractGoogleDriveId(url);
    if (driveId) {
      return `https://drive.google.com/thumbnail?id=${driveId}&sz=${size}`;
    }
    return url;
  }

  function attachDriveImageFallback(imgEl, originalUrl, size = "w1200") {
    if (!imgEl) return;
    imgEl.referrerPolicy = "no-referrer";
    const driveId = extractGoogleDriveId(originalUrl);
    let fallbackStep = 0;
    imgEl.onerror = () => {
      if (!driveId) return;
      fallbackStep += 1;
      if (fallbackStep === 1) {
        imgEl.src = `https://lh3.googleusercontent.com/d/${driveId}=${size}`;
      } else if (fallbackStep === 2) {
        imgEl.src = `https://drive.google.com/uc?export=view&id=${driveId}`;
      }
    };
  }

  // Helper tách Trường & Khoa thành 2 dòng riêng biệt
  function renderSchoolTwoLines(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    let schoolLine1 = (GRADUATION_CONFIG.university || "").trim();
    let schoolLine2 = (GRADUATION_CONFIG.faculty || "").trim();

    if (!schoolLine2 && schoolLine1.includes("•")) {
      const parts = schoolLine1.split("•").map((s) => s.trim());
      schoolLine1 = parts[0] || "";
      schoolLine2 = parts.slice(1).join(" • ");
    }

    if (schoolLine2) {
      el.innerHTML = `<span class="school-line">${escapeHtml(schoolLine1)}</span><span class="school-line">${escapeHtml(schoolLine2)}</span>`;
    } else {
      el.innerHTML = `<span class="school-line">${escapeHtml(schoolLine1)}</span>`;
    }
  }

  // Helper lấy tên người bạn từ đường link (?to=Tên_Bạn hoặc ?name=Tên_Bạn), nếu không có trả về "Friends"
  function getRecipientFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const rawParam =
      params.get("to") ||
      params.get("name") ||
      params.get("friend") ||
      params.get("ban") ||
      params.get("guest") ||
      "";
    const cleaned = rawParam.trim();
    return {
      name: cleaned || GRADUATION_CONFIG.defaultGuestName || "Friends",
      isCustomFriend: Boolean(cleaned)
    };
  }

  // Khởi tạo Trang Mở Đầu (Welcome Cover) & Cá nhân hóa tên người bạn
  function initWelcomeCoverAndGuest() {
    const { name: guestName, isCustomFriend } = getRecipientFromUrl();

    setText("welcomeGuestName", guestName);
    setText("welcomeGradDegree", GRADUATION_CONFIG.degreeTitle);
    setText("welcomeGradName", GRADUATION_CONFIG.graduateName);
    renderSchoolTwoLines("welcomeGradSchool");
    setText("welcomeDateTimePill", `🗓️ ${GRADUATION_CONFIG.eventDateTimeDisplay}`);
    setText("welcomeVenuePill", `📍 ${GRADUATION_CONFIG.eventVenueName}`);

    // Cá nhân hóa lời chào ở Trang 1 & điền sẵn tên ở Trang 2 nếu có tên bạn cụ thể
    if (isCustomFriend) {
      setText("page1GuestGreeting", `Gửi ${guestName},`);
      setText(
        "letterSalutation",
        `Thân gửi ${guestName} cùng Gia đình và những Người bạn tuyệt vời,`
      );
      const wishSenderInput = document.getElementById("wishSenderName");
      if (wishSenderInput && !wishSenderInput.value) {
        wishSenderInput.value = guestName;
      }
      // Ẩn nút tạo link khi khách mở link được cá nhân hóa
      const linkCreatorWrap = document.getElementById("linkCreatorWrap");
      if (linkCreatorWrap) linkCreatorWrap.hidden = true;
    }

    // Nút "Mở Thiệp Mời" -> Mở bìa thiệp & Phát nhạc nền ngay lập tức
    const welcomeModal = document.getElementById("welcomeCoverModal");
    const openBtn = document.getElementById("openInvitationBtn");
    if (openBtn && welcomeModal) {
      openBtn.addEventListener("click", () => {
        if (bgMusicAudio && bgMusicAudio.paused) {
          bgMusicAudio.play().catch(() => {});
        }
        welcomeModal.classList.add("closing");
        setTimeout(() => {
          welcomeModal.hidden = true;
        }, 600);
      });
    }

    // Công cụ tạo nhanh link gửi riêng cho từng người bạn (?to=Tên_Bạn)
    const toggleBtn = document.getElementById("toggleLinkCreatorBtn");
    const panel = document.getElementById("linkCreatorPanel");
    const input = document.getElementById("customFriendInput");
    const copyBtn = document.getElementById("copyCustomLinkBtn");

    if (toggleBtn && panel) {
      toggleBtn.addEventListener("click", () => {
        panel.hidden = !panel.hidden;
        if (!panel.hidden && input) input.focus();
      });
    }

    if (copyBtn && input) {
      const handleCopyLink = () => {
        const friendVal = input.value.trim();
        const urlObj = new URL(window.location.href);
        if (friendVal) {
          urlObj.searchParams.set("to", friendVal);
        } else {
          urlObj.searchParams.delete("to");
        }
        const finalLink = urlObj.toString();
        navigator.clipboard?.writeText(finalLink);
        showToast(
          friendVal
            ? `🔗 Đã copy link thiệp mời gửi riêng cho: ${friendVal}`
            : "🔗 Đã copy link thiệp mời chung (Dear Friends)"
        );
      };

      copyBtn.addEventListener("click", handleCopyLink);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleCopyLink();
        }
      });
    }
  }

  // 1. Áp dụng thông tin từ GRADUATION_CONFIG lên giao diện
  function applyConfiguration() {
    setText("headerGradName", `Lễ Tốt Nghiệp • ${GRADUATION_CONFIG.signatureName}`);
    setText("gradDegreeTitle", GRADUATION_CONFIG.degreeTitle);
    setText("gradFullName", GRADUATION_CONFIG.graduateName);
    renderSchoolTwoLines("gradUniversity");
    setText("gradSignature", GRADUATION_CONFIG.signatureName);
    setText("closingSignature", GRADUATION_CONFIG.signatureName);

    const heroImg = document.getElementById("gradHeroPhoto");
    if (heroImg && GRADUATION_CONFIG.heroPhotoUrl) {
      attachDriveImageFallback(heroImg, GRADUATION_CONFIG.heroPhotoUrl, "w1200");
      heroImg.onload = () => {
        const frame = heroImg.closest(".portrait-frame");
        if (frame) {
          frame.classList.toggle("is-landscape", heroImg.naturalWidth > heroImg.naturalHeight);
        }
      };
      heroImg.src = resolveImageUrl(GRADUATION_CONFIG.heroPhotoUrl, "w1200");
    }

    setText("eventDateTimeText", GRADUATION_CONFIG.eventDateTimeDisplay);
    const photoNoteEl = document.getElementById("eventPhotoTimeNote");
    if (photoNoteEl) {
      if (GRADUATION_CONFIG.eventPhotoTimeNote) {
        photoNoteEl.innerHTML = GRADUATION_CONFIG.eventPhotoTimeNote;
        photoNoteEl.hidden = false;
      } else {
        photoNoteEl.hidden = true;
      }
    }
    setText("eventVenueName", GRADUATION_CONFIG.eventVenueName);
    setText("eventVenueAddress", GRADUATION_CONFIG.eventVenueAddress);

    // Hiển thị ảnh vị trí chụp ảnh ở Trang 3 (hỗ trợ link Google Drive)
    const venuePhotoCard = document.getElementById("venuePhotoCard");
    const venuePhotoImg = document.getElementById("venuePhotoImg");
    if (venuePhotoCard && venuePhotoImg) {
      if (GRADUATION_CONFIG.venuePhotoUrl) {
        venuePhotoCard.hidden = false;
        setText("venuePhotoTitleText", GRADUATION_CONFIG.venuePhotoTitle || GRADUATION_CONFIG.eventVenueName);
        attachDriveImageFallback(venuePhotoImg, GRADUATION_CONFIG.venuePhotoUrl, "w800");
        venuePhotoImg.src = resolveImageUrl(GRADUATION_CONFIG.venuePhotoUrl, "w800");

        const openVenueLightbox = () => {
          openLightbox({
            url: GRADUATION_CONFIG.venuePhotoUrl,
            date: `📍 Vị trí chụp ảnh • ${GRADUATION_CONFIG.eventVenueName}`,
            caption:
              GRADUATION_CONFIG.venuePhotoCaption ||
              `${GRADUATION_CONFIG.eventVenueName} - ${GRADUATION_CONFIG.eventVenueAddress}`
          });
        };
        venuePhotoCard.onclick = openVenueLightbox;
        venuePhotoCard.onkeydown = (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openVenueLightbox();
          }
        };
      } else {
        venuePhotoCard.hidden = true;
      }
    }

    const mapsBtn = document.getElementById("googleMapsBtn");
    if (mapsBtn) mapsBtn.href = GRADUATION_CONFIG.googleMapsUrl;

    setText("contactMainName", GRADUATION_CONFIG.mainContactName);
    setText("contactMainPhone", GRADUATION_CONFIG.mainContactPhoneDisplay);
    const callMainBtn = document.getElementById("callMainBtn");
    if (callMainBtn) callMainBtn.href = `tel:${GRADUATION_CONFIG.mainContactPhone}`;

    setText("contactBackupName", GRADUATION_CONFIG.backupContactName);
    setText("contactBackupPhone", GRADUATION_CONFIG.backupContactPhoneDisplay);
    const callBackupBtn = document.getElementById("callBackupBtn");
    if (callBackupBtn) callBackupBtn.href = `tel:${GRADUATION_CONFIG.backupContactPhone}`;

    const copyBtns = document.querySelectorAll(".mini-action-btn.copy");
    if (copyBtns[0]) copyBtns[0].dataset.copy = GRADUATION_CONFIG.mainContactPhone;
    if (copyBtns[1]) copyBtns[1].dataset.copy = GRADUATION_CONFIG.backupContactPhone;

    const zaloBtn = document.getElementById("zaloLinkBtn");
    if (zaloBtn) zaloBtn.href = GRADUATION_CONFIG.zaloUrl;
    const fbBtn = document.getElementById("fbLinkBtn");
    if (fbBtn) fbBtn.href = GRADUATION_CONFIG.messengerUrl;
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  // 2. Tự động phát nhạc nền xuyên suốt (không cần nút bấm trên thanh tab)
  const bgMusicAudio = document.getElementById("bgMusicAudio");

  function initBackgroundMusic() {
    if (!bgMusicAudio) return;
    const rawUrl = (GRADUATION_CONFIG.backgroundMusicUrl || "music.mp3").trim();
    const driveId = extractGoogleDriveId(rawUrl);

    if (driveId) {
      bgMusicAudio.src = `https://docs.google.com/uc?export=open&id=${driveId}`;
    } else {
      bgMusicAudio.src = rawUrl;
    }

    bgMusicAudio.volume = 0.65;
    bgMusicAudio.loop = true;

    const unlockEvents = [
      "click",
      "touchstart",
      "touchend",
      "pointerdown",
      "mousedown",
      "keydown",
      "wheel",
      "scroll"
    ];

    const removeUnlockListeners = () => {
      unlockEvents.forEach((evt) => {
        document.removeEventListener(evt, tryPlayMusic, true);
        window.removeEventListener(evt, tryPlayMusic, true);
      });
    };

    const tryPlayMusic = () => {
      if (!bgMusicAudio.paused) {
        removeUnlockListeners();
        return;
      }
      bgMusicAudio
        .play()
        .then(() => {
          removeUnlockListeners();
        })
        .catch(() => {
          // Chờ tương tác đầu tiên của người dùng trên trang nếu trình duyệt chặn autoplay
        });
    };

    // Thử phát ngay lập tức khi trang vừa mở
    tryPlayMusic();

    // Và tự động kích hoạt ngay ở thao tác chạm/cuộn/click bất kỳ đầu tiên trên trang
    unlockEvents.forEach((evt) => {
      document.addEventListener(evt, tryPlayMusic, { capture: true, passive: true });
      window.addEventListener(evt, tryPlayMusic, { capture: true, passive: true });
    });
  }

  // 3. Hàm lật trang 3D Flipbook
  function flipToPage(targetIndex) {
    if (isAnimating || targetIndex === currentPage || targetIndex < 0 || targetIndex >= totalPages) {
      return;
    }

    isAnimating = true;
    const direction = targetIndex > currentPage ? "next" : "prev";

    if (turningLeaf) {
      turningLeaf.classList.remove("flipping-next", "flipping-prev");
      void turningLeaf.offsetWidth; // Reflow kích hoạt lại animation
      turningLeaf.classList.add(direction === "next" ? "flipping-next" : "flipping-prev");
    }

    // Đổi trang hiển thị ở giữa chu kỳ lật 3D để tạo cảm giác trang mới lộ ra bên dưới
    setTimeout(() => {
      pages.forEach((p, idx) => {
        p.classList.toggle("active", idx === targetIndex);
      });
      currentPage = targetIndex;
      updateNavigationUI();
    }, 320);

    setTimeout(() => {
      if (turningLeaf) {
        turningLeaf.classList.remove("flipping-next", "flipping-prev");
      }
      isAnimating = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 790);
  }

  function updateNavigationUI() {
    tabBtns.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === currentPage);
    });
    dockDots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentPage);
    });

    const isFirst = currentPage === 0;
    const isLast = currentPage === totalPages - 1;

    if (prevSideBtn) prevSideBtn.disabled = isFirst;
    if (nextSideBtn) nextSideBtn.disabled = isLast;
    if (dockPrevBtn) dockPrevBtn.disabled = isFirst;
    if (dockNextBtn) dockNextBtn.disabled = isLast;
  }

  // Gắn sự kiện điều hướng
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => flipToPage(Number(btn.dataset.page)));
  });

  dockDots.forEach((dot) => {
    dot.addEventListener("click", () => flipToPage(Number(dot.dataset.page)));
  });

  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => flipToPage(Number(btn.dataset.goto)));
  });

  if (prevSideBtn) prevSideBtn.addEventListener("click", () => flipToPage(currentPage - 1));
  if (nextSideBtn) nextSideBtn.addEventListener("click", () => flipToPage(currentPage + 1));
  if (dockPrevBtn) dockPrevBtn.addEventListener("click", () => flipToPage(currentPage - 1));
  if (dockNextBtn) dockNextBtn.addEventListener("click", () => flipToPage(currentPage + 1));

  // Hỗ trợ bàn phím Trái / Phải
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (e.key === "ArrowRight") flipToPage(currentPage + 1);
    if (e.key === "ArrowLeft") flipToPage(currentPage - 1);
    if (e.key === "Escape") closeLightbox();
  });

  // Hỗ trợ vuốt cảm ứng (Swipe) trên điện thoại
  let touchStartX = 0;
  let touchStartY = 0;
  const bookFrame = document.getElementById("bookFrame");
  if (bookFrame) {
    bookFrame.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      },
      { passive: true }
    );

    bookFrame.addEventListener(
      "touchend",
      (e) => {
        const diffX = e.changedTouches[0].screenX - touchStartX;
        const diffY = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(diffX) > 70 && Math.abs(diffX) > Math.abs(diffY) * 1.4) {
          if (diffX < 0) flipToPage(currentPage + 1);
          else flipToPage(currentPage - 1);
        }
      },
      { passive: true }
    );
  }

  // 4. Trang 1: Chuyển đổi tâm thư cảm ơn (Chung / Gia đình / Bạn bè)
  const gratitudeBtns = document.querySelectorAll("[data-gratitude]");
  gratitudeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      gratitudeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const key = btn.dataset.gratitude;
      const content = GRADUATION_CONFIG.gratitudeLetters[key];
      const { name: guestName, isCustomFriend } = getRecipientFromUrl();
      if (content) {
        if (isCustomFriend && (key === "all" || key === "friends")) {
          setText(
            "letterSalutation",
            key === "friends"
              ? `Gửi ${guestName} - Người bạn đồng hành năm tháng thanh xuân,`
              : `Thân gửi ${guestName} cùng Gia đình và những Người bạn tuyệt vời,`
          );
        } else {
          setText("letterSalutation", content.salutation);
        }
        setText("letterBody1", content.p1);
        setText("letterBody2", content.p2);
        setText("letterBody3", content.p3);
      }
    });
  });

  // 5. Trang 2: Render bộ sưu tập ảnh Polaroid & Lightbox
  const polaroidGallery = document.getElementById("polaroidGallery");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxDate = document.getElementById("lightboxDate");
  const lightboxCaption = document.getElementById("lightboxCaption");

  function renderMemories() {
    if (!polaroidGallery) return;
    polaroidGallery.innerHTML = "";
    GRADUATION_CONFIG.memories.forEach((item) => {
      const card = document.createElement("article");
      card.className = "polaroid-card";
      const displayUrl = resolveImageUrl(item.url, "w1000");
      card.innerHTML = `
        <div class="polaroid-img-wrap">
          <img src="${displayUrl}" alt="${item.caption}" loading="lazy" referrerpolicy="no-referrer" />
        </div>
        <span class="polaroid-tag">${item.date}</span>
        <p class="polaroid-caption">${item.caption}</p>
      `;
      const imgEl = card.querySelector("img");
      attachDriveImageFallback(imgEl, item.url, "w1000");
      card.addEventListener("click", () => openLightbox(item));
      polaroidGallery.appendChild(card);
    });
  }

  function openLightbox(item) {
    if (!lightboxModal || !lightboxImg) return;
    attachDriveImageFallback(lightboxImg, item.url, "w2000");
    lightboxImg.src = resolveImageUrl(item.url, "w2000");
    if (lightboxDate) lightboxDate.textContent = item.date;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
    lightboxModal.hidden = false;
  }

  function closeLightbox() {
    if (lightboxModal) lightboxModal.hidden = true;
  }

  document.getElementById("lightboxCloseBtn")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxBackdrop")?.addEventListener("click", closeLightbox);

  // 6. Trang 2 & Trang 4: Gửi Lời chúc & RSVP về Google Sheet / Email cá nhân
  async function sendPayloadToOwner(payload) {
    let sentRemote = false;

    // Gửi về Google Sheet nếu chủ thiệp đã cấu hình link Google Apps Script
    if (GRADUATION_CONFIG.googleSheetWebhookUrl) {
      await fetch(GRADUATION_CONFIG.googleSheetWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      sentRemote = true;
    }

    // Hoặc gửi về Email cá nhân qua Web3Forms nếu đã điền Access Key
    if (GRADUATION_CONFIG.web3FormsAccessKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: GRADUATION_CONFIG.web3FormsAccessKey,
          subject: `[Thiệp Tốt Nghiệp] ${payload.formType} từ ${payload.name}`,
          ...payload
        })
      });
      if (res.ok) sentRemote = true;
    }

    return sentRemote;
  }

  // Chọn biểu tượng cảm xúc ở Trang 2
  const stickerChips = document.querySelectorAll(".sticker-chip");
  stickerChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      stickerChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      selectedSticker = chip.dataset.sticker || "";
    });
  });

  // Chọn lời chúc gợi ý nhanh
  document.querySelectorAll(".suggest-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const textarea = document.getElementById("wishMessage");
      if (textarea) {
        textarea.value = chip.dataset.text || "";
        textarea.focus();
      }
    });
  });

  // Hiển thị các lời chúc khách vừa gửi trên trình duyệt của họ
  function renderRecentSentWishes() {
    const saved = JSON.parse(localStorage.getItem("grad_sent_wishes_2026") || "[]");
    const box = document.getElementById("recentSentBox");
    const list = document.getElementById("recentSentList");
    if (!box || !list) return;

    if (saved.length === 0) {
      box.hidden = true;
      return;
    }

    box.hidden = false;
    list.innerHTML = saved
      .slice(0, 3)
      .map(
        (w) => `
        <div class="sent-wish-item">
          <strong>${escapeHtml(w.name)} (${escapeHtml(w.relation)}):</strong>
          <span>${escapeHtml(w.message)} <em>${escapeHtml(w.sticker)}</em></span>
        </div>
      `
      )
      .join("");
  }

  // Xử lý submit Form Lời chúc (Trang 2)
  const wishForm = document.getElementById("wishForm");
  const wishStatusMsg = document.getElementById("wishStatusMsg");
  const submitWishBtn = document.getElementById("submitWishBtn");

  if (wishForm) {
    wishForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("wishSenderName")?.value.trim();
      const relation = document.getElementById("wishRelation")?.value || "";
      const message = document.getElementById("wishMessage")?.value.trim();

      if (!name || !message) return;

      if (submitWishBtn) {
        submitWishBtn.disabled = true;
        submitWishBtn.textContent = "Đang gửi lời chúc...";
      }

      const payload = {
        formType: "LỜI CHÚC TỐT NGHIỆP",
        name,
        relation,
        sticker: selectedSticker,
        message,
        submittedAt: new Date().toLocaleString("vi-VN")
      };

      try {
        await sendPayloadToOwner(payload);
        const saved = JSON.parse(localStorage.getItem("grad_sent_wishes_2026") || "[]");
        saved.unshift(payload);
        localStorage.setItem("grad_sent_wishes_2026", JSON.stringify(saved));
        renderRecentSentWishes();

        wishForm.reset();
        if (wishStatusMsg) {
          wishStatusMsg.className = "form-status-msg success";
          wishStatusMsg.textContent = "🎉 Cảm ơn bạn! Lời chúc đã được gửi tới tân cử nhân.";
        }
        showToast("💌 Đã gửi lời chúc thành công!");
      } catch {
        if (wishStatusMsg) {
          wishStatusMsg.className = "form-status-msg error";
          wishStatusMsg.textContent = "Có lỗi kết nối nhỏ, bạn thử gửi lại nhé!";
        }
      } finally {
        if (submitWishBtn) {
          submitWishBtn.disabled = false;
          submitWishBtn.innerHTML = "<span>✨ Gửi Lời Chúc Tới Tân Cử Nhân</span>";
        }
      }
    });
  }

  // 7. Trang 3: Đồng hồ đếm ngược thời gian thực
  function updateCountdown() {
    const target = new Date(GRADUATION_CONFIG.eventIsoDate).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setText("cdDays", String(days).padStart(2, "0"));
    setText("cdHours", String(hours).padStart(2, "0"));
    setText("cdMinutes", String(minutes).padStart(2, "0"));
    setText("cdSeconds", String(seconds).padStart(2, "0"));
  }

  // Nút Copy số điện thoại (Trang 3)
  document.querySelectorAll(".mini-action-btn.copy").forEach((btn) => {
    btn.addEventListener("click", () => {
      const phone = btn.dataset.copy || "";
      navigator.clipboard?.writeText(phone);
      showToast(`📞 Đã sao chép số điện thoại: ${phone}`);
    });
  });

  // Nút Lưu vào Google Calendar (Trang 3)
  document.getElementById("addToCalendarBtn")?.addEventListener("click", () => {
    const start = new Date(GRADUATION_CONFIG.eventIsoDate);
    const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
    const fmt = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const title = encodeURIComponent(`Lễ Tốt Nghiệp của ${GRADUATION_CONFIG.graduateName}`);
    const details = encodeURIComponent(
      `Thiệp mời tham dự Lễ Tốt Nghiệp của ${GRADUATION_CONFIG.graduateName}. Liên hệ: ${GRADUATION_CONFIG.mainContactPhoneDisplay}`
    );
    const location = encodeURIComponent(
      `${GRADUATION_CONFIG.eventVenueName}, ${GRADUATION_CONFIG.eventVenueAddress}`
    );

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(
      start
    )}/${fmt(end)}&details=${details}&location=${location}`;
    window.open(gcalUrl, "_blank", "noopener,noreferrer");
  });

  // Helper hiển thị Toast
  let toastTimeout;
  function showToast(msg) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.hidden = true;
    }, 3000);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (m) => {
      const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      return map[m] || m;
    });
  }

  // Khởi chạy
  applyConfiguration();
  initWelcomeCoverAndGuest();
  initBackgroundMusic();
  renderMemories();
  renderRecentSentWishes();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  updateNavigationUI();
});
