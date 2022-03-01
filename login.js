function join() {
    location.href = "http://127.0.0.1:5500/join.html";
}
function login() {
    var userId = document.getElementById("userId").value;
    var userPw = document.getElementById("userPw").value;

    if(userId === ""){
        alert("아이디를 입력하세요");
        return;
        
    }
    if(userPw === ""){
        alert("비밀번호를 입력하세요");
        return;
    }
    
    const json={
        loginId : userId,
        loginPassword : userPw
    };

    const options={
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type':'application/json'
        }
    }
    
    fetch('http://localhost:8080/users/login',options)
        .then(function(res) {
            if (res.status == 401)
               alert("아이디와 비밀번호를 확인해주세요");
            else if(res.status == 200) 
                location.href="http://127.0.0.1:5500/main.html";
            console.log(res);
            })
        .catch(err => console.error(err));
}

