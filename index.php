<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Life Calendar</title>
</head>
<body>
    <div class="container">
    <?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// データベース接続情報
$host = '127.0.0.1';
$username = 'yesorno_laravel';
$password = 59435943;
$database = 'yesorno_counter';

// データベースに接続
$mysqli = new mysqli($host, $username, $password, $database);
if ($mysqli->connect_error) {
    die("データベース接続エラー: " . $mysqli->connect_error);
}
$sql = "SELECT counter FROM counter";

$result = $mysqli->query($sql);
if (!$result) {
    die("クエリの実行エラー: " . $mysqli->error);
}

if ($result) {
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $currentCounter = $row["counter"];
        $newCounter = $currentCounter + 1;
        
        // 新しいカウンターの値をデータベースに更新
        $updateSql = "UPDATE counter SET counter = $newCounter";
        if ($mysqli->query($updateSql)) {
            // カウンターの新しい値を表示
            echo "あなたは: " . $newCounter."人目の人生です";
        } else {
            echo "カウンターの更新に失敗しました。";
        }
    } else {
        echo "カウンターが見つかりませんでした。";
    }
    // 結果セットを解放
    $result->free();
} else {
    echo "SQLクエリの実行に失敗しました。";
}

// データベース接続を解放
$mysqli->close();
?>
<div class="cropped-image">
<img src="mountain_00002.jpg" alt="山の画像">
<div class="image-text">Life Calendar</div>
</div>
        <h1>Life Calendar</h1>
        <label for="birthdate">生年月日：</label>
        <input type="date" id="birthdate" required>
        <label for="gender">性別：</label>
        <select id="gender" required>
            <option value="male">男性</option>
            <option value="female">女性</option>
        </select>

            <label for="target-date">ターゲット日：</label>
            <input type="date" id="target-date" required>

        

        <button id="calculate">計算する</button>


        <div id="message"></div> <!-- メッセージ表示用の要素 -->
        <div id="grid"></div>
    </div>
    <script src="script.js"></script>




</body>
</html>