document.getElementById("calculate").addEventListener("click", function() {
    const birthdateInput = document.getElementById("birthdate");
    const targetDateInput = document.getElementById("target-date");
    const genderSelect = document.getElementById("gender");
    const grid = document.getElementById("grid");
    const messageContainer = document.getElementById("message");

    const birthdate = new Date(birthdateInput.value);
    const targetDate = new Date(targetDateInput.value);
    const gender = genderSelect.value;
    const today = new Date();
    const averageLifespan = gender === "male" ? 78 : 85;

    // 生年月日とターゲット日の制約を追加
    if (birthdate >= today) {
        alert("生年月日は今日より前の日付を選択してください。");
        return; // 処理を中断
    }

    if (targetDate <= today) {
        alert("ターゲット日は今日より後の日付を選択してください。");
        return; // 処理を中断
    }

    const totalDays = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));
    const remainingDays = averageLifespan * 365 - totalDays;
    const targetDays = Math.floor((targetDate - today) / (1000 * 60 * 60 * 24)); // 選択した日までの経過日数

    grid.innerHTML = "";
    messageContainer.innerHTML = "";

    // ... 以降のコードは変更なし ...

    // メッセージに曜日を追加
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    const birthDayOfWeek = daysOfWeek[birthdate.getDay()];
    const targetDayOfWeek = daysOfWeek[targetDate.getDay()];

    const birthdateMessage = `生年月日: ${birthdate.getFullYear()}年${birthdate.getMonth() + 1}月${birthdate.getDate()}日（${birthDayOfWeek}曜日）`;
    const targetDateMessage = `ターゲット日: ${targetDate.getFullYear()}年${targetDate.getMonth() + 1}月${targetDate.getDate()}日（${targetDayOfWeek}曜日）`;

    const birthdateParagraph = document.createElement("p");
    birthdateParagraph.textContent = birthdateMessage;

    const targetDateParagraph = document.createElement("p");
    targetDateParagraph.textContent = targetDateMessage;

    messageContainer.appendChild(birthdateParagraph);
    messageContainer.appendChild(targetDateParagraph);



    for (let i = 0; i < totalDays; i++) {
        const square = document.createElement("div");
        if(totalDays===365*(i+1)){
        square.classList.add("square", "mark");
        }else{
        square.classList.add("square", "black");
        
        }grid.appendChild(square);
    }

    for (let i = 0; i < remainingDays; i++) {
        const square = document.createElement("div");
        if (i === targetDays) { // 選択した日を赤いマス目にする
            square.classList.add("square", "red");
        }
        else if(remainingDays===365*(i+1)){
            square.classList.add("square", "markii");
        }
        else {
            square.classList.add("square", "white");
        }
        grid.appendChild(square);
    }
    

    // メッセージを表示
    const totalDaysMessage = `あなたは${totalDays}日目の人生です。`;
    const remainingDaysMessage = `あなたの人生は残り${remainingDays}日です。`;
    const targetDaysMessage = `${targetDate.getFullYear()}年${targetDate.getMonth() + 1}月${targetDate.getDate()}日まであと${targetDays}日です。`;

    const totalDaysParagraph = document.createElement("p");
    totalDaysParagraph.textContent = totalDaysMessage;

    const remainingDaysParagraph = document.createElement("p");
    remainingDaysParagraph.textContent = remainingDaysMessage;

    const targetDaysParagraph = document.createElement("p");
    targetDaysParagraph.textContent = targetDaysMessage;

    messageContainer.appendChild(totalDaysParagraph);
    messageContainer.appendChild(remainingDaysParagraph);
    messageContainer.appendChild(targetDaysParagraph);
});
