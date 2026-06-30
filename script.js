// ===============================
// Budget Planner
// script.js
// ===============================

const userType = document.getElementById("userType");
const dynamicFields = document.getElementById("dynamicFields");
const budgetInput = document.getElementById("budget");
const generateBtn = document.getElementById("generateBtn");
const resultSection = document.getElementById("resultSection");

// Hiển thị các lựa chọn theo đối tượng
userType.addEventListener("change", showExtraFields);

function showExtraFields() {

    const type = userType.value;

    dynamicFields.innerHTML = "";

    // ======================
    // SINH VIÊN
    // ======================

    if(type === "college"){

        dynamicFields.innerHTML = `

        <div class="form-group">

            <label>Bạn đang</label>

            <select id="living">

                <option value="home">Ở cùng gia đình</option>

                <option value="dorm">Ký túc xá</option>

                <option value="rent">Thuê trọ</option>

            </select>

        </div>

        `;

    }

    // ======================
    // NGƯỜI ĐI LÀM
    // ======================

    if(type === "worker"){

        dynamicFields.innerHTML = `

        <div class="form-group">

            <label>Mức thu nhập</label>

            <select id="income">

                <option value="low">Dưới 5 triệu</option>

                <option value="medium">5–10 triệu</option>

                <option value="high">10–20 triệu</option>

                <option value="higher">20–35 triệu</option>

                <option value="rich">Trên 35 triệu</option>

            </select>

        </div>

        `;

    }

}

// =============================
// NÚT LẬP KẾ HOẠCH
// =============================

generateBtn.addEventListener("click", createBudget);


// =============================

function createBudget(){

    const money = Number(budgetInput.value);

    if(!money){

        alert("Vui lòng nhập ngân sách.");

        return;

    }

    let data;

    // ======================
    // HỌC SINH
    // ======================

    if(userType.value==="student"){

        data = budgetData.student;

    }

    // ======================
    // SINH VIÊN
    // ======================

    else if(userType.value==="college"){

        const living = document.getElementById("living").value;

        data = budgetData.university[living];

    }

    // ======================
    // NGƯỜI ĐI LÀM
    // ======================

    else if(userType.value==="worker"){

        const income = document.getElementById("income").value;

        data = budgetData.worker.income[income];

    }

    if(!data){

        alert("Không tìm thấy dữ liệu.");

        return;

    }

    renderBudget(data,money);

}


// =============================

function renderBudget(data,total){

    let html="";

    html += `

    <div class="card">

        <h2>${data.title}</h2>

        <p>${data.note ?? ""}</p>

    </div>

    `;


    html += `<div class="card">`;

    html += `<h2>Phân bổ ngân sách</h2>`;



    if(data.categories){

        data.categories.forEach(category=>{

            const money=Math.round(total*category.percent/100);

            html += `

            <div class="category">

                <h3>

                ${category.icon}

                ${category.name}

                (${category.percent}%)

                </h3>

                <strong>

                ${money.toLocaleString()} VNĐ

                </strong>

            `;

            html += "<ul>";

            category.items.forEach(item=>{

                html += `<li>${item}</li>`;

            });

            html += "</ul>";

            html += "</div>";

        });

    }

    html += "</div>";

    resultSection.innerHTML=html;

}
