// ================================
// BUDGET DATA
// ================================

const budgetData = {

    // ==========================================
    // HỌC SINH
    // ==========================================

    student: {

        title: "Học sinh (11–17 tuổi)",

        note:
            "Ở độ tuổi này, phần lớn các khoản chi thiết yếu như tiền nhà, điện nước, học phí và sinh hoạt hằng ngày thường do gia đình chi trả. Mục tiêu là học cách quản lý tiền tiêu vặt, tiết kiệm và chi tiêu hợp lý.",

        categories: [

            {
                name: "Ăn uống",
                icon: "🍔",
                percent: 34,

                items: [
                    "Ăn sáng",
                    "Ăn vặt",
                    "Nước uống",
                    "Trà sữa",
                    "Đồ ăn cùng bạn bè"
                ]
            },

            {
                name: "Học tập",
                icon: "📚",
                percent: 26,

                items: [
                    "Vở",
                    "Bút",
                    "Sách",
                    "Photo tài liệu",
                    "Dụng cụ học tập"
                ]
            },

            {
                name: "Tiết kiệm",
                icon: "💰",
                percent: 15,

                items: [
                    "Bỏ ống heo",
                    "Quỹ dự phòng"
                ]
            },

            {
                name: "Giải trí",
                icon: "🎮",
                percent: 10,

                items: [
                    "Xem phim",
                    "Game",
                    "Cafe",
                    "Đi chơi"
                ]
            },

            {
                name: "Quà tặng",
                icon: "🎁",
                percent: 8,

                items: [
                    "Sinh nhật bạn",
                    "Hoạt động lớp"
                ]
            },

            {
                name: "Dự phòng",
                icon: "🛡️",
                percent: 7,

                items: [
                    "Chi phí phát sinh"
                ]
            }

        ]

    },

    // ==========================================
    // SINH VIÊN
    // ==========================================

    university: {

        home: {

            title: "Sinh viên ở cùng gia đình",

            note:
                "Bạn chưa phải chi trả tiền thuê nhà nên có thể dành tỷ lệ cao hơn cho học tập và tiết kiệm.",

            categories: [

                {
                    name: "Ăn uống",
                    icon: "🍚",
                    percent: 28,
                    items: [
                        "Ăn sáng",
                        "Ăn ngoài",
                        "Cafe",
                        "Đồ uống"
                    ]
                },

                {
                    name: "Học tập",
                    icon: "📚",
                    percent: 23,
                    items: [
                        "Học phí",
                        "Giáo trình",
                        "Khóa học",
                        "Photo"
                    ]
                },

                {
                    name: "Đi lại",
                    icon: "🛵",
                    percent: 12,
                    items: [
                        "Xăng xe",
                        "Gửi xe",
                        "Xe buýt"
                    ]
                },

                {
                    name: "Tiết kiệm",
                    icon: "💰",
                    percent: 18,
                    items: [
                        "Quỹ khẩn cấp",
                        "Tiết kiệm"
                    ]
                },

                {
                    name: "Giải trí",
                    icon: "🎬",
                    percent: 10,
                    items: [
                        "Xem phim",
                        "Du lịch",
                        "Cafe"
                    ]
                },

                {
                    name: "Mua sắm",
                    icon: "🛍️",
                    percent: 9,
                    items: [
                        "Quần áo",
                        "Mỹ phẩm",
                        "Phụ kiện"
                    ]
                }

            ]

        },

        dorm: {

            title: "Sinh viên ở ký túc xá",

            note:
                "Chi phí chỗ ở thấp hơn thuê trọ nhưng vẫn cần dành ngân sách cho sinh hoạt hằng tháng.",

            categories: []

        },

        rent: {

            title: "Sinh viên thuê trọ",

            note:
                "Tiền thuê phòng, điện nước và ăn uống là các khoản cần ưu tiên hàng đầu.",

            categories: []

        }

    },

    // ==========================================
    // NGƯỜI ĐI LÀM
    // ==========================================

    worker: {

        income: {

            low: {

                title: "Thu nhập dưới 5 triệu",

                categories: []

            },

            medium: {

                title: "Thu nhập 5–10 triệu",

                categories: []

            },

            high: {

                title: "Thu nhập 10–20 triệu",

                categories: []

            },

            higher: {

                title: "Thu nhập 20–35 triệu",

                categories: []

            },

            rich: {

                title: "Thu nhập trên 35 triệu",

                categories: []

            }

        }

    }

};
