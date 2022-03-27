const content = document.getElementById("content");
let listBackgrounds = ['#dc21d0', '#097947', '#091179', '#79095a']
for (let i = 0; i <= 80; i++) {
    let box = document.createElement("div");
    box.classList.add("box")
    let  indexOfBackground = Math.floor(Math.random()*listBackgrounds.length)
    //Lấy màu ngẫu nhiên.
    box.addEventListener('mouseenter', (e) => {
        //Tạo sự kiện hover qua box
        e.target.style.background = listBackgrounds[indexOfBackground];
        //Thêm bg cho box đang hover
    })
    box.addEventListener('mouseleave', (e) => {
        //Tạo sự kiện khi hover ra ngoài box
        setTimeout(() =>{
            e.target.style.background = 'none'
        },500)
        //Hủy bg hiện tại 0.05s
    })
    content.appendChild(box);
}